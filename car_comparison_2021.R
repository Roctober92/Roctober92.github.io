library(tidyverse)
library(purrr)
library(ggplot2)
theme_set(theme_bw())
options(scipen = 999)

# influences (exluding maintenance)
# base cost
# gas/charge
# tires
# sales tax

# declare base cost
tesla_short_base <- 44990
tesla_long_base <- 50990 
accord_base <- 34646

# declare variables
state_tax <- .0725
mpg <- c(25,30)
gas_price <- c(80:145)*.03
charge_price <- c(8:15)
battery_range <- 250
snow_tires_accord <- 1300
snow_tires_tesla <- 1466
tire_cycles <- 2
mileage <- c(1:3)*50000

# purpose: calculate cost at 50, 100, and 150k miles
accord_prices <- map_dfr(gas_price, function(gas_price) {
  
  # nrow(mileage) copies of gas price
  gas_price <- map(1:length(mileage), function(x) gas_price)
  
  # return of df iterating of mileages
  map2_dfr(gas_price, mileage, function(gas_price, mileage) {
    
    # nrow(mpg) copies of params
    gas_price <- map(1:length(mpg), function(x) gas_price)
    mileage <- map(1:length(mpg), function(y) mileage)
    
    # return df of iterating through mpg
    pmap_dfr(list(gas_price, mileage, mpg), function(gas_price, mileage, mpg) {
      
      # df to return
      tibble(
        car = 'accord',
        mileage = mileage,
        base_price = accord_base,
        price_with_tax = accord_base * state_tax + accord_base,
        price_of_tax = accord_base * state_tax,
        energy_price = gas_price,
        tires = snow_tires_accord * tire_cycles,
        refill = (mileage * gas_price) / mpg,
        cost = accord_base +  accord_base * state_tax + snow_tires_accord * tire_cycles + (mileage * gas_price) / mpg,
        mpg = as.character(mpg)
      )
    })
  })
})

tesla_short_prices <- map_dfr(charge_price, function(charge_price) {
  
  # nrow(mileage) copies of charge price
  charge_price <- map(1:length(mileage), function(x) charge_price)
  
  # return of df iterating of mileages
  map2_dfr(charge_price, mileage, function(charge_price, mileage) {
    
    tibble(
      car = 'tesla_short',
      mileage = mileage,
      base_price = tesla_short_base,
      price_with_tax = tesla_short_base * state_tax + tesla_short_base,
      price_of_tax = tesla_short_base * state_tax,
      energy_price = charge_price,
      tires = snow_tires_tesla * tire_cycles,
      refill = (mileage * charge_price) / battery_range,
      cost = tesla_short_base +  tesla_short_base * state_tax + snow_tires_tesla * tire_cycles + (mileage * charge_price) / battery_range 
    )
    
  })
})

tesla_long_prices <- map_dfr(charge_price, function(charge_price) {
  
  # nrow(mileage) copies of charge price
  charge_price <- map(1:length(mileage), function(x) charge_price)
  
  # return of df iterating of mileages
  map2_dfr(charge_price, mileage, function(charge_price, mileage) {
    
    tibble(
      car = 'tesla_long',
      mileage = mileage,
      base_price = tesla_long_base,
      price_with_tax = tesla_long_base * state_tax + tesla_long_base,
      price_of_tax = tesla_long_base * state_tax,
      energy_price = charge_price,
      tires = snow_tires_tesla * tire_cycles,
      refill = (mileage * charge_price) / battery_range,
      cost = tesla_long_base +  tesla_long_base * state_tax + snow_tires_tesla * tire_cycles + (mileage * charge_price) / battery_range 
    )
  })
})

# combine them all together
all_prices <- bind_rows(accord_prices, tesla_short_prices, tesla_long_prices)

#####################
# visualizations
#####################

# accord
all_prices %>% filter(car == 'accord') %>% ggplot(aes(mileage, cost, color = energy_price)) + geom_point() + facet_wrap(~mpg)

# tesla short range
all_prices %>% filter(car == 'tesla_short') %>% ggplot(aes(mileage, cost, color = energy_price)) + geom_point()

# tesla long range
all_prices %>% filter(car == 'tesla_long') %>% ggplot(aes(mileage, cost, color = energy_price)) + geom_point()

all_prices %>% 
  mutate(car = ifelse(!is.na(mpg), str_c(car, mpg, sep = ' - '), car)) %>% 
  ggplot(aes(x = car, y = cost, color = as.factor(energy_price))) + geom_point(size = 3) + facet_wrap(~mileage, nrow = 3)

w#####################
# loan analysis
#####################

# create loan table
loan_amounts <- tibble(
  car = 'accord',
  base_price = accord_base,
  tax_amount = accord_base*state_tax,
  accord_tires = snow_tires_accord,
  downpayment = 4000,
  loan_amount = accord_base + tax_amount + snow_tires_accord - downpayment,
  loan_length = 6,
  rates = c(2.8, 3, 3.2, 3.4, 3.6, 3.8, 4),
  monthly_pay = c(520, 524, 527, 530, 533, 536, 539),
  loan_total = c(37474, 37695, 37918, 38141, 38365, 38590, 38815)
) %>% rbind(tibble(
  car = 'tesla_short',
  base_price = tesla_short_base,
  tax_amount = tesla_short_base*state_tax,
  accord_tires = snow_tires_tesla,
  downpayment = 4000,
  loan_amount = tesla_short_base + tax_amount + snow_tires_tesla - downpayment,
  loan_length = 6,
  rates = c(2.8, 3, 3.2, 3.4, 3.6, 3.8, 4),
  monthly_pay = c(691, 695, 699, 703, 707, 711, 715),
  loan_total = c(49719, 50013, 50308, 50604, 50901, 51200, 51499)
))



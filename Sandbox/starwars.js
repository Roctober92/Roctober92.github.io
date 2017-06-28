//helper function to fetch the data from an external source
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}



//lets get some ships
function fetchShips() {
    var url = "//swapi.co/api/starships/";
    getJSON(url).then(function (data) {

        console.log(data);
        var results = data.results
        // data.results[0].name
        // results[0].name

        //get list element where id="shipList
        var shiplistElement = document.getElementById('shipList')

        // make sure HTML is nuked
        shiplistElement.innerHTML = "";

        // for every ship in 'results' list
        results.forEach(function(ship) {

            var list = document.createElement('li');
            var anchor = document.createElement('a');


            // set href attribute to url of ship
            // ship.url because in forEach, separates
            // results into ship
            anchor.setAttribute('href', ship.url)


            // set link element contents to name of ship
            //  CreateTextNode = ship.name would work
            anchor.innerHTML = ship.name


            // add the link to the list item
            // list item to list
            list.appendChild(anchor)
            shiplistElement.appendChild(list)
        });
    });
}



fetchShips();





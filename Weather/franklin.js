// Current Location Scripts
(function () {



    (function getGeoLocation() {
        "use strict";
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/493dee0bd9cb9415/geolookup/conditions/q/" + lat + "," + long + ".json";
        getJSON(url).then(function (data) {
            console.log(data);
            //add the code necessary here to update the page with all of the correct data points.

            var local = data.location;
            var weather = data.current_observation;
            document.getElementById('place').innerHTML = local.city + ", " + local.state;
            document.getElementById('current').innerHTML = Math.round(weather.temp_f) + "&deg;";
            document.getElementById('mph').innerHTML = weather.wind_mph + " mph";
            document.getElementById('dir').innerHTML = weather.wind_dir;

            document.getElementById('sky').innerHTML = weather.weather;


            //this line will cause the Loading message to fade away.
            document.getElementById("cover").classList.add('fadeout');



        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());

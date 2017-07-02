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
        // data.results[i].name
        // results[i].name

        //get list element where id="shipList
        var shiplistElement = document.getElementById('shipList')

        // make sure HTML is nuked
        shiplistElement.innerHTML = "";

        // like a for loop
        // for every ship in 'results' list
        results.forEach(function(ship) {

            var list = document.createElement('li');
            var anchor = document.createElement('a');


            // set href attribute to url of ship
            // ship.url because in forEach, separates
            // results into ship
            anchor.setAttribute('href', ship.url);


            // set link element contents to name of ship
            //  CreateTextNode = ship.name would work
            anchor.innerHTML = ship.name;


            // add the link to the list item
            // list item to list
            list.appendChild(anchor);
            shiplistElement.appendChild(list);


            //attach a click event listener
            //call ship details function
            anchor.addEventListener("click", function(event) {
                event.preventDefault();
                getShipDetails(ship.url);
            });
        });
    });
}

// gets details for every ship
function getShipDetails(url) {
    getJSON(url).then(function(data) {
        var name1 = document.getElementById('name1');
        var model1 = document.getElementById('model1');
        var class1 = document.getElementById('class1');

        // name of ship = html for name1 id
        name1.innerHTML = "Name: " + data.name;

        model1.innerHTML = "Model: " + data.model;

        class1.innerHTML = "Class: " + data.starship_class;
    })
}
var prev = document.getElementById('prev');
prev.addEventListener("click", function(event) {
    getFetchPeople()
})

function getFetchPeople() {
    var url = "//swapi.co/api/people/";
    getJSON(url).then(function (data) {
        var results = data.results
        var prev = document.getElementById('prev');
        var unorder = document.createElement('ul')

        results.forEach (function (person) {

            var list = document.createElement('li');
            var anchor = document.createElement('a');

            anchor.setAttribute('href', person.url);

            anchor.innerHTML = person.name;

            list.appendChild(anchor);
            unorder.appendChild(list);

            anchor.addEventListener("click", function(event) {
                event.preventDefault();
                getPersonDetails(person.url);
            });
        })
    })
}

function getPersonDetails(url) {
    getJSON(url).then(function(data) {
        var name1 = document.getElementById('name1');
        var model1 = document.getElementById('model1');
        var class1 = document.getElementById('class1');

         // name of ship = html for name1 id
        name1.innerHTML = "Name: " + data.name;

        model1.innerHTML = "Height: " + data.height;

        class1.innerHTML = "Gender: " + data.gender;
    })
}

// PART 3








fetchShips();





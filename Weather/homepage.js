function fetchData (location) {
    var source = "/homework/weather.json"
    getJSON(source).then(function (data) {
        console.log(data);
        var city = document.getElementById('location');

        city.innerHTML = "Location: " + data[location]['City'];

        var temp = document.getElementById('temp');

        temp.innerHTML = "Temp: " + data[location]['High'];

    })
};

// return URL JSON
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}

// Link Info --> display
// Every Link --> different info
function init() {
    var franklin = document.getElementById('franklinlink');

    franklin.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData('Franklin');
    }) ();
    // () calls the function again
}

fetchData("Greenville");


// key 493dee0bd9cb9415

// Get boxes where imgs will populate
var meat_pic = document.getElementById("meat_pic");
var side_pic = document.getElementById("side_pic");
var style_pic = document.getElementById("style_pic");


// Get button ids
var chicken = document.getElementById("chicken");
var beef = document.getElementById("beef");
var fish = document.getElementById("fish");

var mashies = document.getElementById("mashies");
var rice = document.getElementById("rice");
var salad = document.getElementById("salad");

var plain = document.getElementById("plain");
var napolitana = document.getElementById("napolitana");
var sandwich = document.getElementById("sandwich");

// change box aco
chicken.onclick = function () {
    meat_pic.style.backgroundImage = "url('/final_project/linkspages/photos/pmila.jpg')";
    document.body.style.backgroundSize = "cover";
}

beef.onclick = function () {
    meat_pic.style.backgroundImage = "url('/final_project/linkspages/photos/cmila.jpg')";
    document.body.style.backgroundSize = "cover";
}

fish.onclick = function () {
    meat_pic.style.backgroundImage = "url('/final_project/linkspages/photos/fmila.jpg')";
    document.body.style.backgroundSize = "cover";
}

mashies.onclick = function () {
    side_pic.style.backgroundImage = "url('/final_project/linkspages/photos/papas.jpg')";
    document.body.style.backgroundSize = "cover";
}

rice.onclick = function () {
    side_pic.style.backgroundImage = "url('/final_project/linkspages/photos/rice.jpg')";
    document.body.style.backgroundSize = "cover";
}

salad.onclick = function () {
    side_pic.style.backgroundImage = "url('/final_project/linkspages/photos/salad.jpg')";
    document.body.style.backgroundSize = "cover";
}

plain.onclick = function () {
    style_pic.style.backgroundImage = "url('/final_project/linkspages/photos/pmila.jpg')";
    document.body.style.backgroundSize = "cover";
}

napolitana.onclick = function () {
    style_pic.style.backgroundImage = "url('/final_project/linkspages/photos/nap.jpg')";
    document.body.style.backgroundSize = "cover";
}

sandwich.onclick = function () {
    style_pic.style.backgroundImage = "url('/final_project/linkspages/photos/sandwhich.jpg')";
    document.body.style.backgroundSize = "cover";
}

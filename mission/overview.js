var elements = document.getElementsByTagName("a");
for (var i = 0; i < elements.length; i++) {
    if (elements[i].className == 'mtc') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/eden.jpg')";
        };
    };
    if (elements[i].className == 'merlo') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/merlo.jpg')";
        };
    };
    if (elements[i].className == 'arco') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/arco.jpg')";
        };
    };
    if (elements[i].className == 'sl') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/slugares.jpg')";
        };
    };
    if (elements[i].className == 'itu') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/ituz.jpg')";
        };
    };
    if (elements[i].className == 'lujan') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/apostasia.jpg')";
        };
    };
    if (elements[i].className == 'psm') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/altos.jpg')";
        };
    };
    if (elements[i].className == 'chivilcoy') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/club.jpg')"
        };
    };
};

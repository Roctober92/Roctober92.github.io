var elements = document.getElementsByTagName("a");
for (var i = 0; i < elements.length; i++) {
    if (elements[i].className == 'mtc') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/eden.JPG')";
        };
    };
    if (elements[i].className == 'merlo') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/merlo.jpg')";
        };
    };
    if (elements[i].className == 'arco') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/arco.JPG')";
        };
    };
    if (elements[i].className == 'sl') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/slugares.jpg')";
        };
    };
    if (elements[i].className == 'itu') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/ituz.JPG')";
        };
    };
    if (elements[i].className == 'lujan') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/apostasia.JPG')";
        };
    };
    if (elements[i].className == 'psm') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/altos.JPG')";
        };
    };
    if (elements[i].className == 'chivilcoy') {
        elements[i].onclick = function () {
            document.body.style.backgroundImage = "url('directory/club.JPG')";
        };
    };
};

var caro = document.getElementById('caro');
caro.onclick = function () {
    document.body.style.backgroundImage = "url('directory/carobap.JPG')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var bar = document.getElementById('barrowes');
bar.onclick = function () {
    document.body.style.backgroundImage = "url('directory/barrowes.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var os = document.getElementById('oscar');
os.onclick = function () {
    document.body.style.backgroundImage = "url('directory/oscarbap.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var m = document.getElementById('mtc');
m.onclick = function () {
    document.body.style.backgroundImage = "url('directory/mtc.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var d = document.getElementById('dad');
d.onclick = function () {
    document.body.style.backgroundImage = "url('directory/dad.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var mar = document.getElementById('maria');
mar.onclick = function () {
    document.body.style.backgroundImage = "url('directory/maria.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var rom = document.getElementById('rom');
rom.onclick = function () {
    document.body.style.backgroundImage = "url('directory/rom.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var hector = document.getElementById('hector');
hector.onclick = function () {
    document.body.style.backgroundImage = "url('directory/oscar.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var da = document.getElementById('david');
da.onclick = function () {
    document.body.style.backgroundImage = "url('directory/david.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

var colt = document.getElementById('colt');
colt.onclick = function () {
    document.body.style.backgroundImage = "url('directory/colton.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
};

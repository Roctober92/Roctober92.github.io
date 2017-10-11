var first_left = ['Photo', 'Info', 'Life Lesson', 'Childhood Memory', 'Marriage Advice', 'If 2nd life, what to do', 'Question 5'];
var classes = ['one', 'two', 'three', 'four'];
var names = ['Edith Holzhauser', 'Patricia Stofko Wolfe', 'Eugene Joseph Wolfe', 'Richard Gail Bartholomew'];

function display() {
    for (var y = 0; y < names.length; y++) {
        // var localy = y;
        // This frees up y for use
        var rc = document.getElementById('firstR');
        var div1 = $("<div></div>");
        var div2 = $("<div></div>");
        div2.addClass(classes[y]);
        $(rc).append(div1);
        $(rc).append(div2);
        $(div1).css("border", "0px solid green");
        $(div2).css("border", "5px solid black");
        $(div1).css("height", "80px");
        $(div1).css("margin-top", "3em");
        $(div2).css("height", "380px");
        $(div2).css("margin-top", "3em");
        $(div2).css("margin-bottom", "21em");
        var h = $("<h1></h1>");
        $(h).html(names[y]);
        $(h).css("font-size", "60px");
        $(h).css("margin", "auto");
        $(h).css("text-align", "center");
        $(div1).append(h);

        for (var z = 0; z < first_left.length; z++) {
            var lc = document.getElementById('firstL');
            var div = document.createElement('div');
            div.className = first_left[z];
            var p = document.createElement('p');
            p.innerHTML = first_left[z];
            div.appendChild(p);
            lc.appendChild(div);
            p.style.margin = 'auto';
            p.style['font-size'] = '25px';
            p.style['text-align'] = 'center';
            div.style.border = '0px solid black';
            div.style.height = '60px';
            div.style.width = '140px';
            div.style['margin-top'] = '3em';
            if (z == 6) {
                div.style['margin-bottom'] = '10em';
            };
            div.style['background-color'] = 'deepskyblue';
            div.style['grid-row'] = [z + 1] + '/' + [z + 2];
            div.style.transition = "transform .5s";
            div.style['border-radius'] = '10px';
            $(div).hover(function () {
                $(this).css({
                    transform: 'scale(1.3)'
                });
            }, function () {
                $(this).css({
                    transform: 'scale(1)'
                });
            });
            if (y == 0 && z == 0) {
                div.onclick = function() {
                    $("." + classes[0] + " ul").hide();
                    $("." + classes[0]).css("backgroundImage", "url('abuelos/oma.jpg')");
                    $("." + classes[0]).css("backgroundSize", "550px 500px");
                }
            } else if (y == 0 && z == 1) {
                div.onclick = function() {
                    $("." + classes[0] + " ul").hide();
                    $("." + classes[0]).css("backgroundImage", "none");
                    $("." + classes[0]).append('<ul></ul>');
                    $("." + classes[0] + " ul").append('<li><strong>Married: </strong> Marriage Date</li>');
                    $("." + classes[0] + " ul").append('<li><strong>Birth Date: </strong> Birth Date</li>');
                    $("." + classes[0] + " ul").append('<li><strong>Death Date: </strong> None</li>');
                    $("." + classes[0] + " ul").append('<li><strong>Occupation: </strong> Not sure</li>');
                    $("." + classes[0] + " ul li").css("margin-bottom", "2em");
                    $("." + classes[0] + " ul li").css("font-size", "30px");
                }
            } else if (y == 1 && z == 0) {
                div.onclick = function() {
                    $("." + classes[1] + " ul").hide();
                    $("." + classes[1]).css("backgroundImage", "url('abuelos/gma.jpg')");
                    $("." + classes[1]).css("backgroundSize", "cover");
                }
            } else if (y == 1 && z == 1) {
                div.onclick = function() {
                    $("." + classes[1] + " ul").hide();
                    $("." + classes[1]).css("backgroundImage", "none");
                    $("." + classes[1]).append('<ul></ul>');
                    $("." + classes[1] + " ul").append('<li><strong>Married: </strong> Marriage Date</li>');
                    $("." + classes[1] + " ul").append('<li><strong>Birth Date: </strong> Birth Date</li>');
                    $("." + classes[1] + " ul").append('<li><strong>Death Date: </strong> None</li>');
                    $("." + classes[1] + " ul").append('<li><strong>Occupation: </strong> Housewife, Remmington, CPA</li>');
                    $("." + classes[1] + " ul li").css("margin-bottom", "2em");
                    $("." + classes[1] + " ul li").css("font-size", "30px");
                }
            } else if (y == 2 && z == 0) {
                div.onclick = function() {
                    $("." + classes[2] + " ul").hide();
                    $("." + classes[2]).css("backgroundImage", "url('abuelos/gpa.jpg')");
                    $("." + classes[2]).css("backgroundSize", "cover");
                }
            } else if (y == 2 && z == 1) {
                div.onclick = function() {
                    $("." + classes[2] + " ul").hide();
                    $("." + classes[2]).css("backgroundImage", "none");
                    $("." + classes[2]).append('<ul></ul>');
                    $("." + classes[2] + " ul").append('<li><strong>Married: </strong> 20 Jan 1961, Denver CO</li>');
                    $("." + classes[2] + " ul").append('<li><strong>Birth Date: </strong> 31 Mar 1939</li>');
                    $("." + classes[2] + " ul").append('<li><strong>Death Date: </strong> None</li>');
                    $("." + classes[2] + " ul").append('<li><strong>Occupation: </strong> Switchman, Conductor</li>');
                    $("." + classes[2] + " ul li").css("margin-bottom", "2em");
                    $("." + classes[2] + " ul li").css("font-size", "30px");
                }
            } else if (y == 3 && z == 0) {
                div.onclick = function() {
                    $("." + classes[3] + " ul").hide();
                    $("." + classes[3]).css("backgroundImage", "url('abuelos/opa.jpg')");
                    $("." + classes[3]).css("backgroundSize", "cover");
                }
            } else if (y == 3 && z == 1) {
                div.onclick = function() {
                    $("." + classes[3] + " ul").hide();
                    $("." + classes[3]).css("backgroundImage", "none");
                    $("." + classes[3]).append('<ul></ul>');
                    $("." + classes[3] + " ul").append('<li><strong>Married: </strong> Marriage Date</li>');
                    $("." + classes[3] + " ul").append('<li><strong>Birth Date: </strong> 28 Jan 1935 , Mayfield, UT</li>');
                    $("." + classes[3] + " ul").append('<li><strong>Death Date: </strong> 1 Feb 1998, Chatfield, CO</li>');
                    $("." + classes[3] + " ul").append('<li><strong>Occupation: </strong> CPA, Computer Engineer, Air Force</li>');
                    $("." + classes[3] + " ul li").css("margin-bottom", "2em");
                    $("." + classes[3] + " ul li").css("font-size", "30px");
                };
            };
        }
    };
};

display();

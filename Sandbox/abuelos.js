var first_left = ['Photo', 'Info', 'Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];

var names = ['Edith Holzhauser', 'Patricia Stofko Wolfe', 'Eugene Joseph Wolfe'];

function display() {
    for (var y = 0; y < names.length; y++) {
        var rc = document.getElementById('firstR');
        var div1 = $("<div></div>");
        var div2 = $("<div></div>");
        $(div1).attr('name', names[y]);
        $(div2).attr('name', names[y] + " info");
        $(rc).append(div1);
        $(rc).append(div2);
        $(div1).css("border", "0px solid green");
        $(div2).css("border", "5px solid black");
        $(div1).css("height", "80px");
        $(div1).css("margin-top", "3em");
        $(div2).css("height", "380px");
        $(div2).css("margin-top", "3em");
        $(div2).css("margin-bottom", "12em");
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
            div.style.height = '40px';
            div.style.width = '120px';
            div.style['margin-top'] = '3em';
            if (z == 6) {
                div.style['margin-bottom'] = '10em';
            }
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
                })
            });
            if (y == 0 && z == 0) {
                div.onclick = function() {
                    $(div2).css("backgroundImage", "url('abuelos/oma.jpg')");
                    $(div2).css("backgroundSize", "cover");
                }
            };
            if (y == 1 && z == 0) {
                div.onclick = function() {
                    $(div2).css("backgroundImage", "url('abuelos/gma.jpg')");
                    $(div2).css("backgroundSize", "cover");
                }
            }
        }
    };
};

display();

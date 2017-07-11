function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}



function fetch_Words() {
    var source = "/final_project/linkspages/speech.json";
    getJSON(source).then(function (data) {
        console.log(data);
        // data = json file

        // Make Phrases
        var phrases = ['cc0', 'cc1', 'cc2', 'cc3', 'cc4', 'cc5', 'cc6', 'cc7', 'cc8', 'cc9', 'cc10', 'cc11', 'cc12', 'cc13'];

        var x = 1;
        var phrase = data.Phrases.Phrases;
        for (var j = 0; j < 14; j++) {
            var z = document.getElementById(phrases[j]);
            var p = document.createElement('p');
            p.innerHTML = phrase[x];
            z.appendChild(p);
            x++;
        }
        // Make Titles under Words
        var cas = data.Words.Desc[0].cas;
        var esp = data.Words.Desc[0].esp;
        var eng = data.Words.Desc[0].eng;
        var c0 = document.getElementById('c0');
        var e0 = document.getElementById('e0');
        var s0 = document.getElementById('s0');
        var s_one = document.createElement('h1');
        var e_one = document.createElement('h1');
        var c_one = document.createElement('h1');
        c_one.innerHTML = cas;
        e_one.innerHTML = esp;
        s_one.innerHTML = eng;
        c0.appendChild(c_one);
        e0.appendChild(e_one);
        s0.appendChild(s_one);
        // Make columns for 3 languages
        var word_list = document.getElementById("words");
        var words_c = data.Words.Words;
        var id_c = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'];
        var id_e = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10'];
        var id_s = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'];
        var i = 0;
        words_c.forEach(function (word) {
            var c = document.getElementById(id_c[i]);
            var e = document.getElementById(id_e[i]);
            var s = document.getElementById(id_s[i]);
            var p1 = document.createElement('p');
            var p2 = document.createElement('p');
            var p3 = document.createElement('p');
            p1.innerHTML = word.cas;
            p2.innerHTML = word.esp;
            p3.innerHTML = word.eng;
            c.appendChild(p1);
            e.appendChild(p2);
            s.appendChild(p3);
            i++;
        });
    });
}

fetch_Words();

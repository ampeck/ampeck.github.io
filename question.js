/**
 * Created by ashleypeck on 3/1/17.
 */

function loadQuestion() {
    // use PapaParse library to convert csv to JSON
    Papa.parse('https://ampeck.github.io/questions2.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results, file) {
            console.log('Parsing complete', results.data);

            let questions2 = results.data;

            let questionId = window.location.search.split('=')[1];
            //let questionId = 1;
            document.getElementById('heading').innerHTML = questions2[questionId - 1].heading;
            console.log(window.location.search.split('=')[1]);

            // body paragraphs
            document.getElementById('paragraphs').innerHTML = String(questions2[questionId - 1].body);

            // buttons
            let buttonsDiv = document.getElementById('buttons');
            // button1
            if (questions2[questionId -1].button1name) {
                console.log('in if');
                console.log(String(questions2[questionId-1].button1name));
                let button1 = document.createElement('a');
                button1.innerHTML = questions2[questionId-1].button1name;
                button1.className = "btn btn-default btn-lg btn-block";
                button1.setAttribute('href', "question.html?id=" + questions2[questionId - 1].button1link);
                button1.setAttribute('role', 'button');
                buttonsDiv.append(button1);
            }
            // button2
            if (questions2[questionId -1].button2name) {
                console.log('in if');
                console.log(String(questions2[questionId-1].button2name));
                let button2 = document.createElement('a');
                button2.innerHTML = questions2[questionId-1].button2name;
                button2.className = "btn btn-default btn-lg btn-block";
                console.log ("question.html?id=" + questions2[questionId - 1].button2link);
                button2.setAttribute('href', "question.html?id=" + questions2[questionId - 1].button2link);
                button2.setAttribute('role', 'button');
                buttonsDiv.append(button2);
            }
            // button3
            if (questions2[questionId -1].button3name) {
                console.log('in if');
                console.log(String(questions2[questionId-1].button3name));
                let button3 = document.createElement('a');
                button3.innerHTML = questions2[questionId-1].button3name;
                button3.className = "btn btn-default btn-lg btn-block";
                console.log ("question.html?id=" + questions2[questionId - 1].button3link);
                button3.setAttribute('href', "question.html?id=" + questions2[questionId - 1].button3link);
                button3.setAttribute('role', 'button');
                buttonsDiv.append(button3);
            }
        }
    });
}
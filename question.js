
function loadQuestion() {
    // use PapaParse library to convert csv to JSON
    Papa.parse('https://ampeck.github.io/questions.csv', {
        download: true,
        header: true,
        dynamicTyping: true,


        complete: function (results, file) {
            console.log('Parsing complete', results.data);
            let questions = results.data;

            let questionId = window.location.search.split('=')[1];
            console.log('question id: ' + questionId);
            let arrayIndex = getQuestionById(questions, questionId);
            console.log('array index: ' + arrayIndex);

            // render heading and body paragraphs
            document.getElementById('heading').innerHTML = questions[arrayIndex].heading;
            document.getElementById('paragraphs').innerHTML = String(questions[arrayIndex].body);

            // render buttons
            let buttonDiv = document.getElementById('buttons');

            if (questions[arrayIndex].button1name) {
                addButton(questions[arrayIndex].button1name, questions[arrayIndex].button1name, buttonDiv)
            }
            if (questions[arrayIndex].button2name) {
                addButton(questions[arrayIndex].button2name, questions[arrayIndex].button2name, buttonDiv)
            }
            if (questions[arrayIndex].button3name) {
                addButton(questions[arrayIndex].button3name, questions[arrayIndex].button3name, buttonDiv)
            }
        }
    });
}

// Adds a button to buttonDiv with text buttonName and the button when clicked
// will render the question with number n
function addButton(buttonName, nextId, buttonDiv) {
    let button = document.createElement('a');
    button.innerHTML = buttonName;
    button.className = "btn btn-default btn-lg btn-block";
    button.setAttribute('href', "question.html?id=" + nextId);
    button.setAttribute('role', 'button');
    buttonDiv.appendChild(button);
}

// finds question in array with id === targetId
// returns index in which this can be located in array
function getQuestionById(data, targetId) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === targetId) {

            return i;
        }
    }
    return -1;
}
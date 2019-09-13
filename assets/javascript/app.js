
const quizQuestions = [
    {
        question: "What Venue did the Chicago Bears first play their games?",
        choices: ["Solider's Field", "Wrigley Field", "United Center", "Allstate Arena"],
        correctAnswer: "Wrigley Field",
        name: "q1"
    },

    {
        question: "What Jersey number did Michael Jordan wear coming out of retirement in 1996?",
        choices: ["23", "33", "45", "34"],
        correctAnswer: "45",
        name: "q2"
    },  
    {  
        question: "What year/season was Solider's Field renovated?",
        choices: ["2005","1985","2010","1996"],
        correctAnswer: "2005",
        name:"q3"
    },

    


    ];

//Initial values

let counter = 5;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;
let countdown;

//If question is answered incorrectly, skip to next question //
function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        console.log('game over');
        displayResult();
    } else {
        currentQuestion++;
        loadQuestion();
    }

}

function timeUp() {
    clearInterval(timer);

    lost++;
    nextQuestion();

}

// countdown; {

//     counter++;

//     $('#time').html('timer:' + counter);

// }
//display question and the choices for user to the browser

function loadQuestion() {

    counter = 10;
    timer = setInterval(countDown, 1000);

    // $('#time').html('timer:' + counter);

    

}
function countDown(){
    counter--;
    $('#time').html('Timer:' + counter);

    if (counter === 0) {
        timeUp();

        const question = quizQuestions[currentQuestion].question; //
        const choices = quizQuestions[currentQuestion]; //

        $('#time').html('timer:' + counter);
        $('#game').html('<h4>' + question + '</h4>');
        loadChoices(choices);
        loadRemainingQuestions();




    }
};
// loadRemainingQuestions()
// loadQuestion();

function loadChoices(data) {
    let result = '';
    console.log(data.choices.length)
    for (let i = 0; i < data.choices.length; i++) {
        console.log(data.choices[i])
        result += `<input class="choices" type="radio" name="${data.name}" data-answer="${data.choices[i]}"/> ${data.choices[i]}`;
    }
    $('#game').append(result);
    $('#game').append(`<br><button id="submit" type="submit">Submit</button>`)


    return result;
}

//Start Game //
$(document).on('click', '#submit', function () {
    clearInterval(timer);
    const selectedAnswer = document.querySelector(`input[name="${quizQuestions[currentQuestion].name}"]:checked`).value;
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer

    console.log(selectedAnswer)
    console.log(correctAnswer)


    if (correctAnswer === selectedAnswer) {
        console.log("in correct")
        score++;
        nextQuestion();
    } else {
        lost++;
        nextQuestion();

        console.log('Win', selectedAnswer);
    }
});;

function displayResult() {
    const result = `
    <p> You get ${score} question(s) right</p>
    <p> You missed ${lost} question(s) right</p>
    <p> Total questions ${quizQuestions.length} question(s) right </p>
    <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $('#game').html(result);
}

$(".btn-primary").on('click', function () {
    counter = 3;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;

    loadQuestion();
});

function loadRemainingQuestions() {
    const remainingQuestions = quizQuestions.length - (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;

    return `Remaining Question: ${requestAnimationFrame}/${totalQuestion}`;

}






const quizQuestions = [
    {
        question: "What Venue did the Chicago Bears first play their games?",
        choices: ["Solider's Field", "Wrigley Field", "United Center", "Allstate Arena"],
        correctAnswer: "Wrigley Field"
    },

    {
        question: "What Jersey number did Michael Jordan wear coming out of retirement in 1996?",
        choices: ["23", "33", "45", "34"],
        correctAnswer: "45"
    }];

//Initial values

let counter = 10;
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

countdown; {

    counter++;

    $('#time').html('timer:' + counter);

}
//display question and the choices for user to the browser

function loadQuestion() {

    counter = 10;
    timer = setInterval(countdown, 1000);

    $('#timer').html('timer:' + counter);

    if (counter === 0) {
        timeUp();

        const question = quizQuestions[currentQuestion].question; //
        const choices = quizQuestions[currentQuestion].choices; //

        $('#time').html('timer:' + counter);
        $('#game').html('<h4>' + question + '</h4>');
        ${loadchoices(choices)};
        ${loadRemainingQuestions()}
        
        


    }

    function loadChoices(choices) {
        let result = '';

        for (let i = 0; i < choices.length; i++) {
            result += `<p class="choice" data-answer="${choices[i]}"> ${choices[i]} </p>`;
        }


        return result;
    }
    //Start Game //
    $(document).on('click', '.choices', function () {
        clearInterval(timer);
        const selectedAnswer = $(this).attr('data-answer');
        const correctAnswer = quizQuestions[currentQuestion].correctAnswer
        c

        if (correctAnswer === selectedAnswer) {

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

    $(document).on('click', '#reset', function() {
        counter = 10;
        currentQuestion = 0;
        score = 0;
        lost = 0;
        timer = null;

        loadQuestion();
    });;

    function loadRemainingQuestions() {
        const remainingQuestions = quizQuestions.length - (currentQuestion + 1);
        const totalQuestion = quizQuestion.length;

        return `Remaining Question: ${requestAnimationFrame}/${totalQuestion}`;

    }



loadQuestion();

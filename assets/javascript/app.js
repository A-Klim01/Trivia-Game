
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

let counter = 30;
let currentQuestion = 0;
let score = 0;
let lost = 0;
let timer;

//display question and the choices for user to the browser

function loadQuestion() {

    counter = 30;
    timer = setInterval(counter, 1000);

    $('#time').html('timer:' + counter);

    if (counter === 0) {
        timeUp();
    }

    const question = quizQuestions[currentQuestion].question; //
    const choices = quizQuestions[currentQuestion].choices; //

    $('#timer').html('Timer:' + counter);

    $('#game').html('<h4>' + question + '</h4>');

    $(loadChoices(choices) );








    function loadChoices(choices) {
        let result = '';

        for (let i = 0; i < choices.length; i++) {
            result += `<p class="choice" data-answer="${choices[i]}"> ${choices[i]} </p>`;
        }


        return result;
    }

    
}
loadQuestion();

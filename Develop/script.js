let startBtn = document.querySelector("#startBtn");
let answerBtn = document.querySelector("#answerBtn1");
let answerBtn2 = document.querySelector("#answerBtn2");
let answerBtn3 = document.querySelector("#answerBtn3");
let answerBtn4 = document.querySelector("#AnswerBtn4");
let ansBtn = document.querySelector(".ansBtn");
let isCorrect = document.querySelector("#correct_wrong");
let displayForm = document.querySelector("#questiondiv");
let timerEL = document.querySelector("#countdown");
let headerEL = document.querySelector("#header");
let startPage = document.querySelector("#startPage");

const quizQA = [  {
    Question:
    "What is a useful tool during development and debugging for printing content to the debugger?",
    choices: [
        "1. JavaScript",
        "2. Terminal/Bash",
        "3. For Loops",
        "4. console.log",
    ],
    answer: "2",
},
{
    Question: "In the Css, how do you properly style a class?",
    Choices: [
        "1. #class {}", "2. .class {}", "3. class {}", "4. *class {}",
    ],
    answer: "2",

}




];
// When User clicks the start button.
function startGame() {
    timeStart(event);
    ansBtn.classList.remove('hide');
    updatedisplay();
}
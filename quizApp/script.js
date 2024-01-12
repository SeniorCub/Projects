let questions = {
     1: {
          question: "What is the capital of France?",
          options: ["New York", "London", "Paris", "Dublin"],
          answer: "Paris",
     },
     2: {
          question: "Who is CEO of Tesla?",
          options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
          answer: "Elon Musk",
     },
     3: {
          question: "The iPhone was created by which company?",
          options: ["Apple", "Intel", "Amazon", "Microsoft"],
          answer: "Apple",
     },
     4: {
          question: "How many Harry Potter books are there?",
          options: ["1", "4", "6", "7"],
          answer: "7",
     },
     5: {
          question: "How many sides does a triangle have?",
          options: ["2", "3", "4", "5"],
          answer: "3",
     },
}

const question = document.querySelector("#quizQuestion");
const option1 = document.querySelector("#option1Label");
const option2 = document.querySelector("#option2Label");
const option3 = document.querySelector("#option3Label");
const option4 = document.querySelector("#option4Label");
const time =  document.querySelector('#time');
const score = document.querySelector('#score');
const questionNumber = document.querySelector('#questionNumber');
const totalNumber = document.querySelector('#totalNumber');
const progressBar = document.querySelector('#progress');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const result = document.querySelector('#submit');
const radioButtons = document.querySelectorAll('input[type="radio"]');

let correctAnswers = 0;
let wrongAnswers = 0;

let timer = 20;
let interval = setInterval(() => {
     timer--;
     time.innerText = timer;
     if (timer == 0) {
          clearInterval(interval);
          alert('Time is up');
          window.location.reload();

     }
}, 1000);
document.addEventListener("DOMContentLoaded", () => {
     question.innerText = questions[1].question;
     option1.innerText = questions[1].options[0];
     option2.innerText = questions[1].options[1];
     option3.innerText = questions[1].options[2];
     option4.innerText = questions[1].options[3];
     questionNumber.innerText = 1;
     time.innerText = 20;
     score.innerText = 0;
     totalNumber.innerText = Object.keys(questions).length;
})
nextButton.addEventListener('click', () => {
     if (radioButtons[0].checked || radioButtons[1].checked || radioButtons[2].checked || radioButtons[3].checked) {
          let currentQuestion = parseInt(questionNumber.innerText);
          if (currentQuestion < Object.keys(questions).length) {
               currentQuestion++;
               question.innerText = questions[currentQuestion].question;
               option1.innerText = questions[currentQuestion].options[0];
               option2.innerText = questions[currentQuestion].options[1];
               option3.innerText = questions[currentQuestion].options[2];
               option4.innerText = questions[currentQuestion].options[3];
               questionNumber.innerText = currentQuestion;
               progressBar.style.width = `${(currentQuestion/Object.keys(questions).length)*100}%`;
               radioButtons.forEach((radioButton) => {
                    radioButton.checked = false;
               })
               if (questions[currentQuestion].answer == radioButtons[0].value) {
                    correctAnswers++;
                    score.innerText = correctAnswers;
               } else {
                    wrongAnswers++;
               }
          } else {
               alert('No more questions Submit your answers');
          }
     } else {
          alert('Please select an option');
     }











     
})
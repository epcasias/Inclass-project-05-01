"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Eulyssia Casias
      Date:  4/9/25

      Filename: project05-01.js
*/


// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID= "";
// and the node list for questions
document.querySelectorAll(div#quiz input) {
   let questionList= ""
}

function countdown() {
   if (timeLeft === 0) {
      window.clearInterval(timeID)
      let totalCorrect = checkAnswers()
   } else if (totalCorrect === correctAnswers) {
      window.alert("Congrats on getting 100%!");
   } else {
      window.alert("");
      let timeLeft= quizTime;
      quizClock.value = timeLeft.value;
      

   }
}




















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}


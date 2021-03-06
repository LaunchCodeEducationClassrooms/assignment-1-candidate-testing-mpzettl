const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions =["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers=["Sally Ride", "true","40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name:\n");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//console.log(question);
for (let i=0; i<=questions.length-1; i++){
console.log(`Question ${i+1}:\n${questions[i]}`);
console.log(typeof questions[i]);
candidateAnswer = input.question("Your answer please: \n");
console.log(typeof candidateAnswer);
candidateAnswers.push(candidateAnswer);
}
}
//console.log(candidateAnswers)

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer.toLowerCase()===correctAnswer.toLowerCase()){

  console.log(`Correct ${candidateName}!`);
}else{
  console.log(`Too Bad ${candidateName}, you need to study harder!`);
}*/

  let grade;
  let numberCorrect =0;
  for (let j=0; j<=questions.length-1; j++){
  console.log(`\nYour answer: ${candidateAnswers[j]}`);
  console.log(typeof correctAnswers);
  console.log(`Correct answer: ${correctAnswers[j]}`);
  if (candidateAnswers[j].toLowerCase()===correctAnswers[j].toLowerCase()){
    console.log("correct");
    numberCorrect++
  } else{
    console.log("incorrect");
  }
}
  grade = ((numberCorrect) / (questions.length)) * 100
  console.log(`Your score is ${grade}% `)
  if (grade >= 80){
    console.log(`${candidateName} you passed!`);
  } else{
    console.log(`${candidateName} you failed!`);
  }
  
  return grade;

}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Thank you ${candidateName}, Welcome!\n`);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
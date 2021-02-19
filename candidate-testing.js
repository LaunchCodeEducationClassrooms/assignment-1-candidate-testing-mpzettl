const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers.","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswer = ["Sally Ride", "True","40", "Trajectory", "3"];
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or False: 5000 meters = 5 kilometers.","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers = 0;
let candidateAnswers = [];

function askForName(){
  // TODO 1.1b: Ask for candidate's name //
  console.log("Candidate Testing Quiz 1\n*Achieve 80% correct answers to pass.");
  console.log("--------------------------");
  candidateName = input.question("Please enter your name:\n");
  console.log(`Thank you ${candidateName}, Welcome!\n`);
}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion(){
for (i=0; i<=questions.length-1; i++){
console.log(`Question ${i+1}:\n${question[i]}`);
candidateAnswer = input.question("Your answer please: \n");
console.log(`\nYour answer: ${candidateAnswer}`);
console.log(`Correct answer: ${correctAnswer[i]}`)
console.log("--------------------------");
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer.toLowerCase()===correctAnswer[i].toLowerCase()){
  console.log(`Correct ${candidateName}!`);
 
    correctAnswers++;
    
    console.log(`Current score: ${correctAnswers} out of 5 correct or ${correctAnswers/5*100}%`);
  console.log("--------------------------");
  } else{
    console.log(`Too Bad ${candidateName}, you need to study harder!`);
    console.log(`Current score: ${correctAnswers} out of 5 correct or ${correctAnswers/5*100}%`);
    console.log("--------------------------");
  }
  candidateAnswers.push(candidateAnswer);
} 
} 
function gradeQuiz(candidateAnswers, correctAnswer){
  console.log(`${candidateName}, here is your test summary:\n`);
  for (let j=0; j<=4; j++){
  console.log(`Your answer to question ${j+1} : ${candidateAnswers[j]}`);
  console.log(`Correct answer to question ${j+1} : ${correctAnswer[j]}\n`)
}
  let grade = correctAnswers/5;
  if (grade === 1.0){
  console.log(`>>>Overall Grade: ${grade*100}%<<<\n>>>Congratulations ${candidateName}!!!<<<\n>>>Status: You PASSED with a perfect score!<<<`)
  }else if (grade === 0.8  ){
    console.log(`>>>Overall Grade: ${grade*100}%<<<\n>>>Congratulations ${candidateName}!!!<<<\n>>>Status: You PASSED!<<<`)
  }else if (grade === 0){
    console.log(`>>>Overall Grade: ${grade*100}%<<<\n>>>We are sorry ${candidateName}.<<<\n>>>Status: You completely FAILED!<<<\nMaybe you should consider another career path.`)
  }
  else{
    console.log(`>>>Overall Grade: ${grade*100}%<<<\n>>>We are sorry ${candidateName}.<<<\n>>>Status: You FAILED!<<<`)
  }
  return grade;
}
 function runProgram(){ 
  // TODO 1.1c: Ask for candidate's name //
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers, this.correctAnswer);
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
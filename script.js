let startBtnEl = document.querySelector("#startBtn");
let startScreenEl = document.querySelector("#start-screen");
let quizContainer = document.querySelector("#quiz");
let timerEl = document.querySelector("#timer");



let questionArr = [
  [
    "Who is the creator of the Javascript scripting language?",
    "Guido van Rossum",
    "Brendan Eich",
    "John Ousterhout",
    "Larry Wall",
    "Brendan Eich"
  ],
  ["What is the name of the Java mascot?", "Steamy", "Snoo", "Mr.Java", "Duke", "Duke"],
  [
    "Who founded the Free Software Foundation?",
    "Bill Gates",
    "Linus Torvalds",
    "Steve Jobs",
    "Richard Stallman",
    "Richard Stallman"
  ],
  [
    "What was the first song ever sung by a computer?",
    "Happy Birthday",
    "Daisy Bell",
    "Mary Had a Little Lamb",
    "Mr. Roboto",
    "Daisy Bell"
  ],
  [
    "What was Java called before it was Java?",
    "Oak",
    "Maple",
    "C++",
    "There was no working name for Java before it was named Java",
    "Maple"
  ],
];





startBtnEl.addEventListener("click", function(event) {
  event.preventDefault();

  startScreenEl.setAttribute("hidden", true);

  let timeLeft = document.querySelector("#timer").textContent;
  let timer = setInterval(function() {
    timeLeft--;
    document.querySelectorAll("#timer").textContent = timeleft;
    if (timeLeft <= 0) clearInterval(timer);
  }, 1000);

  

});


function displayQuestions(index) {
  function questionAnswer(){
    
    this.textContent;
    // if the questions is correct
    if (this.textContent === questionArr[index][5]) {
      ;
    } else {
      ;
    }
    // if there is no more questions
    if (index+1 >= questionArr.length) {
      console.log("No more questions")
    } else {
      displayQuestions(index+1);
    }

  }
 
  console.log(index);
  let question = `<div class="row justify-content-center">
<div class="col text-center" id="quest">${questionArr[index][0]}</div>
</div>
<div class="row justify-content-center">
<div class="col text-center"><button type="button" class="btn btn-danger" id="button1">${questionArr[index][1]}</button></div>
</div>
<div class="row justify-content-center">
<div class="col text-center"><button type="button" class="btn btn-danger" id="button2">${questionArr[index][2]}</button></div>
</div>
<div class="row justify-content-center">
<div class="col text-center"><button type="button" class="btn btn-danger" id="button3">${questionArr[index][3]}</button></div>
</div>
<div class="row justify-content-center">
<div class="col text-center"><button type="button" class="btn btn-danger" id="button4">${questionArr[index][4]}</button></div>
</div>`;
  quizContainer.innerHTML = question;
  document.querySelector("#button1").addEventListener("click", questionAnswer);
  document.querySelector("#button2").addEventListener("click", questionAnswer);
  document.querySelector("#button3").addEventListener("click", questionAnswer);
  document.querySelector("#button4").addEventListener("click", questionAnswer);
};

function end() {
  clearInterval(interval);
  document.querySelector("#quiz").setAttribute("hidden", true);
}
displayQuestions(0);


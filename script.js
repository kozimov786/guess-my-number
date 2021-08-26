'use strict';
let againBtn = document.querySelector(".again");
let check = document.querySelector(".check");
let number = document.querySelector(".number");
let message = document.querySelector(".message");
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const dispMessage = function (item) {
  message.textContent = item;
}
const scoreFunc = function (i) {
  document.querySelector(".score").textContent = i;
}


check.addEventListener('click', () => {
  let guess = Number(document.querySelector(".guess").value);

  //No input value
  if (!guess) {
    dispMessage("No number!!!")
  }
  // if you win
  else if (guess === secretNum) {
    dispMessage("You are winner");
    number.textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "green";
    number.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //if you lose
  else if (guess !== secretNum) {
    if (guess > 1) {
      dispMessage(guess > secretNum ? "Too High" : "Too Low");
      score--;
      scoreFunc(score);
    } else {
      dispMessage('💥 You lost the game!');
      scoreFunc(0);
    }
  }


})
againBtn.addEventListener('click', () => {
  score = 20;
  dispMessage('Start guessing...')
  scoreFunc(score);
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  number.textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
})
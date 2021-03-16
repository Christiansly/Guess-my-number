let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const message = document.querySelector(".message");
const body = document.querySelector("body");
let completed = false

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".myInput").value);
  if (score > 1) {
    if (!guess) {
      message.textContent = "No Number";
    } else if (guess > secretNumber && !completed) {
      message.textContent = "Number too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber && !completed) {
      message.textContent = "Number too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess === secretNumber && !completed) {
      message.textContent = "Correct Number!";
      body.style.backgroundColor = "green";
      completed = true;
      document.querySelector(".number").textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
        document.querySelector(".check").disable = "true";
      }
    }
  } else {
    message.textContent = "Game Over!!!";
    score = 0;
    document.querySelector(".score").textContent = score;
  }

});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  message.textContent = "Input Number";
  body.style.backgroundColor = "black";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".myInput").value = "";
  document.querySelector(".number").textContent = "?";
  completed = false
});

"use strict";
/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // if no number typed in:
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No number!"; not eficient one
    displayMessage("⛔ No number!");
    // When player wins:
  } else if (guess === secretNumber) {
    displayMessage("✔️ Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "⬇️ Too High!" : "⬆️ Too Low!");
      score--;
      displayScore(score);
      //if run out of points/scores:
    } else {
      displayMessage("💔 You lost!");
      displayScore(0);
    }
  }
  document.querySelector(".highscore").textContent = highScore;
  // When guess number is higher:
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "⬇️ Too High!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //       //if run out of points/scores:
  //     } else {
  //       document.querySelector(".message").textContent = "💔 You lost!";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     // if guess number is lower:
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "⬆️ Too Low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //       //if run out of points/scores:
  //     } else {
  //       document.querySelector(".message").textContent = "💔 You lost!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayScore(20);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

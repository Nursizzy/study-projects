"use strict";
// Selecting elements:
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

//Starting conditions:
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");
  diceEl.classList.add("hidden");
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling dice functionality:
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generating a random dice number:
    let dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice:
    diceEl.src = `assets/dice-${dice}.png`;
    diceEl.classList.remove("hidden");
    // Check for rolled "1": if true switch to next player.
    if (dice !== 1) {
      // Add dice to current score:
      currentScore += dice; //same as currentScore = currentScore + dice ;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // Switch to next player
    } else {
      switchPlayer();
    }
  }
});

//Holding score:
btnHold.addEventListener("click", function () {
  if (playing) {
    //Add current score to active player's score:
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if players score is >= 100,
    if (scores[activePlayer] >= 100) {
      // if yes, finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      diceEl.classList.add("hidden");
      btnRoll.classList.add("hidden");
      btnHold.classList.add("hidden");
    } // if no , switch to other player
    else {
      switchPlayer();
    }
  }
});

// New game (resetting):
btnNew.addEventListener("click", init);

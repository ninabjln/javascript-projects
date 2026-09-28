let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

updateScoreElement();

/* if (!score) {score = {
      wins: 0,
      losses: 0,
      ties: 0
     };} */

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    playGame("Rock");
  } else if (event.key === "s" || event.key === "S") {
    playGame("Scissors");
  } else if (event.key === "p" || event.key === "P") {
    playGame("Paper");
  }
});
document.querySelector(".js-autoplay").addEventListener("click", () => {
  autoPlay();
});
let intervalId;

isOutoPlaying = false;

function autoPlay() {
  if (!isOutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isOutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isOutoPlaying = false;
  }
}

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("Scissors");
});
document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("Paper");
});
document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("Rock");
});
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lost";
    } else if (computerMove === "Paper") {
      result = "You won";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Paper") {
      result = "You lost";
    } else if (computerMove === "Scissors") {
      result = "You won";
    } else if (computerMove === "Rock") {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Scissors") {
      result = "You lost";
    } else if (computerMove === "Rock") {
      result = "You won";
    } else if (computerMove === "Paper") {
      result = "Tie";
    }
  }

  if (result === "You won") {
    score.Wins += 1;
  } else if (result === "You lost") {
    score.Losses += 1;
  } else if (result === "Tie") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  //updateMovesElement();
  document.querySelector(".js-moves").innerHTML =
    `You<img class="move-icon" src="./assets/${playerMove}-emoji.png"/><img class="move-icon" src="./assets/${computerMove}-emoji.png"/>Computer`;

  document.querySelector(".js-result").innerHTML = `${result}.`;
  //{alert( ${result}.\nWins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`);}
}

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.Wins}, losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

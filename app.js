const choices = ["rock", "paper", "scissors"];
const result_div = document.querySelector("#result");
let userScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomElement = choices[Math.floor(Math.random() * choices.length)];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    userScore++;
    result_div.innerHTML = playerSelection + " beats " + computerSelection + ". You win!";
    updateScore();
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    result_div.innerHTML = computerSelection + " beats " + playerSelection + ". You win!";
    updateScore();
  } else {
    result_div.innerHTML = "It's a tie! Nobody wins";
  }
}

const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener("click", () => {
  let playerSelection = "rock";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

const paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener("click", () => {
  let playerSelection = "paper";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

const scissorBtn = document.querySelector(".scissorBtn");
scissorBtn.addEventListener("click", () => {
  let playerSelection = "scissors";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

const updateScore = () => {
  const user = document.querySelector(".player-score p");
  const pcu = document.querySelector(".computer-score p");
  user.textContent = userScore;
  pcu.textContent = computerScore;
};


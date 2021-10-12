const choices = ["rock", "paper", "scissors"];

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
    return "You win";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return "You lose";
  } else {
    return "It's a tie! Nobody wins";
  }
}

function game() {
  //loops 5 times for 5 rounds
  for (var i=0; i < 5; i++) {
    //gives user window prompt to enter selection
    let playerSelection = prompt("select move");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log()
  }
}

//start the game
game();
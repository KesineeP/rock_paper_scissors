//computerPlay function that will randomly return either 'Rock', 'Paper', or 'Scissors'
import React from 'react';

function computerPlay() {
    const number = Math.random() * 3;
    if (number <= 1) {
        return 'Rock';
    } else if (number >= 2) {
        return 'Scissors';
    } else {
        return 'Paper';
    }
}

let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        return 'You Win! Paper wraps Rock';
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        return 'You Lose! Try again';
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        return 'You Win! Nice!';
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        computerScore++;
        return 'Boo! You Lose!'
    } else
        return `It's tie! Try again. Score: ${playerScore} to ${computerScore}`;
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type: Rock, Paper or Scissors');
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log(`You are the winner! Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You are the Loser! Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied, Final Score ${playerScore} to ${computerScore}`);
}

game();
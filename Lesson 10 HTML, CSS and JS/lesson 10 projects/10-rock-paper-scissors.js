
const rpsScore = JSON.parse(localStorage.getItem('rpsScore')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
updateGamesCount();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  
  let result;

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    rpsScore.wins += 1;
  } else if (result === 'You lose') {
    rpsScore.losses += 1;
  } else if (result === 'Tie') {
    rpsScore.ties += 1;
  }

  localStorage.setItem('rpsScore', JSON.stringify(rpsScore));

  updateScoreElement();

  document.querySelector('.js-result')
  .innerHTML = `
  ${result}
  `;

  document.querySelector('.js-moves')
  .innerHTML = `
    You<img class="css-move-icon" src="/icons/${playerMove}-emoji.png" alt="">
<img class="css-move-icon" src="/icons/${computerMove}-emoji.png" alt=""> Computer

  `;

  updateGamesCount();

}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `
Wins: ${rpsScore.wins}
Losses: ${rpsScore.losses}
Ties: ${rpsScore.ties}
`;
}

function updateGamesCount() {
  document.querySelector('.js-games-count')
  .innerHTML = rpsScore.wins + rpsScore.losses + rpsScore.ties;
}
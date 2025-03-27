const elements = ['Fire', 'Water', 'Plant'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const index = Math.floor(Math.random() * 3);
  return elements[index];
}

function caseInsensitive(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(player, computer) {
  if (player === computer) return "It's a tie!";

  if (
    (player === 'Plant' && computer === 'Water') ||
    (player === 'Fire' && computer === 'Plant') ||
    (player === 'Water' && computer === 'Fire')
  ) {
    playerScore++;
    return `You Win! ${player} beats ${computer}.`;
  } else {
    computerScore++;
    return `You Lose! ${computer} beats ${player}.`;
  }
}

function updateUI(result) {
  document.getElementById('round-result').textContent = result;
  document.getElementById('score').textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = caseInsensitive(button.dataset.choice);
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateUI(result);
  });
});

const elements = ['Fire', 'Water', 'Plant'];
let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.getElementById('round-result');
const scoreDisplay = document.getElementById('score');

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
  resultDisplay.textContent = result;
  resultDisplay.classList.add('flash');

  // 🔊 Play sound depending on round result
  if (result.startsWith("You Win")) {
    document.getElementById('round-win-sound').play();
  } else if (result.startsWith("You Lose")) {
    document.getElementById('round-lost-sound').play();
  }

  setTimeout(() => {
    resultDisplay.classList.remove('flash');
  }, 500);

  scoreDisplay.textContent = `You: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  }
}


function declareWinner() {
  const winnerText = playerScore === 5
    ? '🔥 You won the match! 🔥'
    : '💀 You lost the match! 💀';

  resultDisplay.textContent = winnerText;
  resultDisplay.classList.add('winner');
  disableButtons();

  // 🔊 Play end-of-match sound
  if (playerScore === 5) {
    document.getElementById('victory-sound').play();
  } else {
    document.getElementById('defeat-sound').play();
  }

  // Fade animation
  document.body.classList.add('fade-out');
  setTimeout(() => {
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');
  }, 600);
}

function disableButtons() {
  document.querySelectorAll('button[data-choice]').forEach(btn => btn.disabled = true);
}

function resetGame() {
  // 🔊 Play reset sound
  document.getElementById('reset-sound').play();

  // ⏹️ Stop match music, but delay it slightly to allow declareWinner() to play
  setTimeout(() => {
    ['victory-sound', 'defeat-sound'].forEach(id => {
      const sound = document.getElementById(id);
      sound.pause();
      sound.currentTime = 0;
    });
  }, 100); // Small delay to avoid interrupting immediate playback

  playerScore = 0;
  computerScore = 0;
  resultDisplay.textContent = 'Choose your element to start!';
  scoreDisplay.textContent = `You: 0 | Computer: 0`;

  document.querySelectorAll('button[data-choice]').forEach(btn => btn.disabled = false);
  resultDisplay.classList.remove('winner');

  document.body.classList.remove('fade-in');
}




document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = caseInsensitive(button.dataset.choice);
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateUI(result);
    button.classList.add('clicked');

    setTimeout(() => button.classList.remove('clicked'), 200);
  });
});

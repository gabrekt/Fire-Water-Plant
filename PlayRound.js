/* playRound */
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase()

    if (playerSelection === computerSelection) { return ('Its a Tie')}
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {return ('You Win !'+playerSelection+'beats'+computerSelection+'.')}
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {return ('You Lost !'+computerSelection+'beats'+playerSelection+'.')}
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
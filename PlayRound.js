/* playRound */
import {caseInsensitive} from './CaseInsensitive.js';
import {computerPlay} from './ComputerPlay.js';

function playRound(playerSelection, computerSelection) {
    caseInsensitive(playerSelection)

    if (playerSelection === computerSelection) { return ('Its a Tie')}
    else if (playerSelection == 'Plant' && computerSelection == 'Water') {return ('You Win !'+playerSelection+'beats'+computerSelection+'.')}
    else if (playerSelection == 'Plant' && computerSelection == 'Fire') {return ('You Lost !'+computerSelection+'beats'+playerSelection+'.')}
  }
  
  const playerSelection = "fiRe";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
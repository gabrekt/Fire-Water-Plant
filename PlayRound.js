/* playRound */
//import {caseInsensitive} from './CaseInsensitive.js';
//import {computerPlay} from './ComputerPlay.js';
function caseInsensitive(StringToChange){
    return(StringToChange.toUpperCase().slice(0,1) + StringToChange.toLowerCase().slice(1))
}

function computerSelection(){ 
    let RandomNumber = Math.random()
    if (RandomNumber <= 0.33){ var cachipun = 'Plant'}
    else if (RandomNumber >0.33 && RandomNumber <= 0.66) {cachipun = 'Fire'}
    else if (RandomNumber > 0.66) {cachipun = 'Water'}
    return cachipun;
}

function playRound(playerSelection, computerSelection) {
    caseInsensitive(playerSelection)

    if (playerSelection === computerSelection) { return ('Its a Tie')}
    else if (playerSelection == 'Plant' && computerSelection == 'Water') {return ('You Win !'+playerSelection+'beats'+computerSelection+'.')}
    else if (playerSelection == 'Plant' && computerSelection == 'Fire') {return ('You Lost !'+computerSelection+'beats'+playerSelection+'.')}
  }
  
  const playerSelection = "fiRe";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
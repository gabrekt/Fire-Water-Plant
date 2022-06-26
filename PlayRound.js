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

function playRound(humplay, complay) {
    caseInsensitive(humplay)

    if (humplay === complay) { return ('Its a Tie')}
    else if (humplay == 'Plant' && complay == 'Water') {return ('You Win !'+humplay+'beats'+complay+'.')}
    else if (humplay == 'Plant' && complay == 'Fire') {return ('You Lost !'+complay+'beats'+humplay+'.')}
  }
  
  const playerSelection = "pLanT";
  console.log(playRound(playerSelection, computerSelection()));
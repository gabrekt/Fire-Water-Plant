/* playRound */
//import {caseInsensitive} from './CaseInsensitive.js';
//import {computerPlay} from './ComputerPlay.js';
// comentario de prueba
// Takes the String and returns the first letter on Caps, the rest in lowercaps.
function caseInsensitive(StringToChange){
    return((StringToChange.toUpperCase().slice(0,1) + StringToChange.toLowerCase().slice(1)))
}

function computerSelection(){ 
    let RandomNumber = Math.random()
    if (RandomNumber <= 0.33){ cachipun = 0}
    else if (RandomNumber >0.33 && RandomNumber <= 0.66) {cachipun = 1}
    else if (RandomNumber > 0.66) {cachipun = 2}
    return cachipun;
}


function playRound(humplay, complay) {
    ElementalArray = ['Fire', 'Water', 'Plant']
    let comElement = ElementalArray[complay];

        if (caseInsensitive(humplay) === comElement) { return ('Its a Tie')} 
        else if (caseInsensitive(humplay) === 'Plant' && comElement === 'Water') {return ('You Win ! '+caseInsensitive(humplay)+' beats '+comElement+'.')}
        else if (caseInsensitive(humplay) === 'Plant' && comElement === 'Fire') {return ('You Lost ! '+comElement+' beats '+caseInsensitive(humplay)+'.')}

        else if (caseInsensitive(humplay) === 'Fire' && comElement === 'Water') {return ('You Lost ! '+caseInsensitive(humplay)+' beats '+comElement+'.')}
        else if (caseInsensitive(humplay) === 'Fire' && comElement === 'Plant') {return ('You Win ! '+caseInsensitive(humplay)+' beats '+comElement+'.')}

        else if (caseInsensitive(humplay) === 'Water' && comElement === 'Fire') {return ('You Win ! '+caseInsensitive(humplay)+' beats '+comElement+'.')}
        else if (caseInsensitive(humplay) === 'Water' && comElement === 'Plant') {return ('You Lost ! '+caseInsensitive(humplay)+' beats '+comElement+'.')}
  }
  
  //Testing variables
  //const playerSelection = 'fIre';
  //console.log(playRound(playerSelection, computerSelection()).slice(4));


function game(){
    let humCount = 0
    let comCount = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Select your Element', 'Fire, Water or Plant')
        if (caseInsensitive(playerSelection) !== 'Fire' && caseInsensitive(playerSelection) !== 'Water' && caseInsensitive(playerSelection) !== 'Plant') {return alert('Please choose an elemental listed before: Fire, Water, Plant') 
        i = 0
        continue}    
        else {
            let result = playRound(playerSelection, computerSelection())

            if(result.charAt(4) === 'W'){humCount++}
            else if (result.charAt(4) === 'L'){comCount++}

            console.log(result)
            console.log('Scores are You: '+humCount+' | Computer: '+comCount+'.')

            if (i <= 5 && (humCount !== 5 && comCount !== 5)) {
                i--}
            else if(humCount === 5) 
                {console.log('You won the Elemental Fight !')
                i = 5}
            else if (comCount === 5) 
                {console.log('You Lost boooo!')
                i = 5}
            }
     }
  }

  game()
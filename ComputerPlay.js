/*Computer play*/

function computerSelection(){ 
    let RandomNumber = Math.random()
    if (RandomNumber <= 0.33){ var cachipun = 'piedra'}
    else if (RandomNumber >0.33 && RandomNumber <= 0.66) {cachipun = 'papel'}
    else if (RandomNumber > 0.66) {cachipun = 'tijeras'}
    return cachipun;
}

computerSelection();
/*Computer play*/

export function computerSelection(){ 
    let RandomNumber = Math.random()
    if (RandomNumber <= 0.33){ var cachipun = 'Plant'}
    else if (RandomNumber > 0.33 && RandomNumber <= 0.66) {cachipun = 'Fire'}
    else if (RandomNumber > 0.66) {cachipun = 'Water'}
    return cachipun;
}


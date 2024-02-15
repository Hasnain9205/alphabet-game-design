// function play(){
//     const addSection = document.getElementById('hidden');
//     addSection.classList.add("hidden");

//     const removeSecton  = document.getElementById('hidden2');
//     removeSecton.classList.remove("hidden");
// }

function handleKbdPrss(event){
const playerPressed=event.key;

if(playerPressed === 'Escape'){
    gameOver();
}

const currentAlphabet = document.getElementById('crunt-alphabet');
const currentAlphabetText = currentAlphabet.innerText;
const currentText = currentAlphabetText.toLocaleLowerCase();

if(playerPressed === currentText){
    removeBackgoundColorById(currentText);

    
    // const currentScoreElement=document.getElementById('current-score');
    // const currentScore = currentScoreElement.innerText;
    // const score = parseInt(currentScore);
    // const newScore = score + 1;
    // currentScoreElement.innerText = newScore;

    const newScore = getTextValueById('current-score');
    const updateScore = newScore + 1;
    updateScoreElentById('current-score',updateScore);


    continueGame();
}
else{
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLife = currentLifeElement.innerText;
    // const newLife = parseInt(currentLife);
    // const life = newLife - 1;
    // currentLifeElement.innerText = life;

    const newLife = getTextValueById('current-life');
    const updateLife = newLife - 1;
    updateScoreElentById('current-life',updateLife);

    if(updateLife === 0){
        gameOver();
    }

    
}
}

document.addEventListener('keyup',handleKbdPrss);

function play(){
    hideElementById('play');
    showElementById('ground');
    hideElementById('final-score');
    updateScoreElentById('current-life',5);
    updateScoreElentById('current-score',0);

    continueGame()
}

function gameOver(){
    hideElementById('ground');
    showElementById('final-score');

    const lastScore = getTextValueById('current-score');
    updateScoreElentById('last-score',lastScore);

    const currentElement = getElementTextById('crunt-alphabet');
    removeBackgoundColorById(currentElement);
    

}
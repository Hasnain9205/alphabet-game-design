function hideElementById(elementId){
    const hide = document.getElementById(elementId);
    hide.classList.add('hidden');
}

function showElementById(elementId){
    const show = document.getElementById(elementId);
    show.classList.remove('hidden');
}

function getRendomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets)

    const randomIndex = Math.random()*25;
    const index = Math.round(randomIndex);

    const randomAlphabet = alphabets[index];
    console.log(randomAlphabet);

    return randomAlphabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const currentElement = element.innerText;

    return currentElement;
}

function removeBackgoundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]')
}

function getTextValueById(elementId){
    const currentScoreElement = document.getElementById(elementId);
    const currentScore = currentScoreElement.innerText;
    const newScore = parseInt(currentScore);

    return newScore;
}

function updateScoreElentById(elementId,value){
    const newScore = document.getElementById(elementId);
    newScore.innerText = value;

}

function continueGame(){
    const alphabet = getRendomAlphabet();
    
    const cruntAlphabet = document.getElementById('crunt-alphabet');
    cruntAlphabet.innerText = alphabet;
    
    setBackgroundColorById(alphabet);
    
    }
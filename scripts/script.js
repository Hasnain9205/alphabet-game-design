// function play(){
//     const addSection = document.getElementById('hidden');
//     addSection.classList.add("hidden");

//     const removeSecton  = document.getElementById('hidden2');
//     removeSecton.classList.remove("hidden");
// }

function handleKbdPrss(event){
const playerPressed=event.key;


const currentAlphabet = document.getElementById('crunt-alphabet');
const currentAlphabetText = currentAlphabet.innerText;
const currentText = currentAlphabetText.toLocaleLowerCase();

if(playerPressed === currentText){
    removeBackgoundColorById(currentText);
    continueGame();
}
else{
    console.log('you lost a life')
}

}

document.addEventListener('keyup',handleKbdPrss);

function play(){
    hideElementById('hidden');
    showElementById('hidden2');
    continueGame()
}
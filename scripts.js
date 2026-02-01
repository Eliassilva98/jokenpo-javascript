const buttonrock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const paragraph = document.getElementById('result');
const myscore = document.getElementById('myScore');
const scoremachine = document.getElementById('roboScore');

let myScoreNumber = 0;
let scoreMachineNumber = 0;

function playHuman(humanChoice) {
    const choiceMachine = playMachine()
    playTheGame(humanChoice, choiceMachine)
}

function playMachine() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices [randomNumber];
}

function playTheGame(human, machine) {
    const image = document.getElementById('resultImage');
    const resultDiv = document.getElementById('resultDiv');

    resultDiv.classList.remove('hidden');

    if (human === machine) {
        paragraph.textContent = 'Deu empate 🤗'
        image.src = './assets/feliz.png'
    } else if ((human === 'rock' && machine === 'scissors') ||
               (human === 'paper' && machine === 'rock' ) ||
               (human === 'scissors' && machine === 'paper') ) {
                myScoreNumber++
                myscore.innerHTML = myScoreNumber
                paragraph.textContent = 'Voce ganhou 🤩'
                image.src = './assets/estrela.png'
             } else {
                scoreMachineNumber++
                scoremachine.innerHTML = scoreMachineNumber
                paragraph.textContent = 'Voce perdeu 😢'
                image.src = './assets/triste.png'
             }
}

buttonrock.addEventListener('click', () => playHuman('rock'));
buttonPaper.addEventListener('click', () => playHuman('paper'));
buttonScissors.addEventListener('click', () => playHuman('scissors'));
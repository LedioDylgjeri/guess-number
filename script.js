
// ------------------- Cached Element References -------------------
scrDiv = document.querySelector('.score')
rstBtnDiv = document.querySelector('.btn-div')
scrLog = document.querySelector('.show-score')
highScrLog = document.querySelector('.high-score')
inputDiv = document.querySelector('.input-div')
guessInput = document.querySelector('#guess-input')
chckBtn = document.querySelector('#guess-button')
inputMsg = document.querySelector('.message')
winDiv = document.querySelector('#winner-div')
winMsgP = document.querySelector('.winner-msgP')
winHeading = document.querySelector('.winner-msgh3')
winScr = document.querySelector('.winner-msgS')
playAgainBtn = document.querySelector('#play-again')
loseDiv = document.querySelector('#lose-div')
showGuess = document.querySelector('#prev-guesses')
loseMsg = document.querySelector('.lose-msg')
tryAgainBtn = document.querySelector('#try-again')
inputDiv.removeAttribute('hidden')
winDiv.setAttribute('hidden', true)
loseDiv.setAttribute('hidden', true)
// console.log(tryAgainBtn);

// ------------------- Variables -------------------

let secretNum = Math.floor(Math.random() * 100 + 1); 
console.log(secretNum);
let guessList = [''];

// ----------------- Event Listener / Functions -----------------------


chckBtn.addEventListener('click', function(){
  let guess = guessInput.value 
  if(isNaN(guess) || guess < 0 || guess > 100){
    inputMsg.innerText = 'Please enter number 1 to 100 and check'
  } 
  else if(guess == secretNum){
    scrDiv.setAttribute('hidden', true)
    rstBtnDiv.setAttribute('hidden', true)
    inputDiv.setAttribute('hidden', true)
    winDiv.removeAttribute('hidden')
  } else if(guess > secretNum){
    inputMsg.innerText = 'Go lower'
    guessList.push(guess)
    showGuess.innerText = guessList
    console.log(guessList);
  } else if(guess < secretNum) {
    inputMsg.innerText = 'Go higher'
    guessList.push(guess)
    showGuess.innerText = guessList
    console.log(guessList);
  } 
  showScore()
})

function showScore(){
  for(let i = 0; i < guessList.length; i++ ){
    scrLog.innerText = `Score: ${i}`
    if(i === 11){
      scrDiv.setAttribute('hidden', true)
      rstBtnDiv.setAttribute('hidden', true)
      inputDiv.setAttribute('hidden', true)
      loseDiv.removeAttribute('hidden')
    }
  }
  // console.log(guessList.length - 1);
}


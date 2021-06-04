import {printGameState, printWinScreen} from "./canvas.js";

//missedLetters is an int that defines how many mistakes the player have made.
let missedLetters
let wordString
let wordArray
let matches
let words

//Get document elements
let letras = document.querySelectorAll('.letter')
const newGameBtn = document.getElementById('newGameBtn')
let wordP = document.getElementById('word')
let showWordArray

function showWord(){
  const defaultShowedCharacters = new Set(['.', ',', ' ','¡','!',';', '?','¿'])
  showWordArray = wordArray.map(el=>{
    if(matches.has(el) || defaultShowedCharacters.has(el)){
      return el
    } else {
      return "-"
    }
  })
  console.log(showWordArray)
  wordP.innerHTML = showWordArray.join('')
}

function detectWin(){
  const existHiddenLetters = showWordArray.includes("-")
  return !existHiddenLetters
}

function missLetter(){
  missedLetters++
  printGameState(missedLetters)
}
function gameFinished(){
  if(missedLetters == 6) return true
  const existHiddenLetters = showWordArray.includes("-")
  return !existHiddenLetters
}
function showGameFinish(){
  console.log("Game is over")
}

//Events
letras.forEach(item => {
  item.addEventListener('click', event => {
      let letter = item.innerHTML
      if(wordArray.includes(letter)){
        console.log("Letra correcta")
        disableLetter(item, true)
        matches.add(letter)
        console.log(matches)
      } else {
        console.log("Letra incorrecta")
        disableLetter(item, false)
        missLetter()
      }
    console.log("Missed letters: ", missedLetters)
    showWord()
    if(gameFinished()) {
      finishGame()
      detectWin() ? showWinGame() : showLostGame()
    }
  })
})
newGameBtn.addEventListener('click', event=>{newGame()})

function finishGame(){
  console.log("Juego terminado.")
  letras.forEach(item=>{
    item.disabled = true;
  })
}

function showWinGame(){
  wordP.style.color = "green"
  printWinScreen()
}

function showLostGame(){
  wordP.style.color = "red"
  wordP.innerHTML = wordString
}

function disableLetter(item, match){
  item.disabled = "true"
  item.style.borderColor = "black"
  if (match){
    item.style.color = "blue"
    item.style.backgroundColor = "#2A9D8F"

  } else {
    item.style.color = "white"
    item.style.backgroundColor = "#E76F51"
  }
}

function newGame(){
  letras.forEach(item=>{
    item.removeAttribute('disabled');
    item.style.color = "white"
    item.style.borderColor = "black"
    item.style.backgroundColor = "#264653"
  })
  missedLetters = 0
  console.log("Missed letters: ", missedLetters)
  printGameState(missedLetters)
  matches = new Set()

  wordString = words[Math.floor(Math.random() * (50 - 1)) + 1].name
  wordString = wordString.toUpperCase()
  wordArray = wordString.split('')
  showWord()
  wordP.style.color = "black"
}

fetch('words.json')
  .then(response => response.json())
  .then(data => words = data)
  .then( ()=>{
    newGame()
  }
  );


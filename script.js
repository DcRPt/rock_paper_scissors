const userChoiceDisplay = document.createElement("h1")
const computerChoiceDisplay = document.createElement("h1")
const resultDisplay = document.createElement("h1")
const choice = document.getElementById("choice")
const gamegrid = document.getElementById("game")
choice.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
let userScore = 0
let computerScore = 0

const choices =["rock", "paper","scissors"]
let userChoice

const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = "User choice: " + userChoice
  generateComputerChoice()
  getResult()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = "Computer choice: " + computerChoice
}

for(let i = 0; i < choices.length; i++) {
  const button = document.createElement("button")
  button.id = choices[i]
  button.innerHTML = choices[i]
  button.addEventListener("click", handleClick)
  gamegrid.appendChild(button)
}

function Score() {
  yourScoreSpan.innerText = userScore
  computerScoreSpan.innerText = computerScore
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = userChoice + " beats " + computerChoice + ", YOU WIN!"
      if( userScore < 5) {
        userScore++
        Score()
      }
      else {
        userScore = 0
        computerScore = 0
      }
      break
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = computerChoice + " beats " + userChoice + ", YOU LOSE!"
      if( computerScore < 5) {
        computerScore++
        Score()
      }
      else {
        userScore = 0
        computerScore = 0
      }
      break
    case "paperpaper":
    case "scisssorsscissors":
    case "rockrock":
      resultDisplay.innerHTML = "You chose " + userChoice + " and the computer chose " + computerChoice + ", ITS A DRAW!"
      break
  }

  if (userScore == 5 || computerScore == 5) {
    const gameoverbutton = document.createElement("button")
    gameoverbutton.id = "gameover"
  gameoverbutton.innerHTML = "Try again"
  gameoverbutton.addEventListener("click", reset)
  gamegrid.appendChild(gameoverbutton)
  }

  
}

const reset = () => {
    userScore = 0
    computerScore = 0
    Score()
    const gameoverbutton = document.querySelector("#gameover")
    gameoverbutton.remove ()
  }
const userChoiceDisplay = document.createElement("h1")
const computerChoiceDisplay = document.createElement("h1")
const resultDisplay = document.createElement("h1")
const gamegrid = document.getElementById("game")
gamegrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

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

const getResult = () => {
  switch (userChoice + computerChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.innerHTML = userChoice + " beats " + computerChoice + ", YOU WIN!"
      break
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.innerHTML = computerChoice + " beats " + userChoice + ", YOU LOSE!"
      break
    case "paperpaper":
    case "scisssorsscissors":
    case "rockrock":
      resultDisplay.innerHTML = "You chose " + userChoice + " and the computer chose " + computerChoice + ", ITS A DRAW!"
      break
  }
}

const playerEl = document.getElementById("name-input")
const confirmName = document.getElementById("confirm-name")
const matchLogDiv = document.getElementById("game-log")
const title = document.getElementById("title")
const startContent = document.getElementById("start-content")
const numOne = document.getElementById("num-one")
const numTwo = document.getElementById("num-two")
const numThree = document.getElementById("num-three")
const remainingChance = document.getElementById("life")
let getNum = document.getElementById("get-num")
let holdNum = document.getElementById("hold-num")

let playerName = ""
let matchLog = []
let life = 3
let startPoint = 0
let enemyNum = 0
let playerScore = 0
let ranNumHold = 0
let playerSum = 0


playerEl.addEventListener("change", () => {
    playerName = playerEl.value
    console.log(playerName)
})

confirmName.addEventListener("click", () => {
    startGame(playerName, matchLog)
})

getNum.addEventListener("click", () => {
    life--
    if(startPoint === 0) {
        ranNumHold = getRanNumPlayer()
        numOne.textContent = ranNumHold
        
        console.log(ranNumHold)
        console.log(playerSum)
        if(life === 0){
            playerSum += ranNumHold
        }
    }else if(startPoint === 1) {
        if(life === 0){
            playerSum += ranNumHold
        }
        ranNumHold = getRanNumPlayer()
        numTwo.textContent = ranNumHold
        
        console.log(ranNumHold)
        console.log(playerSum)
    }else if(startPoint === 2) {
        if(life === 0){
            playerSum += ranNumHold
        }
        ranNumHold = getRanNumPlayer()
        numThree.textContent = ranNumHold
        
        console.log(ranNumHold)
        console.log(playerSum)
    }else{
        playerSum += ranNumHold
        if(playerSum > enemyNum){
            console.log("You won" + playerSum)
            matchLog.push("You won")
            localStorage.setItem("log",JSON.stringify(matchLog))
            matchLogDiv.innerHTML += `<p>${JSON.parse(localStorage.getItem("log"))}</p>`
            playerSum = 0
        }
        startPoint = 0
    }
    
    remainingChance.textContent = `${life}`
    if(life === 0) {
        startPoint++
        life = 3
        
    }
})




function startGame(playerName, matchLog) {
    enemyNum = getRanNumEnemy()
    title.innerHTML = `ENEMY NUMBER <p>${enemyNum}</p>`
    startContent.innerHTML = ""
}

function getRanNumPlayer() {
    return Math.floor(Math.random() * 11)
}

function getRanNumEnemy() {
    return Math.floor(Math.random() * 10 + 20)
}


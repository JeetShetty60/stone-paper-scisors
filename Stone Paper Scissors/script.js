let msg = document.getElementById("msg")

function playGame(userChoice){
    let compMsg = document.getElementById("computer-score")
    let userMsg = document.getElementById("user-score")
    let currentNumber1 = parseInt(compMsg.innerText)
    let currentNumber2 = parseInt(userMsg.innerText)
const choices = ["rock", "paper", "scissor"]
const computerChoice = choices[Math.floor(Math.random()*3)]
let result;
 if (userChoice == computerChoice){
    result = "tie";
         msg.innerText=`It was a tie Computers choice was ${computerChoice} and you choosed ${userChoice}`

 }
 else if (userChoice == "rock" && computerChoice== "scissor"){
    result="You won"
     msg.innerText=`You won Computers choice was ${computerChoice} and you choosed ${userChoice}`
     userMsg.innerText= currentNumber1 + 1
 }
 else if (userChoice == "paper" && computerChoice== "rock"){
    result="You won"
      msg.innerText=`You won Computers choice was ${computerChoice} and you choosed ${userChoice}`
      userMsg.innerText= currentNumber1 + 1
 }
 else if (userChoice == "scissor" && computerChoice== "paper"){
    result="You won"
      msg.innerText=`You won Computers choice was ${computerChoice} and you choosed ${userChoice}`
      userMsg.innerText= currentNumber1 + 1
 }
 else{
    result="You lost"
     msg.innerText=`You lost Computers choice was ${computerChoice} and you choosed ${userChoice}`
     compMsg.innerText= currentNumber2 + 1
 }
 console.log(result)
}

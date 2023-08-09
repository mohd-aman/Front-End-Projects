let icons = document.querySelectorAll(".icon-container .icon");
let selectionContainer = document.querySelector(".selection-container")
let result = document.querySelector(".result h1");

let arr = [['rock','fa-solid fa-hand-back-fist'],['paper','fa-solid fa-hand'],['scissor','fa-solid fa-hand-scissors']];

for(let i=0;i<icons.length;i++){
    icons[i].addEventListener("click",function(){
        result.innerText = "";
        selectionContainer.innerHTML = "";
        setTimeout(gameLogic, 1000,i);
    })
}


function gameLogic(i){
    let playerChoice = arr[i][0];
        let ran = Math.floor(Math.random()*3);
        let compChoice = arr[ran][0];
        console.log(playerChoice,compChoice);
        selectionContainer.innerHTML = `
        <div class="you"><h2>You</h2><div class="icon"><i class="${arr[i][1]}"></i></div></div>
        <div class="comp"><h2>Comp</h2><div class="icon"><i class="${arr[ran][1]}"></i></div></div> 
        `

        if(playerChoice == compChoice){
            result.innerText = "DRAW";
        }else if((playerChoice == "paper" && compChoice == "rock") ||
                ( playerChoice == "scissor" && compChoice == "paper") || 
                (playerChoice == "rock" && compChoice == "scissor")){
                    result.innerText = "YOU WON"
                }
        else{
            result.innerText = "COMP WON"
        }
}





















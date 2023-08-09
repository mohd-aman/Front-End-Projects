let startBtn = document.querySelector(".start-btn")
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let time = [0,0,0];
let timerId = 0;

startBtn.addEventListener("click",function(){
    if(timerId != 0){
        return;
    }
    startBtn.classList.add("disable");
    timerId = setInterval(() => {
        time[2]++;
        if(time[2] == 60){
            time[1]++;
            time[2] = 0;
        }
        if(time[1] == 60){
            time[0]++;
            time[1] = 0;
        }
        console.log(time);
        displayTime();
    }, 1000);
})

stopBtn.addEventListener("click",function(){
    stopBtn.classList.add("disable");
    clearInterval(timerId);
})

resetBtn.addEventListener("click",function(){
    startBtn.classList.remove("disable");
    stopBtn.classList.remove("disable");
    clearInterval(timerId);
    time = [0,0,0];
    timerId = 0;
    displayTime();
})

function displayTime(){
    hour.innerText = time[0].toString().padStart(2,"0").padEnd(4," :");
    minute.innerText = time[1].toString().padStart(2,"0").padEnd(4," :");
    second.innerText = time[2].toString().padStart(2,"0");
}
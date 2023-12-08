let btn = document.querySelector(".btn");
let boxes = document.querySelectorAll(".box");

btn.addEventListener("click",function(){
    for(let i=0;i<boxes.length;i++){
        let color = generateRandomColor();
        boxes[i].style.background = color;
        boxes[i].innerHTML = color;
    }
})

btn.click();

function generateRandomColor(){
    let option = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        let ran = Math.floor(Math.random()*16);
        // console.log(ran);
        color+=option[ran];
    }
    console.log(color);
    return color;
}
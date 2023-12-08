let btn = document.querySelector("button");
let img = document.querySelector("img");
let input = document.querySelector("input");

btn.addEventListener("click",function(){
    let value = input.value;
    if(value == ""){
        return;
    }
    img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${value}`
})
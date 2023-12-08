let input = document.querySelector("input");
let fact = document.querySelector(".fact");

input.addEventListener("change",async function(){
    let num = input.value;
    if(num == 0){
        return;
    }
    let res = await fetch("http://numbersapi.com/"+num);
    let factData = await res.text();
    console.log(factData);
    fact.innerHTML = "Fact : " + factData;
})
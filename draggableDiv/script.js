let draggable = document.querySelector(".draggable");
let container = document.querySelector(".container")


draggable.addEventListener("mousedown",function(){
    draggable.classList.add("active");
    draggable.addEventListener("mousemove",drag)
})

document.addEventListener("mouseup",function(){
    draggable.classList.remove("active");
    draggable.removeEventListener("mousemove",drag);
})

function drag(e){
    let movementX = e.movementX;
    let movementY = e.movementY;
    let containerStyle = window.getComputedStyle(container);
    let initialLeft = containerStyle.left;
    let initialTop = containerStyle.top;
    container.style.left = `${parseInt(initialLeft)+movementX}px`;
    container.style.top = `${parseInt(initialTop)+movementY}px`;
}
let task = document.querySelector(".task");
let todoContainer = document.querySelector(".todo-container");
let addBtn = document.querySelector(".add");

addBtn.addEventListener('click',function(){
    handleAddTask();
})

task.addEventListener("keydown",function(e){
    // console.log(e.key);
    if(e.key == "Enter"){
        handleAddTask();
    }
})


function handleAddTask(){
    let taskText = task.value;
        console.log(taskText)
        task.value = "";
        let div = document.createElement("div");
        div.classList.add("todo");
        div.innerHTML = `<div class="text">${taskText}</div>
        <a href="" onclick="return false" class="delete"><i class="fa-solid fa-trash"></i></a>`;
        todoContainer.appendChild(div);
        let deleteBtn = div.querySelector(".delete");
        deleteBtn.addEventListener('click',function(){
            div.remove();
        })
}
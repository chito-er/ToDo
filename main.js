const container = document.getElementById("ToDoContainer");
const addBtn = document.getElementById("addTask");
const input = document.getElementById("inptu");

addBtn.addEventListener("click", () => {
    if(input.value)addTask(input.value);
});

const addTask = text => {
    const element = document.createElement("div");
    element.innerText = text;
    container.appendChild(element);
};

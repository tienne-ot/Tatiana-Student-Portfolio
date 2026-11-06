let tasks= [];
const taskInput = document.getElementById("taskinput");
const addTaskBtn = document.getElementById("addtaskbtn");
const taskList = document.getElementById("tasklist");
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
const newTask={
    text: taskText,
    completed: false
};
tasks.push(newTask);
   
    const li = document.createElement("li");

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Mark tasks as completed
    checkbox.addEventListener("change", function() {
    newTask.completed= checkbox.checked;

    if (checkbox.checked) {
        taskName.style.textDecoration = "line-through";
    } else {
        taskName.style.textDecoration = "none";
    }
});

    // Create the task text
    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Add everything to the list item
    li.appendChild(checkbox);
    li.appendChild(taskName);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

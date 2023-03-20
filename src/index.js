document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const priority = document.getElementById("priority");
  const dueDate = document.getElementById("duration");
  const taskList = document.getElementById("tasks");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const task = document.getElementById("new-task-description").value;
    const newTask = document.createElement("li");
    newTask.innerText = task;
    taskList.appendChild(newTask);
    // Adding delete button to the list
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    newTask.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function(event) {
      event.preventDefault();
      newTask.remove();
      
    });
    // Adding priority to the list to be shown next to list item
    newTask.classList.add(priority.value);
    // Adding due date to the list to be shown next to list item
    const dueDate = document.createElement("span");
    dueDate.innerText = `Due Date: ${document.getElementById("duration").value}`;
    newTask.appendChild(dueDate);
    form.reset();
  }
  );
  // console.log(taskList);
});






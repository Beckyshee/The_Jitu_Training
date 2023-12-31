const tasksArray = [];

document.querySelector('#push').onclick = function() {
  const taskInput = document.querySelector('#taskInput');
  const taskName = taskInput.value;

  if (taskName.length === 0) {
    alert("Please Enter a Task");
  } else {
    tasksArray.push(taskName);
    renderTasks();
    taskInput.value = "";
  }
};

function renderTasks() {
  const tasksContainer = document.querySelector('#tasks');
  tasksContainer.innerHTML = "";

  tasksArray.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskNameElement = document.createElement("span");
    taskNameElement.id = "taskname";
    taskNameElement.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";

    deleteButton.onclick = function() {
      tasksArray.splice(index, 1);
      renderTasks();
    };

    editButton.onclick = function() {
      const newTaskName = prompt("Edit the task:", task);
      if (newTaskName !== null) {
        tasksArray[index] = newTaskName;
        renderTasks();
      }
    };

    taskElement.appendChild(taskNameElement);
    taskElement.appendChild(deleteButton);
    taskElement.appendChild(editButton);
    tasksContainer.appendChild(taskElement);
  });

  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.onclick = function() {
      this.classList.toggle('completed');
    };
  });
}

// Initial rendering
renderTasks();

const tasksArray = [];

document.querySelector('#push').onclick = function() {
  const taskInput = document.querySelector('#newtask input');
  const taskName = taskInput.value;

  if (taskName.length === 0) {
    alert("Please Enter a Task");
  } else {
    // Add todo using the push method
    tasksArray.push(taskName);
    renderTasks();

    // Clear the task input
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
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';

    deleteButton.onclick = function() {
      tasksArray.splice(index, 1);
      renderTasks();
    };

    taskElement.appendChild(taskNameElement);
    taskElement.appendChild(deleteButton);
    tasksContainer.appendChild(taskElement);
  });

  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.onclick = function() {
      this.classList.toggle('completed');
    };
  });
}


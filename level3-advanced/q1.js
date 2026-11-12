const form = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    li.textContent = task.text;

    if (task.done) {
      li.classList.add("completed");
    }

    li.dataset.index = index;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.classList.add("done-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.append(doneBtn, deleteBtn);
    taskList.append(li);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  tasks.push({
    text: text,
    done: false,
  });

  saveTasks();
  renderTasks();
  form.reset();
});

taskList.addEventListener("click", function (event) {
  const li = event.target.closest("li");

  if (!li) return;

  const index = Number(li.dataset.index);

  if (event.target.matches(".delete-btn")) {
    tasks.splice(index, 1);
  }

  if (event.target.matches(".done-btn")) {
    tasks[index].done = !tasks[index].done;
  }

  saveTasks();
  renderTasks();
});

renderTasks();

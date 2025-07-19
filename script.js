// 할 일 목록을 저장할 배열
let tasks = [];

// 저장된 목록 불러오기
window.onload = function () {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    tasks = JSON.parse(saved);
    tasks.forEach(renderTask);
  }
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  tasks.push(task);
  saveTasks();
  renderTask(task);
  input.value = "";
}

function renderTask(task) {
  const li = document.createElement("li");
  li.textContent = task;

  li.onclick = () => {
    tasks = tasks.filter(t => t !== task);
    saveTasks();
    li.remove();
  };

  document.getElementById("taskList").appendChild(li);
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

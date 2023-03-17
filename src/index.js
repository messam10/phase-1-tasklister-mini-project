document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    taskList(event.target["new-task-description"].value);
    form.reset();
  })
});

function taskList(description) {
  let li = document.createElement("li");
  let del = document.createElement("button");
  let Com = document.createElement("button");

  li.textContent = description;
  li.appendChild(Com);
  li.appendChild(del);

  Com.addEventListener('click', CompletedTask);
  Com.style.marginLeft = "50px";
  Com.textContent = "✔️";

  del.addEventListener('click', deleteTask);
  del.style.marginLeft = "10px";
  del.textContent = "✖️";

  document.getElementById("tasks").appendChild(li);
  // document.getElementById("tasks").appendChild(Com);
  // document.getElementById("tasks").appendChild(del);
}

function CompletedTask(event) {
  event.target.parentNode.style.textDecoration = "line-through";
}

function deleteTask(event) {
  event.target.parentNode.remove();
}
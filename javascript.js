var addTaskButton = document.getElementById("add-task-button");
var newTaskInput = document.getElementById("new-task-input");
var todolistContainer = document.getElementById("todolist-container");
var templateElement = document.getElementById("list-item-template");
var template = templateElement.innerHTML;
var todolistcompleted = document.getElementById('todolist-completed');

addTaskButton.addEventListener('click', function(event) {
  var taskName = newTaskInput.value;
  newTaskInput.value = "";

  var gwapoko = template.replace("<!-- bercs -->", taskName);
  todolistContainer.insertAdjacentHTML('afterbegin', gwapoko);
});
  todolistContainer.addEventListener('click', function(event) {
  var targetElement = event.toElement;

  while (!targetElement.classList.contains("task")) {
    targetElement = targetElement.parentElement;
  }

  var checkbox = targetElement.querySelector(".checkbox");

  if (checkbox.checked) {
    targetElement.classList.add("completed");
  } else {
    targetElement.classList.remove("completed");
  }
});

const todo = document.getElementById("todo-app");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoadd = document.getElementById("add-todo");

todoadd.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const todoItem = document.createElement("li");
    todoItem.textContent = input.value;
    const deletebut = document.createElement("button");
    deletebut.textContent = "Delete";
    todoItem.appendChild(deletebut);
    todoList.appendChild(todoItem);
    input.value = "";
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});

const todoText = document.querySelector("#app #todoText");
const todoAddBtn = document.querySelector("#app #todoAddBtn");
const todoList = document.querySelector("#app #todoList");

todoAddBtn.addEventListener("click", () => {
  const liElement = document.createElement("li");
  liElement.textContent = todoText.value;
  todoList.appendChild(liElement);
  todoText.value = "";
});

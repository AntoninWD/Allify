/// Selecting elements
const taskInput = document.querySelector(".todo__input");
const list = document.querySelector(".todo__list");
const allTasks = document.querySelector(".todo__lists");
const addTask = document.querySelector(".todo__btn");
const checkTask = document.querySelector(".check");
const deleteTask = document.querySelector(".delete");
const task = document.querySelector(".todo__list--item");
export const todo = function () {
  const renderNewList = function () {
    const input = taskInput.value;
    if (!input) return;
    const markup = `<div class="todo__list">
                      <ul class="todo__list--item">${input}</ul>
                     <div class="todo__imgs">
                      <img class="todo__icon check" src="img/checked.png" alt="" />
                       <img
                        class="todo__icon delete"
                        src="img/delete.png"
                        alt="delete"
                        />
                     </div>
                    </div>`;
    allTasks.insertAdjacentHTML("beforebegin", markup);
  };
  addTask.addEventListener("click", function (e) {
    e.preventDefault();
    taskInput.value = "";
    renderNewList();
  });

  checkTask.addEventListener("click", function () {
    console.log("hi");
  });
};

/// Selecting elements
const taskInput = document.querySelector(".todo__input");
const allTasks = document.querySelector(".todo__lists");
const addTask = document.querySelector(".todo__btn");

export const todo = function () {
  const renderNewList = function () {
    const input = taskInput.value;
    if (!input) return;
    const markup = `
    <div class="todo__list">
      <ul class="todo__list--item">
        ${input}
      </ul>
      <div class="todo__imgs">
        <button class="check option--btn">
          <img class="todo__icon " src="img/checked.png" alt="" />
        </button>
        <button class="delete option--btn">
          <img class="todo__icon " src="img/delete.png" alt="delete" />
        </button>
      </div>
    </div>
    `;
    allTasks.insertAdjacentHTML("afterbegin", markup);

    const checkTask = document.querySelector(".check");
    const deleteTask = document.querySelector(".delete");

    checkTask.addEventListener("click", function (e) {
      const task = e.target.closest(".todo__list");
      task.children[0].classList.toggle("done");
      task.classList.toggle("opacity");
    });

    deleteTask.addEventListener("click", function (e) {
      const task = e.target.closest(".todo__list");
      task.classList.add("fall");
      task.addEventListener("transitionend", function () {
        task.remove();
      });
    });
  };
  addTask.addEventListener("click", function (e) {
    e.preventDefault();
    renderNewList();
    taskInput.value = "";
  });
};

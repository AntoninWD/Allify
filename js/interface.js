// modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".modal__btn");
const openModal = document.querySelectorAll(".open-modal");

openModal.forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.classList.add("show");
    overlay.classList.add("show");
  })
);

btnCloseModal.addEventListener("click", function () {
  modal.classList.remove("show");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", function () {
  modal.classList.remove("show");
  overlay.classList.remove("show");
});
let firstName;
// Get name value from modal
const inputName = document.querySelector(".modal__input");
const submitBtn = document.querySelector(".modal__submit");
const form = document.querySelector(".form");

submitBtn.addEventListener("click", function () {
  firstName = inputName.value;
  if (!firstName) return;
  form.action = "app.html";
});

export { firstName };

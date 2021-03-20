"strict";

// modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Get name value from modal
const inputName = document.querySelector(".modal__input");
const submitBtn = document.querySelector(".modal__submit");
let firstName;
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  firstName = inputName.value;

  if (!firstName) return;
  modal.classList.add("hide");
  overlay.classList.add("hide");

  getWelcomeMessage(firstName);
});

// Welcoming message
const welcomeName = document.querySelector(".welcome__title");
let message;
const getDayTime = function () {
  const today = new Date();
  const curHr = today.getHours();
  if (curHr < 12) {
    return (message = "Good Morning");
  } else if (curHr >= 18) {
    return (message = "Good Afternoon");
  } else {
    return (message = "Good Evening");
  }
};

const getWelcomeMessage = function (firstName) {
  let nameCap = firstName.toLowerCase().replace("-", " ").split(/\s+/);
  getDayTime();

  const finalName = nameCap
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");

  welcomeName.textContent = `${message} ${finalName}`;
};

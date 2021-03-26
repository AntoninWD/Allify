export const pomo = function () {
  // document selector
  const title = document.querySelector(".pomo__title");
  const timeContainer = document.querySelector(".time");
  const workPlus = document.querySelector(".work__plus");
  const workTime = document.querySelector(".work__time");
  const workMinus = document.querySelector(".work__minus");
  const breakPlus = document.querySelector(".break__plus");
  const breakTime = document.querySelector(".break__time");
  const breakMinus = document.querySelector(".break__minus");
  const playBtn = document.querySelector(".play");
  const resetBtn = document.querySelector(".reset");
  const pauseBtn = document.querySelector(".pause");

  ///
  let wTime = 25;
  let bTime = 5;
  let firstStart = false;
  let paused = false;
  let set;
  let resetPressed = false;
  let configBlocked = false;
  ////
  const startTimer = function () {
    configBlocked = true;
    paused = false;
    // wTime = wTime * 60;

    if (!firstStart || resetPressed) {
      set = setInterval(function () {
        !paused ? workTimer() : "";
      }, 1000);
    }
  };

  const pauseTimer = function () {
    paused = true;
  };

  const getTime = function () {
    if (!firstStart) {
      wTime = wTime * 60;
      firstStart = true;
    }
    const min = String(Math.trunc(wTime / 60)).padStart(2, 0);
    const sec = String(wTime % 60).padStart(2, 0);
    timeContainer.textContent = `${min}:${sec}`;
  };
  const workTimer = function () {
    getTime();
    wTime--;
  };

  // event listener
  workPlus.addEventListener("click", function () {
    if (configBlocked) return;
    wTime++;
    workTime.textContent = `${wTime} mins`;
  });

  workMinus.addEventListener("click", function () {
    if (configBlocked) return;
    if (wTime === 0) return;
    wTime--;
    workTime.textContent = `${wTime} mins`;
  });

  breakPlus.addEventListener("click", function () {
    if (configBlocked) return;
    bTime++;
    breakTime.textContent = `${bTime} mins`;
  });

  breakMinus.addEventListener("click", function () {
    if (configBlocked) return;
    if (bTime === 0) return;
    bTime--;
    breakTime.textContent = `${bTime} mins`;
  });

  resetBtn.addEventListener("click", function () {
    clearInterval(set);
    resetPressed = true;
    wTime = 25;
    workTime.textContent = `${wTime} mins`;
    bTime = 5;
    breakTime.textContent = `${bTime} mins`;
    firstStart = false;
    timeContainer.textContent = `25:00`;
    configBlocked = false;
  });
  playBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
};

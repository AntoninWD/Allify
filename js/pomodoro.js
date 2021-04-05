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
  let secondStart = false;
  let paused = false;
  let set, time;
  let resetPressed = false;
  let configBlocked = false;
  ////
  const audio = new Audio("sound/sound.mp3");

  const startTimer = function () {
    if (configBlocked) return;
    configBlocked = true;
    paused = false;
    title.textContent = "Time to work!";
    title.style.color = "#ffda36";
    timeContainer.style.color = "#55bcc9";
    if (!firstStart || resetPressed) {
      set = setInterval(function () {
        !paused ? getWorkTime() : "";
      }, 1000);
    }
  };

  const pauseTimer = function () {
    paused = true;
  };

  const firstTime = function () {
    if (!firstStart) {
      time = wTime;
      time = time * 60;
      // time = 5; for testing
      firstStart = true;
    }
    timeData(time);
  };

  const getWorkTime = function () {
    firstTime();
    if (time === 0) {
      getBreakTime();
      title.textContent = "Take a break!";
      title.style.color = "red";
      timeContainer.style.color = "red";
      audio.play();
      if (time === 0) {
        audio.play();
        clearInterval(set);
        restartTime();
        return;
      }
    }

    time--;
  };

  const restartTime = function () {
    // wTime = 25;
    // bTime = 5;
    firstStart = false;
    secondStart = false;
    configBlocked = false;
    startTimer();
  };

  const getBreakTime = function () {
    if (!secondStart) {
      time = bTime;
      time = time * 60;
      // time = 5; for testing
      secondStart = true;
    }

    timeData(time);
  };

  const timeData = function (time) {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    timeContainer.textContent = `${min}:${sec}`;
  };

  // event listener
  workPlus.addEventListener("click", function () {
    if (configBlocked) return;
    wTime++;

    workTime.textContent = `${wTime} mins`;
  });

  workMinus.addEventListener("click", function () {
    if (configBlocked || wTime === 0) return;

    wTime--;

    workTime.textContent = `${wTime} mins`;
  });

  breakPlus.addEventListener("click", function () {
    if (configBlocked) return;
    bTime++;

    breakTime.textContent = `${bTime} mins`;
  });

  breakMinus.addEventListener("click", function () {
    if (configBlocked || bTime === 0) return;
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
    title.textContent = "Pomodoro Timer";
    title.style.color = "white";
  });
  playBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
};

const tick = document.querySelector(".clock__time");

export const clock = function () {
  let today = new Date();
  let hours = String(today.getHours()).padStart(1, 0);
  let minutes = String(today.getMinutes()).padStart(2, 0);
  let seconds = String(today.getSeconds()).padStart(2, 0);
  let amOrPm = hours < 12 ? "AM" : "PM";
  let timeString = `${hours}:${minutes}:${seconds} ${amOrPm}`;
  tick.textContent = timeString;

  setTimeout(clock, 1000);
};

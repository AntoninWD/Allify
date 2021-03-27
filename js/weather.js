const weatherTemp = document.querySelector(".weather__temp");
const weatherIcon = document.querySelector(".weather__icon");
export const weather = function () {
  try {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9e5beec044342a56fe05f714e8ac77ce&units=metric`;

      let request = new XMLHttpRequest();
      request.open("GET", url);
      request.responseType = "json";
      request.send();
      request.onload = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            const res = request.response;
            const { icon } = res.weather[0];
            const temperature = res.main.temp;
            const temp = String(temperature).split(".")[0];
            weatherTemp.textContent = `${temp} °C`;
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" />`;
          }
        }
      };
    });
  } catch (err) {
    throw err;
  }
};

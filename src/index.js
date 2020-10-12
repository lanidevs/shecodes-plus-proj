let now = new Date();

function formatDate(now) {
  let h2 = document.querySelector("h2");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let day = days[now.getDay()];
  let minute = now.getMinutes();
  let hour = now.getHours();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();

  h2.innerHTML = `<strong>Date</strong> ${day}, ${month} ${date}, ${year} <strong>Time</strong> ${hour}:${minute}`;
}
formatDate(now);

function displayWeatherCondition(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =
    Math.round(response.data.main.temp) + `°C`;
}

function search(city) {
  let apiKey = "ca4ff62b82ce5d50cb085203c2cfa005";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  // let selectedCity = document.querySelector("#current-city");
  // let cityInput = document.querySelector("#city-input");
  // selectedCity.innerHTML = cityInput.value;

  let city = document.querySelector("#city-input").value;
  search(city);
}

let searchBox = document.querySelector("#city-name");
searchBox.addEventListener("submit", handleSubmit);

search("New York");

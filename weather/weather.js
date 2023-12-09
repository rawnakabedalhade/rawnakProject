const search = document.getElementById("search");
let input = document.getElementById("city");
const list = document.getElementsByClassName("list-group");
const key = "0ff9e7b53a98a66f915cd644b4f2298e";
let weather = [];
search.addEventListener("click", checkWeather);

async function checkWeather(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`
    );
    if (response.status == 200) {
      let data = await response.json();
      buildCard(data);
      input.value = "";
    }
  } catch (err) {
    console.log(err);
  }
}
function buildCard(data) {
  weatherStorage(data);
  document.getElementById("card").innerHTML += `
 <div class="card m-20 " style="width: 18rem;" id="card">
  <div class="card-body">
    <h5 class="card-title mt-2">${data.name}
    <sup>${data.sys.country}</sup>
    </h5>
    <p class="card-text">${Math.round(data.main.temp)} <sup>°C</sup></p>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
      data.weather[0]["icon"]
    }.svg" alt="WeatherIcon">
    <p class="card-text">${data.weather[0].description}</p>
  </div>
  </div>`;
}
function weatherStorage(data) {
  weather.push(data);
  localStorage.setItem("weather", JSON.stringify(weather));
  console.log(weather);
}

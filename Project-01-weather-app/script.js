const apiKey = "7014e50539e009b6c717bc8adeae7e7b";
let query;
const searchButtonElem = document.querySelector(".searchButtonElem-js");
const inputElem = document.querySelector(".inputElem-js");
inputElem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    setQuery();
    addLocalStorage(query);
    checkWeather();
  }
});

function setQuery() {
  const inputData = inputElem.value;
  query = inputData || localStorage.getItem("query");
}

searchButtonElem.addEventListener("click", () => {
  setQuery();
  addLocalStorage(query);
  checkWeather();
  inputElem.value = localStorage.getItem("query");
});

function addLocalStorage(query) {
  localStorage.setItem("query", query);
}

async function checkWeather() {
  try {
    const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}`;

    const resGeo = await fetch(urlGeo);

    if (!resGeo.ok) {
      throw new Error(`HTTP error: ${resGeo.status}`);
    }

    const dataGeo = await resGeo.json();
    if (dataGeo.length === 0) {
      throw new Error("City not found");
    }
    const lon = dataGeo[0].lon;
    const lat = dataGeo[0].lat;
    const urlCur = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const resCur = await fetch(urlCur);
    if (!resCur.ok) {
      throw new Error(`HTTP error: ${resCur.status}`);
    }
    const dataCur = await resCur.json();
    if (resCur.length === 0) {
      throw new Error("i dont know why it would return empty... ");
    }
    const weatherIcon = document.querySelector(".weather-icon-js");
    document.querySelector(".tempreture-js").innerHTML =
      `${Math.round(dataCur.main.temp)}&deg;C`;
    console.log(dataCur);
    document.querySelector(".city-js").innerHTML =
      query.charAt(0).toUpperCase() + query.slice(1);
    document.querySelector(".humidity-js").innerHTML =
      `${Math.round(dataCur.main.humidity)}%`;
    document.querySelector(".wind-js").innerHTML =
      `${Math.round(dataCur.wind.speed)}km/h`;
    weatherIcon.src = `images/${dataCur.weather[0].main}.png`;
    document.querySelector(".weather-container-js").style.display = "block";
    inputElem.value = "";
  } catch (error) {
    console.log(error);
  }
}

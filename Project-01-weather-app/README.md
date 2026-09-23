# Weather App

A weather application built with HTML, CSS, and JavaScript using the OpenWeather API.

## Features

- Search for a city and get its current weather
- Display temperature, humidity, and wind speed
- Display weather conditions with weather icons
- Save the last searched city using `localStorage`
- Search using the Enter key or search button
- Handle invalid cities and API errors

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeather API
- Fetch API
- Async / Await
- LocalStorage

## How It Works

The application first uses the OpenWeather Geocoding API to find the latitude and longitude of the searched city.

It then uses those coordinates to request the current weather data and updates the interface with the received information.

## What I Practiced

This project helped me practice working with real-world APIs and asynchronous JavaScript, including:

- `fetch()`
- `async / await`
- `try / catch`
- HTTP status handling
- JSON data
- DOM manipulation
- Event listeners
- `localStorage`
- Arrays and objects
- Template literals

## Note

This is a frontend learning project. The API key is required to use the application and is not included in this repository.

The project was inspired by a weather app tutorial, but the HTML, CSS, and JavaScript were independently implemented and modified.

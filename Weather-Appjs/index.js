const ApiKey = "d7e36a3e13ae3230d64000f9638d12c5";
const weathericon = document.querySelector(".weather-icon");
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather() {
  const cityInput = document.getElementById("cityInput").value;
  const url = `${baseUrl}${cityInput}&appid=${ApiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(data.message); // Throw error with message received from API
    }

    // Update UI with weather data
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    document.querySelector(".weather").style.display = "block";

    // Clear error message
    document.querySelector(".error-message").textContent = ""; 

  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.querySelector(".error-message").textContent = error.message; // Display error message on the screen
    document.querySelector(".weather").style.display = "none"; 
  }
}

document.getElementById("searchButton").addEventListener("click", checkWeather);

// Add event listener for enter key press
document.getElementById("cityInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkWeather();
  }
});

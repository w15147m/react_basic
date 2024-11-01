import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./searchBox.css";
import { useState } from "react";
import { Margin } from "@mui/icons-material";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState("");
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  let apikey = "e7547eddd1cd3bfec1114bf345d56ee2";

  let getWeather = async () => {
    try {
      let response = await fetch(
        `${apiUrl}?q=${city.trim()}&appid=${apikey}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found. Please enter a valid city name.");
      }
      let jsonResponse = await response.json();
      let data = {
        name: jsonResponse.name,
        feels_like: jsonResponse.main.feels_like,
        grnd_level: jsonResponse.main.grnd_level,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        sea_level: jsonResponse.main.sea_level,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        weather: jsonResponse.weather[0].description,
      };
      return data;
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  let handleCityChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setCity("");
    let newInfo = await getWeather();
    if (newInfo) {
      updateInfo(newInfo);
    }
  };

  return (
    <div className="searchBox">
      <h1>MINI PROJECT</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleCityChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
        <p  style={{ marginTop:'10px', color: 'red' }}>{error && <span>{error}</span>}</p>
    </div>
  );
}

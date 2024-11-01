import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(params) {
  let [weatherInfo, setWeatherInfo] = useState({
    name: "karachi",
    feels_like: 30.49,
    grnd_level: 985,
    humidity: 37,
    pressure: 1009,
    sea_level: 1009,
    temp: 30.99,
    temp_max: 31.06,
    temp_min: 30.99,
    weather: "clear sky",
   }); 
   let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
   }
  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox data={weatherInfo}/>
    </>
  );
}

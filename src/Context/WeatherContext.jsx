import { createContext, useContext, useState } from "react";
import GetWeatherData from "../Api/GetWeatherData";
import { GetWeatherDataByLocation } from "../Api/GetWeatherData";
export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await GetWeatherData(searchCity);
    setData(response);
  };

  const fetchDeviceLocTemp = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      GetWeatherDataByLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };
  return (
    <WeatherContext.Provider
      value={{ data, fetchData, searchCity, fetchDeviceLocTemp, setSearchCity }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

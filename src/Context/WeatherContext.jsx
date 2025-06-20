import { createContext, useContext, useState } from "react";
import GetWeatherData from "../Api/GetWeatherData";
import { GetWeatherDataByLocation } from "../Api/GetWeatherData";
export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState();
  const [error, setError] = useState(null);
  const fetchData = async () => {
    if (!searchCity) {
      setError("Enter city name");
      return;
    }
    try {
      const response = await GetWeatherData(searchCity);
      setData(response).catch(() => {
        setError("Enter a valid city name.");
      });

      setError(null);
    } catch (error) {
      setError("Enter a valid city name.");
      console.log("enter valid city name", error);
    }
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
      value={{
        data,
        fetchData,
        searchCity,
        fetchDeviceLocTemp,
        setSearchCity,
        setError,
        error,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

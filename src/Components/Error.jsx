import React from "react";
import { useWeather } from "../Context/WeatherContext";
function Error() {
  const weather = useWeather();
  return (
    <div className="text-red-500 text-center mt-2 text-3xl ">
      {weather.error}
    </div>
  );
}

export default Error;

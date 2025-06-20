import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Error from "./Components/Error";
import Input from "./Components/Input";
import { useWeather } from "./Context/WeatherContext";
import { useEffect } from "react";
function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchDeviceLocTemp();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-400 m-3 p-2 text-center ">
        Weather App
      </h1>
      <div className="flex items-center justify-center m-4 ">
        <Input />
        <Button onClick={weather.fetchData} value={"Search"} />
      </div>
      {weather.error && <Error />}

      <div className="flex items-center justify-center">
        {weather.data ? <Card /> : <div className="hidden"></div>}
      </div>
    </div>
  );
}

export default App;

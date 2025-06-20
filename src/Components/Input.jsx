import { useWeather } from "../Context/WeatherContext";
const Input = () => {
  const weather = useWeather();
  
  return (
    <input
      type="text"
      placeholder="enter city name"
      className="rounded-xl shadow-2xl border-none text-2xl p-3 "
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;

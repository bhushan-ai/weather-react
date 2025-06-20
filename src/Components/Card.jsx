import { useWeather } from "../Context/WeatherContext";

function Card() {
  const weather = useWeather();

  return (
    <div className="m-5 px-5 py-3 border-none shadow-2xl w-fit h-auto rounded-2xl  bg-blue-400  ">
      <div className="justify-center items-center flex">
        <div className="w-fit h-auto m-5 p-4 bg-white rounded-2xl">
          <img
            className="align-middle "
            src={weather.data?.current?.condition?.icon}
            width={"90px"}
            height={"90px"}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="w-fit h-auto m-5 p-4 bg-white rounded-2xl">
          <h2 className="text-3xl font-bold text-orange-400">
            {weather.data?.location?.name}
          </h2>
        </div>
        <div className="w-fit h-auto m-5 p-4 bg-white rounded-2xl">
          <h3 className="text-3xl font-bold text-orange-400 ">
            Temp {weather.data?.current?.temp_c.toFixed(0)}°C
          </h3>
        </div>
        <div className="w-fit h-auto m-5 p-4 bg-white rounded-2xl">
          <h3 className="text-3xl font-bold text-orange-400 ">
            Humidity {weather.data?.current?.humidity}%
          </h3>
        </div>
        <div className="w-fit h-auto m-5 p-4 bg-white rounded-2xl">
          <h3 className="text-3xl font-bold text-orange-400 ">
            Wind {weather.data?.current?.wind_kph}kph
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;

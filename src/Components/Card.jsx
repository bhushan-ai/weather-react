import { useWeather } from "../Context/WeatherContext";

function Card() {
  const weather = useWeather();

  const AQICategory = [
    "Good 0–50 ",
    "Moderate	51–100",
    "Unhealthy for Sensitive Groups 101–150",
    "Unhealthy 	151–200",
    "Very Unhealthy 201–300",
    "Hazardous 301+",
  ];

  const AQIColor = [
    "bg-green-400",
    "bg-yellow-300",
    "bg-orange-400",
    "bg-red-500",
    "bg-purple-500",
    "bg-maroon-700",
  ];
  const index = weather.data?.current.air_quality["us-epa-index"] - 1;
  return (
    <div className="m-5 px-5 py-3 border-none shadow-2xl max-w-max h-auto rounded-2xl  bg-blue-400  ">
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
      <div className="grid grid-cols-2 gap-2">
        <div className="w-fit h-auto m-3 p-4 bg-white rounded-2xl">
          <h2 className="text-2xl font-bold text-orange-400">
            {weather.data?.location?.name}
          </h2>
        </div>
        <div className="w-fit h-auto m-3 p-4 bg-white rounded-2xl">
          <h3 className="text-2xl font-bold text-orange-400 ">
            Temp {weather.data?.current?.temp_c.toFixed(0)}°C
          </h3>
        </div>
        <div className="w-fit h-auto m-3 p-4 bg-white rounded-2xl">
          <h3 className="text-2xl font-bold text-orange-400 ">
            Humidity {weather.data?.current?.humidity}%
          </h3>
        </div>
        <div className="w-fit h-auto m-3 p-4 bg-white rounded-2xl">
          <h3 className="text-2xl font-bold text-orange-400 ">
            Wind {weather.data?.current?.wind_kph} kph
          </h3>
        </div>
        <div className={`w-fit h-auto m-3 p-4  rounded-2xl ${AQIColor[index]}`}>
          <h3 className="text-2xl font-bold text-black ">
            AQI: {AQICategory[index]}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;

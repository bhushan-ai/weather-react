import React from "react";

const url =
  "http://api.weatherapi.com/v1/current.json?key=d938b581ff8b4997aad200337251906&q=";

async function GetWeatherData(city) {
  const response = await fetch(`${url}${city}&aqi=yes`);
  return await response.json();
}
export const GetWeatherDataByLocation = async (lat, lon) => {
  const response = await fetch(`${url}${lat},${lon}&aqi=yes`);
  return await response.json();
};

export default GetWeatherData;

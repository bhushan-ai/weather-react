import React from "react";

const url =
  "https://api.weatherapi.com/v1/current.json?key=d938b581ff8b4997aad200337251906&q=";

async function GetWeatherData(city) {
  try {
    const response = await fetch(`${url}${city}&aqi=yes`);
    if (!response.ok) throw new Error("Weather API error");
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return null;
  }
}
export const GetWeatherDataByLocation = async (lat, lon) => {
  const response = await fetch(`${url}${lat},${lon}&aqi=yes`);
  return await response.json();
};

export default GetWeatherData;

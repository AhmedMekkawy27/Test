"use client"
import Forecast from "@/components/ui/Forecast";
import { weekdays } from "@/utils/functions";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("cairo");
  const [weather, setWeather] = useState<any>({});
  const [error, setError] = useState<string | null>(null);

  async function fetchWeatherData() {
    try{
      const weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?days=5&key=72048723f49c411e8e795302240810&q=${city}`).then(response => response.json())
      setWeather(weatherData)
    } catch (error) {
      setError("Failed to fetch weather data");
    }
  }
  useEffect(() => {
    fetchWeatherData();
  },[]);
  console.log(weather)
  return (
<div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-fit ">
        <h1 className="text-3xl text-white text-center mb-6">Weather App</h1>
        <label htmlFor="city" className="text-white block text-start mb-2">Type City Name:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-2 w-full rounded text-black"
        />

        <button
          onClick={fetchWeatherData}
          className="bg-purple-600 text-white px-4 py-2 mt-4 rounded w-full hover:bg-purple-500 transition"
        >
          Get Weather
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weather.current &&(
          <div className="mt-6 grid grid-cols-2 gap-4 text-white">

            <div className="flex flex-col items-center p-3 border-[1px] rounded-lg border-gray-600">
              <h2 className="">{weather.location.name}</h2>
            </div>
            <div className="flex flex-col items-center p-3 border-[1px] rounded-lg border-gray-600">
              <h2 className="">{weather.location.country}</h2>
            </div>
            <div className="flex flex-col items-center p-3 border-[1px] rounded-lg border-gray-600">
              <img src={weather.current.condition.icon} alt="" />
              <h2 className="text-lg font-medium">{weather.current.condition.text}</h2>
            </div>
            <div className="flex justify-center items-center p-3 border-[1px] rounded-lg border-gray-600">
              <p className="text-4xl font-bold">{weather.current.temp_c} °C</p>
            </div>
            <div className="flex justify-center items-center p-3 border-[1px] rounded-lg border-gray-600">
              <p className="text-md">Humidity: {weather.current.humidity}%</p>
            </div>
            <div className="flex justify-center items-center p-3 border-[1px] rounded-lg border-gray-600">
              <p className="text-md">Wind: {weather.current.wind_kph}kph</p>
            </div>
            <h2 className="col-span-2 font-semibold text-xl">5-day Forecast</h2>
            <div className="col-span-2 flex flex-col p-3 border-[1px] min-w-fit rounded-lg gap-y-4 border-gray-600 text-white">
              {weather.forecast.forecastday.map((day:any) => (
                <Forecast key={day.date} date={weekdays(day.date)} maxtemp={day.day.maxtemp_c.toFixed()} mintemp={day.day.mintemp_c.toFixed()} condition={day.day.condition.text} icon={day.day.condition.icon}/>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

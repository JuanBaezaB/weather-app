import type { WeatherData } from "@/interfaces/weather.interface";

function WeatherAdapter(data: any): WeatherData {
  const weatherDataAdapted: WeatherData = {
    current: {
      dt: data.current.dt,
      sunrise: data.current.sunrise,
      sunset: data.current.sunset,
      temp: Math.round(data.current.temp),
      feels_like: Math.round(data.current.feels_like),
      pressure: data.current.pressure,
      humidity: data.current.humidity,
      dew_point: Math.round(data.current.dew_point),
      uvi: data.current.uvi,
      clouds: data.current.clouds,
      visibility: data.current.visibility,
      wind_speed: data.current.wind_speed,
      wind_deg: data.current.wind_deg,
      weather: data.current.weather.map((weather: any) => ({
        id: weather.id,
        main: weather.main,
        description: weather.description,
        icon: `/weather/fill/openweathermap/${weather.icon}.svg`,
      })),
    },
    daily: data.daily.map((daily: any) => ({
      dt: daily.dt,
      sunrise: daily.sunrise,
      sunset: daily.sunset,
      temp: {
        day: Math.round(daily.temp.day),
        min: Math.round(daily.temp.min),
        max: Math.round(daily.temp.max),
        night: Math.round(daily.temp.night),
        eve: Math.round(daily.temp.eve),
        morn: Math.round(daily.temp.morn),
      },
      feels_like: {
        day: Math.round(daily.feels_like.day),
        night: Math.round(daily.feels_like.night),
        eve: Math.round(daily.feels_like.eve),
        morn: Math.round(daily.feels_like.morn),
      },
      pressure: daily.pressure,
      humidity: daily.humidity,
      dew_point: Math.round(daily.dew_point),
      wind_speed: daily.wind_speed,
      wind_deg: daily.wind_deg,
      weather: daily.weather.map((weather: any) => ({
        id: weather.id,
        main: weather.main,
        description: weather.description,
        icon: `/weather/fill/openweathermap/${weather.icon}.svg`,
      })),
      clouds: daily.clouds,
      pop: daily.pop,
      uvi: daily.uvi,
    })),
    hourly: data.hourly.map((hourly: any) => ({
      dt: hourly.dt,
      temp: Math.round(hourly.temp),
      feels_like: Math.round(hourly.feels_like),
      pressure: hourly.pressure,
      humidity: hourly.humidity,
      dew_point: Math.round(hourly.dew_point),
      uvi: hourly.uvi,
      clouds: hourly.clouds,
      visibility: hourly.visibility,
      wind_speed: hourly.wind_speed,
      wind_deg: hourly.wind_deg,
      weather: hourly.weather.map((weather: any) => ({
        id: weather.id,
        main: weather.main,
        description: weather.description,
        icon: `/weather/fill/openweathermap/${weather.icon}.svg`,
      })),
      pop: hourly.pop,
    })),
    timezone: data.timezone,
    timezone_offset: data.timezone_offset,
  };
  return weatherDataAdapted;
}

export default WeatherAdapter;
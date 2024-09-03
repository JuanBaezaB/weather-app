import WeatherAdapter from '@/adapters/weather.adapter';
import type { Location } from '@/interfaces/location.interface';
import { type WeatherData } from '@/interfaces/weather.interface';
import axios from 'axios';

export const getWeather = async (location: Location): Promise<WeatherData> => {
  const response = await axios.get(
    `/api/weather?lat=${location.lat}&lng=${location.lng}`
  );

  const weatherAdapted = WeatherAdapter(response.data);
  return weatherAdapted;
}
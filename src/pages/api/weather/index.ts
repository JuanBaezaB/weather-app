import { OPENWEATHER_API_KEY } from '@/config';
import type { WeatherData } from '@/interfaces/weather.interface';
import { getFromCache, setToCache } from '@/services/cache.service';
import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async ({ request }) => {
  console.log('GET /api/weather');
  const url = new URL(request.url);
  const lat = url.searchParams.get('lat');
  const lng = url.searchParams.get('lng');

  if (!lat || !lng) {
    return new Response(JSON.stringify({ error: 'Latitude and Longitude parameters are required' }), { status: 400 });
  }

  const cacheKey = `weather-${lat}-${lng}`;
  const cachedData = await getFromCache<WeatherData>(cacheKey);
  console.log('cachedData', cachedData);
  if (cachedData) {
    console.log('Returning cached data');
    return new Response(JSON.stringify(cachedData), { status: 200 });
  }

  console.log('Fetching data from OpenWeather API');

  try {
    const response = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,alerts&units=metric&appid=${OPENWEATHER_API_KEY}`
    );
    setToCache<WeatherData>(cacheKey, response.data);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};
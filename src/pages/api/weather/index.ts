import { OPENWEATHER_API_KEY } from '@/config';
import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const lat = url.searchParams.get('lat');
  const lng = url.searchParams.get('lng');

  if (!lat || !lng) {
    return new Response(JSON.stringify({ error: 'Latitude and Longitude parameters are required' }), { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,alerts&units=metric&appid=${OPENWEATHER_API_KEY}`
    );
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};
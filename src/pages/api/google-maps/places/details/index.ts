import { GOOGLE_MAPS_API_KEY } from '@/config';
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
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&key=${GOOGLE_MAPS_API_KEY}`
    );
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};
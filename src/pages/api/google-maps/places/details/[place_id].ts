import { GOOGLE_MAPS_API_KEY } from '@/config';
import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async ({ params }) => {
  const { place_id } = params;

  if (!place_id) {
    return new Response(JSON.stringify({ error: 'Place ID parameter is required' }), { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${GOOGLE_MAPS_API_KEY}`
    );

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};
import { GOOGLE_MAPS_API_KEY } from "@/config";
import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async ({ request }) => {

  const url = new URL(request.url);
  const query = url.searchParams.get('query');

  if (!query) {
    return new Response(JSON.stringify({ error: 'Query parameter is required' }), { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${GOOGLE_MAPS_API_KEY}`
    );
    return new Response(JSON.stringify(response.data.predictions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};
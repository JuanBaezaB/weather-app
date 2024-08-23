// src/pages/api/place-photo.ts
import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const photo_reference = url.searchParams.get('photo_reference');

  if (!photo_reference) {
    return new Response(JSON.stringify({ error: 'Photo reference parameter is required' }), { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_reference}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
      { responseType: 'arraybuffer' }
    );

    return new Response(response.data, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};
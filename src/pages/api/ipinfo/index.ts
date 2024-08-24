import { IPINFO_TOKEN } from '@/config.ts';
import type { IpInfoResponse, Location } from '@/interfaces/location.interface';
import type { APIRoute } from 'astro';
import axios from 'axios';

export const GET: APIRoute = async () => {
  try {
    const response = await axios.get<IpInfoResponse>(
      `https://ipinfo.io?token=${IPINFO_TOKEN}`
    );

    const location = response.data.loc;
    const [latitude, longitude] = location.split(",");
    
    const data: Location = {
      lat: parseFloat(latitude),
      lng: parseFloat(longitude)
    };

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};
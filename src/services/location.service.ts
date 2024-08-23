import { IPINFO_TOKEN } from '@/config.ts';
import type { IpInfoResponse, Location } from '@/interfaces/location.interface';
import axios from 'axios';

export const getLocationByGeolocation = async (): Promise<Location> => {
  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    const options = {
      enableHighAccuracy: true, // Mayor precisión
      timeout: 5000, // Tiempo máximo de espera de 5 segundos
      maximumAge: 0, // No aceptar ubicaciones cacheadas
    };

    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
  return {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
};

export const getLocationByIP = async (): Promise<Location> => {
  const response = await axios.get<IpInfoResponse>(`https://ipinfo.io?token=${IPINFO_TOKEN}`);
  const location = response.data.loc;
  const [latitude, longitude] = location.split(",");
  return {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude)
  };

}

export const getLocation = async (): Promise<Location> => {
  try {
    return await getLocationByGeolocation();
  } catch (error) {
    return await getLocationByIP();
  }
}
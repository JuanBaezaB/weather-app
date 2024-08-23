import type { Location } from "@/interfaces/location.interface";
import type { WeatherData } from "@/interfaces/weather.interface";
import { getWeather } from "@/services/weather.service";
import { persistentAtom } from "@nanostores/persistent";
import { onSet } from "nanostores";

export const weatherStore = persistentAtom<WeatherData | null>('weather', null, {
  encode (value) {
    return JSON.stringify(value)
  },
  decode (value ) {
    try {
      return JSON.parse(value)
    } catch(e) {
      return value
    }
  }
})

export const getCurrentWeather = (): WeatherData | null => {
  return weatherStore.get();
}

export const setWeather = (weather: WeatherData) => {
  weatherStore.set(weather);
}

export async function fetchWeather(location: Location) {
	try {
		const data = await getWeather(location);
		if (data) {
			weatherStore.set(data);
		}
	} catch (error) {
		weatherStore.set(null);
	}
}

onSet(weatherStore, (weather) => {
  if (weather.newValue) {
    console.log('New weather:', weather.newValue);
  }
});
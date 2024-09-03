import type { Location } from "@/interfaces/location.interface";
import { persistentAtom, } from '@nanostores/persistent';
import { fetchWeather } from "./weather.store";

// export const locationStore = persistentAtom<string>(
// 	'location',
// );

export const locationStore = persistentAtom<Location | null >('location', null, {
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

// onSet(locationStore, (location: AtomSetPayload<never, WritableAtom<Location | null>>) => {
// 	const newlocation = location.newValue;
// 	if (newlocation) {
// 		console.log('New location:', newlocation);
// 	}
// 	// fetchWeather(location.newValue);
// });

locationStore.subscribe((location, oldValue) => {
	if (location?.lat === oldValue?.lat && location?.lng === oldValue?.lng) {
		return;
	}else{
		if (location) {
			fetchWeather(location);
		}	
	}
});

export const setLocation = (location: Location) => {
	const currentLocation = locationStore.get();
	if (location.lat === currentLocation?.lat && location.lng === currentLocation.lng) {
		console.log('Location is the same');
		return;
	}
	locationStore.set(location);
};

export const getCurrentLocation = (): Location | null => {
	return locationStore.get();
};
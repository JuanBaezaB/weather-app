import PlaceDetailsAdapter from "@/adapters/placeDetails.adapter";
import predictionsAdapter from "@/adapters/predictions.adapter";
import type { Prediction } from "@/interfaces/prediction.interface";
import axios from "axios";

export async function getPredictions(query: string): Promise<Prediction[]> {
  const response = await axios.get(
    `/api/google-maps/places/predictions?query=${query}`
  );
  return predictionsAdapter(response.data);
}

export async function getPlaceDetails(placeId: string) {
  const response = await axios.get(
    `/api/google-maps/places/details/${placeId}`
  );
  return PlaceDetailsAdapter(response.data.result);
}

export async function getNearbyPlaces(lat: number, lng: number) {
  const response = await axios.get(
    `/api/google-maps/places/details?lat=${lat}&lng=${lng}`
  );
  return response;
}

export async function getPlacePhoto(photoReference: string) {
  const response = await axios.get(
    `/api/google-maps/places/photo?photo_reference=${photoReference}`
  );
  return response.request.responseURL;
}
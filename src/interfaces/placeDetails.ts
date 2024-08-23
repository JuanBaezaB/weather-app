import type { Location } from "./location.interface";

export interface PlaceDetails {
  name: string;
  address: string;
  phoneNumber?: string;
  rating: number;
  photo?: string;
  location: Location;
}
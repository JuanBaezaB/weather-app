import type { PlaceDetails } from "@/interfaces/placeDetails";

function PlaceDetailsAdapter(data: any): PlaceDetails {
  return {
    name: data.name,
    address: data.formatted_address,
    phoneNumber: data.formatted_phone_number,
    rating: data.rating,
    photo: data.photos ? data.photos[0].photo_reference : data.reference,
    location: {
      lat: data.geometry.location.lat,
      lng: data.geometry.location.lng,
    },
  };
}

export default PlaceDetailsAdapter;
import type { Prediction } from "@/interfaces/prediction.interface";

function predictionsAdapter(data: any): Prediction[] {
  return data.map((prediction: any) => ({
    description: prediction.description,
    placeId: prediction.place_id,
  }));
}

export default predictionsAdapter;

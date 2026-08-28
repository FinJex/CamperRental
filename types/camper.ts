export type CamperForm = "alcove" | "panel_van" | "integrated" | "semi_integrated";
export type Transmission = "automatic" | "manual";
export type Engine = "diesel" | "petrol" | "hybrid" | "electric";
export type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";

export interface CamperListItemDto {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: Amenity[];
  coverImage: string;
  totalReviews: number;
}


export interface CamperListResponseDto {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: CamperListItemDto[];
}

export interface FiltersResponseDto {
  forms: CamperForm[];
  transmissions: Transmission[];
  engines: Engine[];
}
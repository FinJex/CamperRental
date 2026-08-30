import { CamperListResponseDto } from "@/types/camper";
import { CamperDetailsEntity } from "@/types/camper";
import { ReviewEntity } from "@/types/camper";
import { BookingRequestDto, BookingRequestResponseDto } from "@/types/camper";

interface FetchCampersParams {
  page: number;
  perPage: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

export async function fetchCampers(
  params: FetchCampersParams
): Promise<CamperListResponseDto> {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(params.page));
  searchParams.set("perPage", String(params.perPage));

  if (params.location) searchParams.set("location", params.location);
  if (params.form) searchParams.set("form", params.form);
  if (params.transmission) searchParams.set("transmission", params.transmission);
  if (params.engine) searchParams.set("engine", params.engine);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/campers?${searchParams.toString()}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch campers");
  }

  return res.json();
}

export async function fetchCamperById(id: string): Promise<CamperDetailsEntity> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campers/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch camper details");
  }

  return res.json();
}

export async function fetchCamperReviews(camperId: string): Promise<ReviewEntity[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campers/${camperId}/reviews`);

  if (!res.ok) {
    throw new Error("Failed to fetch camper reviews");
  }

  return res.json();
}

export async function createBookingRequest(
  camperId: string,
  data: BookingRequestDto
): Promise<BookingRequestResponseDto> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/campers/${camperId}/booking-requests`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to send booking request");
  }

  return res.json();
}
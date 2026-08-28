import { CamperListResponseDto } from "@/types/camper";

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
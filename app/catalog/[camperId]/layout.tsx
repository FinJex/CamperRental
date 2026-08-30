import type { Metadata } from "next";
import { fetchCamperById } from "@/lib/api/cumper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ camperId: string }>;
}): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await fetchCamperById(camperId);

    return {
      title: `${camper.name} — TravelTrucks`,
      description: camper.description,
    };
  } catch {
    return {
      title: "Camper details — TravelTrucks",
      description: "View detailed information about this camper.",
    };
  }
}

export default function CamperDetailsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
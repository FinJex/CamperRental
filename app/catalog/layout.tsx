import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog — TravelTrucks",
  description: "Browse our full catalog of campervans with filters for location, engine, and transmission.",
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
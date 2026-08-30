"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCamperById } from "@/lib/api/cumper";
import Loader from "@/components/Loader/Loader";
import css from "./page.module.css";
import Reviews from "@/components/Reviews/Reviews";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import CamperInfo from "@/components/CamperInfo/CamperInfo";
import BookingForm from "@/components/BookingForm/BookingForm";

export default function CamperDetailsPage() {
  const { camperId } = useParams<{ camperId: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const {
    data: camper,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => fetchCamperById(camperId),
  });

  if (isLoading) return <Loader />;
  if (isError || !camper) return <p>Something went wrong while loading camper details.</p>;

  const activeImage = camper.gallery[activeImageIndex];

  return (
  <section className={css.detailsSection}>
    <div className={css.topRow}>
      <div className={css.gallery}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImage.original}
          alt={camper.name}
          className={css.mainImage}
        />

        <div className={css.thumbnails}>
          {camper.gallery.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className={`${css.thumbnailButton} ${index === activeImageIndex ? css.thumbnailActive : ""}`}
              onClick={() => setActiveImageIndex(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.thumb}
                alt={camper.name}
                className={css.thumbnailImage}
              />
            </button>
          ))}
        </div>
      </div>

      <div className={css.rightColumn}>
        <CamperInfo camper={camper} />
        <VehicleDetails camper={camper} />
      </div>
    </div>

    <div className={css.bottomRow}>
      <Reviews camperId={camper.id} />
      <BookingForm camperId={camper.id} />
    </div>
  </section>
);
}
import { CamperDetailsEntity } from "@/types/camper";
import css from "./CamperInfo.module.css";

interface CamperInfoProps {
  camper: CamperDetailsEntity;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>{camper.name}</h1>

      <div className={css.metaRow}>
        <span className={css.metaItem}>
          <svg width={16} height={16}>
            <use href="/icons/sprite.svg#icon-rating" />
          </svg>
          {camper.rating} ({camper.totalReviews} Reviews)
        </span>

        <span className={css.metaItem}>
          <svg width={16} height={16}>
            <use href="/icons/sprite.svg#icon-location" />
          </svg>
          {camper.location}
        </span>
      </div>

      <p className={css.price}>€{camper.price.toLocaleString()}</p>

      <p className={css.description}>{camper.description}</p>
    </div>
  );
}
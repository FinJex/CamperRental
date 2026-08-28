import Link from "next/link";
import { CamperListItemDto } from "@/types/camper";
import css from "./CamperCard.module.css";

interface CamperCardProps {
  camper: CamperListItemDto;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <li className={css.card}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={camper.coverImage}
        alt={camper.name}
        className={css.image}
      />

      <div className={css.content}>
        <div className={css.headerRow}>
          <h3 className={css.title}>{camper.name}</h3>
          <span className={css.price}>€{camper.price.toLocaleString()}</span>
        </div>

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

        <p className={css.description}>{camper.description}</p>

        <div className={css.tags}>
          <span className={css.tag}>
            <svg width={20} height={20}>
              <use href="/icons/sprite.svg#icon-petrol" />
            </svg>
            {camper.engine}
          </span>

          <span className={css.tag}>
            <svg width={20} height={15}>
              <use href="/icons/sprite.svg#icon-transmission" />
            </svg>
            {camper.transmission}
          </span>

          <span className={css.tag}>
            <svg width={15} height={13}>
              <use href="/icons/sprite.svg#icon-car" />
            </svg>
            {camper.form}
          </span>
        </div>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.showMoreButton}
        >
          Show more
        </Link>
      </div>
    </li>
  );
}
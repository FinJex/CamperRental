import css from "./NotFound.module.css";

interface NotFoundProps {
  onClearFilters: () => void;
}

export default function NotFound({ onClearFilters }: NotFoundProps) {
  return (
    <div className={css.wrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/not-found.svg"
        alt="not-found-img"
        className={css.image}
      />

      <div className={css.textGroup}>
        <h3 className={css.title}>No campers found</h3>
        <p className={css.description}>
         We couldn`t find any campers that match your filters. <br /> Try adjusting your search or clearing some filters.
        </p>
      </div>

      <div className={css.actions}>
<button type="button" className={css.buttonClear} onClick={onClearFilters}>
  <svg className={css.closeIcon} width={10.5} height={10.5}>
    <use href="/icons/sprite.svg#icon-close" />
  </svg>
  Clear filters
</button>

        <button className={css.viewAllButton} onClick={onClearFilters}>
          View all campers
        </button>
      </div>
    </div>
  );
}
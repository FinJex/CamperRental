import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.pageCenter}>
<div className={css.card}>
  <svg className={css.spinner} viewBox="0 0 50 50">
    <circle className={css.track} cx="25" cy="25" r="20" fill="none" />
    <circle className={css.indicator} cx="25" cy="25" r="20" fill="none" />
  </svg>

  <div className={css.textGroup}>
    <h3 className={css.loadTitle}>Loading tracks...</h3>
    <p className={css.loadDescription}>Please wait while we fetch the best travel trucks for you</p>
  </div>
</div>
    </div>
  );
}
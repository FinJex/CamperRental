import { CamperDetailsEntity } from "@/types/camper";
import css from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: CamperDetailsEntity;
}

export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Vehicle details</h2>

      <ul className={css.amenitiesList}>
        <li className={css.amenityTag}>{camper.transmission}</li>
        <li className={css.amenityTag}>{camper.engine}</li>
        {camper.amenities.map((amenity) => (
          <li key={amenity} className={css.amenityTag}>
            {amenity}
          </li>
        ))}
      </ul>

      <dl className={css.specsList}>
        <div className={css.specRow}>
          <dt className={css.specLabel}>Form</dt>
          <dd className={css.specValue}>{camper.form}</dd>
        </div>

        <div className={css.specRow}>
          <dt className={css.specLabel}>Length</dt>
          <dd className={css.specValue}>{camper.length}</dd>
        </div>

        <div className={css.specRow}>
          <dt className={css.specLabel}>Width</dt>
          <dd className={css.specValue}>{camper.width}</dd>
        </div>

        <div className={css.specRow}>
          <dt className={css.specLabel}>Height</dt>
          <dd className={css.specValue}>{camper.height}</dd>
        </div>

        <div className={css.specRow}>
          <dt className={css.specLabel}>Tank</dt>
          <dd className={css.specValue}>{camper.tank}</dd>
        </div>

        <div className={css.specRow}>
          <dt className={css.specLabel}>Consumption</dt>
          <dd className={css.specValue}>{camper.consumption}</dd>
        </div>
      </dl>
    </div>
  );
}
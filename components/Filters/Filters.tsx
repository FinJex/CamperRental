"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import css from "./Filters.module.css";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get("location") ?? "");
  const [form, setForm] = useState(searchParams.get("form") ?? "");
  const [engine, setEngine] = useState(searchParams.get("engine") ?? "");
  const [transmission, setTransmission] = useState(searchParams.get("transmission") ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (location) params.set("location", location);
    if (form) params.set("form", form);
    if (engine) params.set("engine", engine);
    if (transmission) params.set("transmission", transmission);

    router.push(`/catalog?${params.toString()}`);
  };

  const handleClear = () => {
  setLocation("");
  setForm("");
  setEngine("");
  setTransmission("");
    router.push("/catalog");
  };

  return (
    <form onSubmit={handleSubmit} className={css.catalogForm}>
      <label className={css.labelLocation}>
        Location
        <div className={css.inputWrapper}>
          <svg className={css.locationIcon} width={20} height={20}>
            <use href="/icons/sprite.svg#icon-location" />
          </svg>
          <input
            className={css.inputLocation}
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </label>

      <h2 className={css.filtersTitle}>Filters</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Camper form</legend>
        {["alcove", "panel_van", "integrated", "semi_integrated"].map((value) => (
          <label key={value} className={css.label}>
            <input
              className={css.radioInput}
              type="radio"
              name="form"
              value={value}
              checked={form === value}
              onChange={(e) => setForm(e.target.value)}
            />
            {value}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Engine</legend>
        {["diesel", "petrol", "hybrid", "electric"].map((value) => (
          <label key={value} className={css.label}>
            <input
              className={css.radioInput}
              type="radio"
              name="engine"
              value={value}
              checked={engine === value}
              onChange={(e) => setEngine(e.target.value)}
            />
            {value}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Transmission</legend>
        {["automatic", "manual"].map((value) => (
          <label key={value} className={css.label}>
            <input
              className={css.radioInput}
              type="radio"
              name="transmission"
              value={value}
              checked={transmission === value}
              onChange={(e) => setTransmission(e.target.value)}
            />
            {value}
          </label>
        ))}
      </fieldset>

      <button type="submit" className={css.buttonSearch}>Search</button>
      <button type="button" className={css.buttonClear} onClick={handleClear}>
        <svg className={css.closeIcon} width={10.5} height={10.5}>
          <use href="/icons/sprite.svg#icon-close" />
        </svg>
        Clear filters
      </button>
    </form>
  );
}
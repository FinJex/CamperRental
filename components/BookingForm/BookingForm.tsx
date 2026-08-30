"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createBookingRequest } from "@/lib/api/cumper";
import css from "./BookingForm.module.css";

interface BookingFormProps {
  camperId: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const mutation = useMutation({
    mutationFn: () => createBookingRequest(camperId, { name, email }),
    onSuccess: () => {
      setName("");
      setEmail("");
      setErrors({});
    },
  });

const validate = (): boolean => {
  const newErrors: FormErrors = {};

  const namePattern = /^[a-zA-Zа-яА-ЯіІїЇєЄ\s'-]+$/;

  if (!name.trim()) {
    newErrors.name = "Please enter your name.";
  } else if (!namePattern.test(name)) {
    newErrors.name = "Please enter your name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    newErrors.email = "Please enter your email.";
  } else if (!emailPattern.test(email)) {
    newErrors.email = "Please enter a valid email.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      mutation.mutate();
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

      <form onSubmit={handleSubmit} className={css.form} noValidate>
        <div className={css.fieldGroup}>
          <div className={`${css.inputWrapper} ${errors.name ? css.inputError : ""}`}>
            <label className={css.floatingLabel}>Name*</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={css.input}
            />
            {errors.name && (
              <svg className={css.errorIcon} width={20} height={20}>
                <use href="/icons/sprite.svg#icon-alert" />
              </svg>
            )}
          </div>
          {errors.name && <p className={css.errorText}>{errors.name}</p>}
        </div>

        <div className={css.fieldGroup}>
          <div className={`${css.inputWrapper} ${errors.email ? css.inputError : ""}`}>
            <label className={css.floatingLabel}>Email*</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={css.input}
            />
            {errors.email && (
              <svg className={css.errorIcon} width={20} height={20}>
                <use href="/icons/sprite.svg#icon-alert" />
              </svg>
            )}
          </div>
          {errors.email && <p className={css.errorText}>{errors.email}</p>}
        </div>

        <button type="submit" className={css.sendButton} disabled={mutation.isPending}>
          {mutation.isPending ? "Sending..." : "Send"}
        </button>

        {mutation.isSuccess && (
          <p className={css.successMessage}>{mutation.data.message}</p>
        )}

        {mutation.isError && (
          <p className={css.errorMessage}>Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
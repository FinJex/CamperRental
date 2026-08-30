"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCamperReviews } from "@/lib/api/cumper";
import css from "./Reviews.module.css";

interface ReviewsProps {
  camperId: string;
}

export default function Reviews({ camperId }: ReviewsProps) {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => fetchCamperReviews(camperId),
  });

  if (isLoading) return <p>Loading reviews...</p>;
  if (!reviews || reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className={css.reviews}>
      <h2 className={css.title}>Reviews</h2>

      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id} className={css.reviewCard}>
            <div className={css.reviewHeader}>
              <span className={css.avatar}>{review.reviewer_name[0]}</span>
              <div>
                <p className={css.name}>{review.reviewer_name}</p>
                <div className={css.stars}>
                  {"★".repeat(review.reviewer_rating)}
                  {"☆".repeat(5 - review.reviewer_rating)}
                </div>
              </div>
            </div>

            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
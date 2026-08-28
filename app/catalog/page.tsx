"use client";

import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/api/cumper";
import Filters from "@/components/Filters/Filters";
import css from "./page.module.css";
import CamperCard from "@/components/CamperCard/CamperCard";

const PER_PAGE = 4;

export default function CatalogPage() {
  const searchParams = useSearchParams();

  const location = searchParams.get("location") ?? undefined;
  const form = searchParams.get("form") ?? undefined;
  const transmission = searchParams.get("transmission") ?? undefined;
  const engine = searchParams.get("engine") ?? undefined;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["campers", { location, form, transmission, engine }],
    queryFn: ({ pageParam }) =>
      fetchCampers({
        page: pageParam,
        perPage: PER_PAGE,
        location,
        form,
        transmission,
        engine,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const isLastPage = lastPage.page >= lastPage.totalPages;
      return isLastPage ? undefined : lastPage.page + 1;
    },
  });

  if (isLoading) return <p>Завантаження...</p>;
  if (isError) return <p>Сталася помилка при завантаженні кемперів.</p>;

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
<section className={css.catalogSection}>
  <Filters />

  <div className={css.campersColumn}>
    <ul className={css.camperList}>
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>

    {hasNextPage && (
      <button
        className={css.loadMoreButton}
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    )}
  </div>
</section>
  );
}
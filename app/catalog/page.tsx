"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/api/cumper";
import Filters from "@/components/Filters/Filters";
import css from "./page.module.css";
import CamperCard from "@/components/CamperCard/CamperCard";
import Loader from "@/components/Loader/Loader";
import NotFound from "@/components/NotFound/NotFound";

const PER_PAGE = 4;

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

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
    isFetching,
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

  if (isError) return <p>Something went wrong while loading campers. Please try again later.</p>;

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];
  const showNotFound = !isLoading && !isFetching && campers.length === 0;

  const handleClearFilters = () => {
    router.push("/catalog");
  };

  return (
    <section className={css.catalogSection}>
      <Filters key={searchParams.toString()} />

      <div className={css.campersColumn}>
        {isLoading && <Loader />}

        {!isLoading && (
          <>
            {showNotFound ? (
              <NotFound onClearFilters={handleClearFilters} />
            ) : (
              <>
                <ul className={css.camperList}>
                  {campers.map((camper) => (
                    <CamperCard key={camper.id} camper={camper} />
                  ))}
                </ul>

                {hasNextPage && (
                  <button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className={css.loadMoreButton}
                  >
                    {isFetchingNextPage ? "Loading..." : "Load more"}
                  </button>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<Loader />}>
      <CatalogContent />
    </Suspense>
  );
}
// Connects the catalog cards area to paginated backend courses data.
// Keeps the existing top/grid/pagination layout while using real API values.
import { useState } from "react";
import useCourses from "../../../api/hooks/useCourses";
import CardsMiddle from "./CardsMiddle";
import CardsTop from "./CardsTop";
import Pagination from "./Pagination";

const Cards = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useCourses(page);

  const courses = data?.data ?? [];
  const meta = data?.meta;

  return (
    <div className="w-[1167px]">
      <CardsTop
        total={meta?.total ?? 0}
        visibleCount={courses.length}
        isLoading={isLoading}
      />
      {isLoading ? (
        <p className="mt-[32px] text-[16px] text-[#8A8A8A]">Loading courses...</p>
      ) : null}
      {error ? (
        <p className="mt-[32px] text-[16px] text-[#F4161A]">
          {error instanceof Error ? error.message : "Failed to load courses."}
        </p>
      ) : null}
      {!isLoading && !error ? <CardsMiddle courses={courses} /> : null}
      <Pagination
        currentPage={meta?.currentPage ?? page}
        lastPage={meta?.lastPage ?? 1}
        perPage={meta?.perPage ?? courses.length}
        total={meta?.total ?? 0}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Cards;

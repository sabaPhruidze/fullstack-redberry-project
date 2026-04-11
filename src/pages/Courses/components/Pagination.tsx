// Renders catalog pagination controls from backend metadata.
// Keeps the existing pagination look while using real page values.
import ARROW from "../../../assets/icons/courses/Icon Set=ArrowRight.svg";

type PaginationProps = {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
  onPageChange: (page: number) => void;
};

const buildPages = (currentPage: number, lastPage: number) => {
  if (lastPage <= 5) {
    return Array.from({ length: lastPage }, (_, index) => index + 1);
  }
  const pages: Array<number | "ellipsis"> = [1];
  if (currentPage > 3) pages.push("ellipsis");
  for (let page = Math.max(2, currentPage - 1); page <= Math.min(lastPage - 1, currentPage + 1); page += 1) {
    pages.push(page);
  }
  if (currentPage < lastPage - 2) pages.push("ellipsis");
  pages.push(lastPage);
  return pages;
};

const Pagination = ({ currentPage, lastPage, perPage, total, onPageChange }: PaginationProps) => {
  const derivedLastPage = perPage > 0 ? Math.ceil(total / perPage) : 1;
  const safeLastPage = Math.max(lastPage || derivedLastPage || 1, 1);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), safeLastPage);
  const pages = buildPages(safeCurrentPage, safeLastPage);

  return (
    <div className="w-full h-[40px] flex justify-center">
      <div className="mt-[32px] h-full flex flex-row">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, safeCurrentPage - 1))}
          className="mr-[8px] flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]"
        >
          <img src={ARROW} alt="previous page" className="w-[15px] h-[23px] rotate-180" />
        </button>
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <div key={`ellipsis-${index}`} className="mr-[8px] flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]">
              <p className="text-[#4F46E5]">...</p>
            </div>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`mr-[8px] flex justify-center items-center w-[40px] h-[40px] border border-[#D1D1D1] ${
                page === safeCurrentPage ? "bg-[#281ED2]" : "bg-white"
              }`}
            >
              <p className={page === safeCurrentPage ? "text-white" : "text-[#4F46E5]"}>{page}</p>
            </button>
          ),
        )}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(safeLastPage, safeCurrentPage + 1))}
          className="flex justify-center items-center w-[40px] h-[40px] bg-white border border-[#D1D1D1]"
        >
          <img src={ARROW} alt="next page" className="w-[15px] h-[23px]" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

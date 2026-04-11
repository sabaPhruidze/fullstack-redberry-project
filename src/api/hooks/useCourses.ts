// Fetches paginated catalog courses response for cards and pagination UI.
// Keeps full response shape so both list data and metadata are available.
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../endpoints/courses";

const useCourses = (page = 1) => {
  return useQuery({
    queryKey: ["courses", page],
    queryFn: () => getCourses(page),
  });
};

export default useCourses;

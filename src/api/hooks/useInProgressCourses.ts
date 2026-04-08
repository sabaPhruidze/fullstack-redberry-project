import { useQuery } from "@tanstack/react-query";
import { getInProgressCourses } from "../endpoints/courses";

const useInProgressCourses = (enabled = true) => {
  return useQuery({
    queryKey: ["in-progress-courses"],
    queryFn: getInProgressCourses,
    enabled,
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
};

export default useInProgressCourses;

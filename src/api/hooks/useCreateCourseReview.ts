import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseReview } from "../endpoints/courseDetail";

type CreateCourseReviewInput = {
  courseId: number;
  rating: number;
};

const useCreateCourseReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ courseId, rating }: CreateCourseReviewInput) =>
      createCourseReview(courseId, { rating }),
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ["course-detail", variables.courseId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["enrollments"],
      });
    },
  });
};

export default useCreateCourseReview;

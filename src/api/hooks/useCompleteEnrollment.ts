import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { completeEnrollment } from "../endpoints/enrollments";
import { enrollmentsQueryKey } from "../queryKeys";
import type {
  CompleteEnrollmentForbiddenError,
  CompleteEnrollmentNotFoundError,
  CompleteEnrollmentUnauthorizedError,
} from "../../types/enrollments";

const useCompleteEnrollment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (enrollmentId: number) => completeEnrollment(enrollmentId),
    onSuccess: async (response) => {
      console.log("PATCH /enrollments/{id}/complete success:", response);
      await queryClient.invalidateQueries({
        queryKey: enrollmentsQueryKey,
      });
      await queryClient.invalidateQueries({
        queryKey: ["course-detail"],
      });
    },
    onError: (error) => {
      if (
        !axios.isAxiosError<
          | CompleteEnrollmentUnauthorizedError
          | CompleteEnrollmentForbiddenError
          | CompleteEnrollmentNotFoundError
        >(error)
      ) {
        return;
      }

      if ([401, 403, 404].includes(error.response?.status ?? 0)) {
        console.log("PATCH /enrollments/{id}/complete error:", error.response?.data);
      }
    },
  });
};

export default useCompleteEnrollment;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { completeEnrollment } from "../../endpoints/enrollments";
import {
  enrollmentsQueryKey,
  inProgressCoursesQueryKey,
} from "../../queryKeys";
import type {
  CompleteEnrollmentForbiddenError,
  CompleteEnrollmentNotFoundError,
  CompleteEnrollmentUnauthorizedError,
} from "../../../types/enrollments";

const useCompleteEnrollment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (enrollmentId: number) => completeEnrollment(enrollmentId),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: enrollmentsQueryKey,
          refetchType: "all",
        }),
        queryClient.invalidateQueries({
          queryKey: ["course-detail"],
          refetchType: "all",
        }),
        queryClient.invalidateQueries({
          queryKey: inProgressCoursesQueryKey,
          refetchType: "all",
        }),
      ]);
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
    },
  });
};

export default useCompleteEnrollment;

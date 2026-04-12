import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { inProgressCoursesQueryKey } from "../../../api/queryKeys";
import {
  updateProfile,
  type UpdateProfilePayload,
} from "../api/profile.api";

const FALLBACK_PROFILE_ERROR =
  "Failed to update profile. Please try again.";

export const useUpdateProfile = () => {
  const [serverError, setServerError] = useState<string>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload: UpdateProfilePayload) => updateProfile(payload),
  });

  const clearServerError = () => setServerError(undefined);

  const submitProfile = async (payload: UpdateProfilePayload) => {
    clearServerError();

    try {
      const updatedUser = await mutation.mutateAsync(payload);
      await queryClient.invalidateQueries({
        queryKey: inProgressCoursesQueryKey,
      });
      return updatedUser;
    } catch (error) {
      if (axios.isAxiosError<{ message?: string }>(error)) {
        setServerError(error.response?.data?.message ?? FALLBACK_PROFILE_ERROR);
      } else {
        setServerError(FALLBACK_PROFILE_ERROR);
      }

      return null;
    }
  };

  return {
    submitProfile,
    isPending: mutation.isPending,
    serverError,
    clearServerError,
  };
};

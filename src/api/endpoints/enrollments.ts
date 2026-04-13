import { api } from "../http";
import type { EnrollmentsResponse } from "../../types/enrollments";

export const getEnrollments = async () => {
  const response = await api.get<EnrollmentsResponse>("/enrollments");
  return response.data.data;
};

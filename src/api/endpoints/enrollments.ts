import { api } from "../http";
import type {
  CompleteEnrollmentResponse,
  CreateEnrollmentRequest,
  CreateEnrollmentResponse,
  EnrollmentsResponse,
} from "../../types/enrollments";

export const getEnrollments = async () => {
  const response = await api.get<EnrollmentsResponse>("/enrollments");
  return response.data.data;
};

export const createEnrollment = async (payload: CreateEnrollmentRequest) => {
  const response = await api.post<CreateEnrollmentResponse>(
    "/enrollments",
    payload,
  );
  return response.data;
};

export const completeEnrollment = async (enrollmentId: number) => {
  const response = await api.patch<CompleteEnrollmentResponse>(
    `/enrollments/${enrollmentId}/complete`,
  );
  return response.data;
};

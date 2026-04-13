import type { Course } from "./courses";
import type { CourseSchedule } from "./courseDetail";

export interface EnrollmentItem {
  id: number;
  quantity: number;
  totalPrice: number;
  progress: number;
  completedAt: string | null;
  course: Course;
  schedule: CourseSchedule;
}

export interface EnrollmentsResponse {
  data: EnrollmentItem[];
}

export interface EnrollmentsUnauthorizedError {
  message: string;
}

export interface CreateEnrollmentRequest {
  courseId: number;
  courseScheduleId: number;
  force: boolean;
}

export type CreateEnrollmentSuccessData = EnrollmentItem;

export interface CreateEnrollmentResponse {
  data: CreateEnrollmentSuccessData;
  message: string;
}

export interface CreateEnrollmentUnauthorizedError {
  message: "Unauthenticated." | string;
}

export interface CreateEnrollmentConflict {
  requestedCourseId: number;
  conflictingEnrollmentId: number;
  conflictingCourseName: string;
  schedule: string;
}

export interface CreateEnrollmentConflictError {
  message: string;
  conflicts: CreateEnrollmentConflict[];
}

export interface CreateEnrollmentValidationError {
  message: string;
  errors: Record<string, string[]>;
}

export interface CompleteEnrollmentResponse {
  data: EnrollmentItem;
}

export interface CompleteEnrollmentUnauthorizedError {
  message: "Unauthenticated." | string;
}

export interface CompleteEnrollmentForbiddenError {
  message: "This action is unauthorized." | string;
}

export interface CompleteEnrollmentNotFoundError {
  message: "No query results for model." | string;
}

export interface DeleteEnrollmentUnauthorizedError {
  message: "Unauthenticated." | string;
}

export interface DeleteEnrollmentForbiddenError {
  message: "This action is unauthorized." | string;
}

export interface DeleteEnrollmentNotFoundError {
  message: "No query results for model." | string;
}

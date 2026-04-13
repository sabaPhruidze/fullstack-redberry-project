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

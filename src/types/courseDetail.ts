import type { Category, Course, Instructor, Topic } from "./courses";

export interface CourseReview {
  userId: number;
  rating: number;
}

export interface WeeklyScheduleOption {
  id: number;
  label: string;
  days: string[];
  isAvailable?: boolean;
  available?: boolean;
}

export interface TimeSlotOption {
  id: number;
  label: string;
  startTime: string;
  endTime: string;
  isAvailable?: boolean;
  available?: boolean;
}

export interface SessionTypeOption {
  id: number;
  courseScheduleId: number;
  name: string;
  priceModifier: number;
  availableSeats: number;
  location: string;
  isAvailable?: boolean;
  available?: boolean;
}

export interface CourseSchedule {
  weeklySchedule: WeeklyScheduleOption;
  timeSlot: TimeSlotOption;
  sessionType: SessionTypeOption;
  location: string;
}

export interface CourseEnrollment {
  id: number;
  quantity: number;
  totalPrice: number;
  progress: number;
  completedAt: string | null;
  course: Course;
  schedule: CourseSchedule;
}

export interface CourseDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: number;
  durationWeeks: number;
  isFeatured: boolean;
  reviews: CourseReview[];
  isRated: boolean;
  category: Category;
  topic: Topic;
  instructor: Instructor;
  enrollment?: CourseEnrollment;
}

export interface CourseDetailResponse {
  data: CourseDetail;
}

export interface CreateCourseReviewRequest {
  rating: number;
}

export interface CreateCourseReviewResponse {
  data: CourseReview;
}

// types for fetching courses
export interface CourseCategory {
  id: number;
  name: string;
  icon: string;
}

export interface CourseTopic {
  id: number;
  name: string;
  categoryId: number;
}

export interface CourseInstructor {
  id: number;
  name: string;
  avatar: string;
}

export interface CourseCardItem {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: number;
  durationWeeks: number;
  isFeatured: boolean;
  avgRating: number;
  reviewCount: number;
  category: CourseCategory;
  topic: CourseTopic;
  instructor: CourseInstructor;
}

export interface CoursesMeta {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface CoursesResponse {
  data: CourseCardItem[];
  meta: CoursesMeta;
}

export type Category = CourseCategory;
export type Topic = CourseTopic;
export type Instructor = CourseInstructor;
export type Course = CourseCardItem;

export interface FeaturedCoursesResponse {
  data: CourseCardItem[];
}

export interface CategoriesResponse {
  data: Category[];
}

export interface TopicsResponse {
  data: Topic[];
}

export interface InstructorsResponse {
  data: Instructor[];
}

export interface InProgressWeeklySchedule {
  id: number;
  label: string;
  days: string[];
}

export interface InProgressTimeSlot {
  id: number;
  label: string;
  startTime: string;
  endTime: string;
}

export interface InProgressSessionType {
  id: number;
  courseScheduleId: number;
  name: string;
  priceModifier: number;
  availableSeats: number;
  location: string;
}

export interface InProgressCourseSchedule {
  weeklySchedule: InProgressWeeklySchedule;
  timeSlot: InProgressTimeSlot;
  sessionType: InProgressSessionType;
  location: string;
}

export interface InProgressCourseItem {
  id: number;
  quantity: number;
  totalPrice: number;
  progress: number;
  completedAt: string;
  course: Course;
  schedule: InProgressCourseSchedule;
}

export interface InProgressCoursesResponse {
  data: InProgressCourseItem[];
}
export interface MockInProgressCoursesResponse {
  data: {
    id: number;
    progress: number;
    course: {
      id: number;
      title: string;
      image: string;
      avgRating: number;
      instructor: {
        name: string;
      };
    };
  }[];
}

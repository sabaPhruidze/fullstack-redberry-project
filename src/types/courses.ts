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

export interface Course {
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

export interface FeaturedCoursesResponse {
  data: Course[];
}

import { api } from "../http";
import { hydrateCourseRatings } from "../helpers/courseRatingHydration";
import type {
  CategoriesResponse,
  CoursesResponse,
  FeaturedCoursesResponse,
  InstructorsResponse,
  InProgressCourseItem,
  InProgressCoursesResponse,
  TopicsResponse,
} from "../../types/courses";
//backend data fetch on courses
export const getCourses = async (page = 1) => {
  const response = await api.get<CoursesResponse>("/courses", {
    params: { page },
  });
  return response.data;
};

export const getFeaturedCourses = async () => {
  const response = await api.get<FeaturedCoursesResponse>("/courses/featured");
  return response.data.data;
};

export const getInProgressCourses = async () => {
  const response =
    await api.get<InProgressCoursesResponse>("/courses/in-progress");
  return hydrateCourseRatings<InProgressCourseItem>(response.data.data);
};

export const getCategories = async () => {
  const response = await api.get<CategoriesResponse>("/categories");
  return response.data.data;
};

export const getTopics = async (categoryIds?: number[]) => {
  const response = await api.get<TopicsResponse>("/topics", {
    params: categoryIds?.length ? { categoryIds } : undefined,
  });
  return response.data.data;
};

export const getInstructors = async () => {
  const response = await api.get<InstructorsResponse>("/instructors");
  return response.data.data;
};

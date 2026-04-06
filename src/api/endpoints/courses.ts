import { api } from "../http";
import type { FeaturedCoursesResponse } from "../../types/courses";
//backend data fetch on courses
export const getFeaturedCourses = async () => {
  const response = await api.get<FeaturedCoursesResponse>("/courses/featured");
  return response.data.data;
};

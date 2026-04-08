import { api } from "../http";
import type {
  FeaturedCoursesResponse,
  InProgressCoursesResponse,
} from "../../types/courses";
//backend data fetch on courses
export const getFeaturedCourses = async () => {
  const response = await api.get<FeaturedCoursesResponse>("/courses/featured");
  return response.data.data;
};

export const getInProgressCourses = async () => {
  const response =
    await api.get<InProgressCoursesResponse>("/courses/in-progress");
  return response.data.data;
};

import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window === "undefined") {
    return config;
  }

  const token = localStorage.getItem("access_token");

  if (!token) {
    return config;
  }

  const formattedToken = token.startsWith("Bearer ") ? token : `Bearer ${token}`;

  config.headers.Authorization = formattedToken;

  return config;
});

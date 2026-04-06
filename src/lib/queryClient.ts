import { QueryClient } from "@tanstack/react-query";
//Here created tanstack query global client in order to make request work
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

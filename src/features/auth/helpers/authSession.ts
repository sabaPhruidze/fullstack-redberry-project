const ACCESS_TOKEN_STORAGE_KEY = "access_token";

export const isAuthenticatedClient = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return Boolean(localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY));
};

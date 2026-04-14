import { isAuthenticatedClient } from "../../auth/helpers/authSession";
import type { RegisteredUser } from "../../auth/types/signup";
import { getAuthUser, getIsProfileCompleteFromUser } from "./authUser";

type EnsureResult =
  | { blocked: true; reason: "unauthenticated" | "incomplete_profile" }
  | { blocked: false; user: RegisteredUser };

export const ensureCompleteProfileBeforeEnroll = (): EnsureResult => {
  if (!isAuthenticatedClient()) {
    return { blocked: true, reason: "unauthenticated" };
  }

  const authUser = getAuthUser();
  if (!authUser || !getIsProfileCompleteFromUser(authUser)) {
    return { blocked: true, reason: "incomplete_profile" };
  }

  return { blocked: false, user: authUser };
};

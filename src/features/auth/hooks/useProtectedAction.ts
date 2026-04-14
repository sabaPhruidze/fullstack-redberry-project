import { useAuthModal } from "./useAuthModal";
import { runProtectedAction } from "../helpers/protectedAction";
import { isAuthenticatedClient } from "../helpers/authSession";
import { useRequireCompleteProfile } from "../../profile/hooks/useRequireCompleteProfile";

export const useProtectedAction = () => {
  const { openLoginModal } = useAuthModal();
  const { runWithCompleteProfile } = useRequireCompleteProfile();

  const handleProtectedAction = (action?: () => void) => {
    runProtectedAction({
      isAuthenticated: isAuthenticatedClient(),
      openLoginModal,
      action,
    });
  };

  const handleProtectedEnrollAction = (action?: () => void) =>
    runWithCompleteProfile(action);

  return { handleProtectedAction, handleProtectedEnrollAction };
};

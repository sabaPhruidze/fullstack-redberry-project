import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import type { RegisteredUser } from "../types/signup";
import AuthModalShell from "./AuthModalShell";
import ProfileIdentityBlock from "./ProfileIdentityBlock";
import ProfileFieldsLayout from "./ProfileFieldsLayout";

type ProfileModalProps = {
  onClose?: () => void;
};

const getStoredAuthUser = (): RegisteredUser | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const rawUser = localStorage.getItem("auth_user");
  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser) as RegisteredUser;
  } catch {
    return null;
  }
};

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  useLockBodyScroll(true);
  const authUser = getStoredAuthUser();
  const username = authUser?.username?.trim() || "Username";
  const avatarUrl = authUser?.avatar?.trim();

  return (
    <AuthModalShell
      onClose={onClose}
      closeAriaLabel="Close profile panel"
      panelClassName="h-[730px] px-[50px] py-[49px]"
      contentClassName="h-[632px]"
      closeButtonClassName="top-[21px] right-[12px]"
      enableCloseActions={true}
      closeOnOverlayClick
    >
      <div className="flex h-[39px] w-[360px] items-center justify-center mb-[24px]">
        <h2
          className="text-center font-[600] text-[32px] leading-[100%] tracking-[0px] text-[#141414]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Profile
        </h2>
      </div>
      <ProfileIdentityBlock username={username} avatarUrl={avatarUrl} />
      <ProfileFieldsLayout />
    </AuthModalShell>
  );
};

export default ProfileModal;

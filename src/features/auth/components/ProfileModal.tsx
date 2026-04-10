import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useLockBodyScroll } from "../../../hooks/use-lock-body-scroll";
import { useProfileModalForm } from "../hooks/useProfileModalForm";
import AuthModalShell from "./AuthModalShell";
import ProfileHeader from "./ProfileHeader";
import ProfileIdentityBlock from "./ProfileIdentityBlock";
import ProfileFieldsLayout from "./ProfileFieldsLayout";

type ProfileModalProps = { onClose?: () => void };

const ProfileModal = ({ onClose }: ProfileModalProps) => {
  useLockBodyScroll(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitAttempted, setHasSubmitAttempted] = useState(false);
  const { control, errors, isValid, isDirty, watchedValues, handleAttemptClose, handleAvatarChange } =
    useProfileModalForm({ onClose });

  const avatarUrl = useMemo(() => {
    if (watchedValues.avatar instanceof File) return URL.createObjectURL(watchedValues.avatar);
    if (typeof watchedValues.avatar === "string" && watchedValues.avatar.trim()) return watchedValues.avatar.trim();
    return undefined;
  }, [watchedValues.avatar]);

  useEffect(() => {
    if (!avatarUrl?.startsWith("blob:")) return;
    return () => URL.revokeObjectURL(avatarUrl);
  }, [avatarUrl]);

  const handleSafeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitAttempted(true);
    if (!isValid || isSubmitting) return;
    setIsSubmitting(true);
    await Promise.resolve();
    setIsSubmitting(false);
  };

  return (
    <AuthModalShell onClose={handleAttemptClose} closeAriaLabel="Close profile panel" panelClassName="h-[730px] px-[50px] py-[49px]" contentClassName="h-[632px]" closeButtonClassName="top-[21px] right-[12px]" enableCloseActions={true} closeOnOverlayClick>
      <form onSubmit={handleSafeSubmit}>
        <ProfileHeader />
        <ProfileIdentityBlock username={watchedValues.fullName?.trim() || "Username"} avatarUrl={avatarUrl} />
        <ProfileFieldsLayout control={control} errors={errors} watchedValues={watchedValues} isDirty={isDirty} isValid={isValid} isSubmitting={isSubmitting} hasSubmitAttempted={hasSubmitAttempted} onAvatarChange={handleAvatarChange} />
      </form>
    </AuthModalShell>
  );
};

export default ProfileModal;

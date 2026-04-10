type ProfileCompletionInput = {
  fullName?: string | null;
  email?: string | null;
  mobileNumber?: string | null;
  age?: number | string | null;
};

const hasTextValue = (value?: string | null) => Boolean(value?.trim());

export const normalizeGeorgianMobile = (value: string) =>
  value.replace(/\s+/g, "");

export const isProfileComplete = (profile: ProfileCompletionInput) => {
  const hasFullName = hasTextValue(profile.fullName);
  const hasEmail = hasTextValue(profile.email);
  const hasMobileNumber =
    normalizeGeorgianMobile(profile.mobileNumber ?? "").length > 0;
  const hasAge =
    typeof profile.age === "number"
      ? Number.isFinite(profile.age)
      : hasTextValue(profile.age);

  return hasFullName && hasEmail && hasMobileNumber && hasAge;
};

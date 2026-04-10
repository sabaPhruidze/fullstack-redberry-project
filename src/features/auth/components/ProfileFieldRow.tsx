import ProfileSingleField from "./ProfileSingleField";

const ProfileFieldRow = () => {
  return (
    <div className="flex w-[360px] items-start gap-[8px]">
      <ProfileSingleField
        id="profile-mobile-number"
        label="Mobile Number"
        placeholder="+995 599209820"
        trailingIconType="check"
        wrapperClassName="h-[73px] w-[267px]"
        labelClassName="w-[267px]"
        inputBoxClassName="relative"
        labelInputGapClassName="mt-[8px]"
        trailingIconContainerClassName="absolute right-[14px] top-[12px] flex h-[22px] w-[22px] items-center justify-center"
      />
      <ProfileSingleField
        id="profile-age"
        label="Age"
        placeholder="29"
        trailingIconType="arrow"
        wrapperClassName="h-[73px] w-[85px]"
        labelClassName="w-[85px]"
        inputBoxClassName="relative"
        labelInputGapClassName="mt-[8px]"
        trailingIconContainerClassName="absolute right-[14px] top-[12px] flex h-[22px] w-[22px] items-center justify-center"
      />
    </div>
  );
};

export default ProfileFieldRow;

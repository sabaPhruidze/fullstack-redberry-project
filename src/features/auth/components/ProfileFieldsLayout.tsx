import ProfileFieldRow from "./ProfileFieldRow";
import ProfileSingleField from "./ProfileSingleField";
import ProfileUploadAvatarBlock from "./ProfileUploadAvatarBlock";
import Button from "../../../components/ui/Button";

const ProfileFieldsLayout = () => {
  return (
    <div
      className="flex w-[360px] flex-col gap-[12px]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <ProfileSingleField
        id="profile-full-name"
        label="Full Name"
        placeholder="Username"
        trailingIconType="pencil"
        fieldBackgroundColor="#F5F5F5"
        fieldBorderColor="#ADADAD"
      />
      <ProfileSingleField
        id="profile-email"
        label="Email"
        placeholder="Email@gmail.com"
        trailingIconType="check"
        fieldBackgroundColor="#F5F5F5"
        fieldBorderColor="#ADADAD"
      />
      <ProfileFieldRow />
      <ProfileUploadAvatarBlock />
      <Button
        text="Update Profile"
        classname="flex h-[47px] w-[360px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] pt-[17px] pr-[25px] pb-[17px] pl-[25px]"
      />
    </div>
  );
};

export default ProfileFieldsLayout;

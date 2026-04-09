import { useState } from "react";
import AuthModalFooter from "./AuthModalFooter";
import AuthPasswordInputField from "./AuthPasswordInputField";
import AuthUploadAvatarField from "./AuthUploadAvatarField";

type AuthSignUpStepThreeSectionProps = {
  onSignUp: () => void;
  onLogInClick: () => void;
};

const AuthSignUpStepThreeSection = ({
  onSignUp,
  onLogInClick,
}: AuthSignUpStepThreeSectionProps) => {
  const [username, setUsername] = useState("");

  return (
    <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <AuthPasswordInputField
        id="signup-username"
        label="Username*"
        value={username}
        placeholder="Username"
        labelColor="#3D3D3D"
        onChange={setUsername}
      />
      <AuthUploadAvatarField showTopSpacing />
      <button
        type="button"
        onClick={onSignUp}
        className="mt-[16px] flex h-[47px] w-[360px] items-center justify-center rounded-[8px] bg-[#4F46E5] p-[10px] text-[16px] leading-[100%] text-white"
        style={{ fontWeight: 500 }}
      >
        Sign Up
      </button>
      <div className="mt-[13px]">
        <AuthModalFooter
          questionText="Already have an account?"
          actionText="Log In"
          onActionClick={onLogInClick}
        />
      </div>
    </div>
  );
};

export default AuthSignUpStepThreeSection;

import { useState } from "react";
import AuthModalFooter from "./AuthModalFooter";
import AuthPasswordInputField from "./AuthPasswordInputField";
import EYE_OPENED_ICON from "../../../assets/icons/authentification/Eye_opened.svg?react";
import EYE_CLOSED_ICON from "../../../assets/icons/authentification/Eye_closed.svg?react";
import { validateStepTwo } from "../utils/validateStepTwo";
import type { StepTwoErrors } from "../types/stepTwoErrors";

type AuthSignUpStepTwoSectionProps = {
  password: string;
  confirmPassword: string;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onNext: () => void;
  onLogInClick: () => void;
};
const AuthSignUpStepTwoSection = ({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  onNext,
  onLogInClick,
}: AuthSignUpStepTwoSectionProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<StepTwoErrors>({});
  const updateError = (field: keyof StepTwoErrors) => setErrors((prev) => ({ ...prev, [field]: undefined }));
  const handleNext = () => { const nextErrors = validateStepTwo({ password, confirmPassword }); setErrors(nextErrors); if (Object.keys(nextErrors).length === 0) onNext(); };

  return (
    <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <AuthPasswordInputField
        id="signup-password"
        label="Password*"
        value={password}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        icon={showPassword ? EYE_OPENED_ICON : EYE_CLOSED_ICON}
        ariaLabel="Toggle password visibility"
        error={errors.password}
        onChange={(value) => { onPasswordChange(value); updateError("password"); }}
        onToggleVisibility={() => setShowPassword((prev) => !prev)}
      />
      <AuthPasswordInputField
        id="signup-confirm-password"
        label="Confirm Password*"
        value={confirmPassword}
        type={showConfirmPassword ? "text" : "password"}
        placeholder="Password"
        icon={showConfirmPassword ? EYE_OPENED_ICON : EYE_CLOSED_ICON}
        ariaLabel="Toggle confirm password visibility"
        showTopSpacing
        error={errors.confirmPassword}
        onChange={(value) => { onConfirmPasswordChange(value); updateError("confirmPassword"); }}
        onToggleVisibility={() => setShowConfirmPassword((prev) => !prev)}
      />
      <button type="button" onClick={handleNext} className="mt-[16px] flex h-[47px] w-[360px] items-center justify-center rounded-[8px] bg-[#4F46E5] p-[10px] text-[16px] leading-[100%] text-white" style={{ fontWeight: 500 }}>
        Next
      </button>
      <AuthModalFooter questionText="Already have an account?" actionText="Log In" onActionClick={onLogInClick} />
    </div>
  );
};

export default AuthSignUpStepTwoSection;

import { useState } from "react";
import {
  INITIAL_SIGN_UP_FORM,
  type SignUpFormValues,
  type SignUpStep,
} from "../types/signup";

type UseSignUpModalStateParams = {
  onClose?: () => void;
};

export const useSignUpModalState = ({ onClose }: UseSignUpModalStateParams) => {
  const [currentStep, setCurrentStep] = useState<SignUpStep>(1);
  const [signUpForm, setSignUpForm] = useState<SignUpFormValues>(
    INITIAL_SIGN_UP_FORM,
  );

  const isStepOne = currentStep === 1;
  const isStepTwo = currentStep === 2;
  const isStepThree = currentStep === 3;
  const goBackStep = () => setCurrentStep((prev) => (prev === 3 ? 2 : 1));

  const updateField = <K extends keyof SignUpFormValues>(
    field: K,
    value: SignUpFormValues[K],
  ) => {
    setSignUpForm((prev) => ({ ...prev, [field]: value }));
  };

  const closeModal = () => {
    setCurrentStep(1);
    setSignUpForm(INITIAL_SIGN_UP_FORM);
    onClose?.();
  };

  return {
    currentStep,
    isStepOne,
    isStepTwo,
    isStepThree,
    signUpForm,
    goToStepTwo: () => setCurrentStep(2),
    goToStepThree: () => setCurrentStep(3),
    goBackStep,
    updateField,
    closeModal,
  };
};

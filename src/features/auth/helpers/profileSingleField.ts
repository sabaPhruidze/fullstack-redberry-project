import type { RefCallback } from "react";
import PENCIL_SIMPLE_ICON from "../../../assets/icons/profile/Icon Set=PencilSimple.svg";
import CHECK_ICON from "../../../assets/icons/profile/Icon Set=Check.svg";
import ARROW_ICON from "../../../assets/icons/profile/arrow_down.svg";

export type TrailingIconType = "pencil" | "check" | "arrow";

export type ProfileSingleFieldProps = {
  id: string;
  label: string;
  name: string;
  type?: "text" | "number" | "email";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  inputRef: RefCallback<HTMLInputElement>;
  readOnly?: boolean;
  disabled?: boolean;
  error?: string;
  success?: boolean;
  trailingIconType?: TrailingIconType;
  wrapperClassName?: string;
  labelClassName?: string;
  inputBoxClassName?: string;
  labelInputGapClassName?: string;
  trailingIconContainerClassName?: string;
  fieldBackgroundColor?: string;
  fieldBorderColor?: string;
};

export const getTrailingIconSrc = (
  trailingIconType?: TrailingIconType,
  success?: boolean,
) => {
  if (trailingIconType === "pencil") return PENCIL_SIMPLE_ICON;
  if (trailingIconType === "arrow") return ARROW_ICON;
  if (trailingIconType === "check" && success) return CHECK_ICON;
  return undefined;
};

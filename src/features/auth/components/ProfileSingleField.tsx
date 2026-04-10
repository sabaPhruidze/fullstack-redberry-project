import AuthFormField from "./AuthFormField";
import {
  getTrailingIconSrc,
  type ProfileSingleFieldProps,
} from "../helpers/profileSingleField";

const ProfileSingleField = ({
  id,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  inputRef,
  readOnly = false,
  disabled = false,
  error,
  success = false,
  trailingIconType,
  wrapperClassName = "h-[73px]",
  labelClassName = "w-full",
  inputBoxClassName = "",
  labelInputGapClassName = "mt-[5px]",
  trailingIconContainerClassName,
  fieldBackgroundColor = "#FFFFFF",
  fieldBorderColor = "#D1D1D1",
}: ProfileSingleFieldProps) => {
  const trailingIconSrc = getTrailingIconSrc(trailingIconType, success);
  const trailingIcon = trailingIconSrc ? (
    <img src={trailingIconSrc} alt="" aria-hidden="true" className="h-[22px] w-[22px]" />
  ) : undefined;
  const safeValue = value ?? "";

  return (
    <AuthFormField
      id={id}
      label={label}
      type={type}
      name={name}
      value={safeValue}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={inputRef}
      readOnly={readOnly}
      disabled={disabled}
      error={error}
      labelColor="#3D3D3D"
      containerClassName={wrapperClassName}
      labelClassName={labelClassName}
      inputBoxClassName={inputBoxClassName}
      labelInputGapClassName={labelInputGapClassName}
      placeholderClassName="placeholder:text-[#ADADAD]"
      fieldBackgroundColor={fieldBackgroundColor}
      fieldBorderColor={success ? "#6ACF76" : fieldBorderColor}
      trailingIcon={trailingIcon}
      trailingIconContainerClassName={trailingIconContainerClassName}
    />
  );
};

export default ProfileSingleField;

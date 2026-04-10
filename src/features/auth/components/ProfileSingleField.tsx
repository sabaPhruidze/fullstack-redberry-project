import AuthFormField from "./AuthFormField";
import PENCIL_SIMPLE_ICON from "../../../assets/icons/profile/Icon Set=PencilSimple.svg";
import CHECK_ICON from "../../../assets/icons/profile/Icon Set=Check.svg";
import ARROW_ICON from "../../../assets/icons/profile/arrow_down.svg";

type ProfileSingleFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  trailingIconType?: "pencil" | "check" | "arrow";
  wrapperClassName?: string;
  labelClassName?: string;
  inputBoxClassName?: string;
  labelInputGapClassName?: string;
  fieldBackgroundColor?: string;
  fieldBorderColor?: string;
  trailingIconContainerClassName?: string;
};

const ProfileSingleField = ({
  id,
  label,
  placeholder,
  trailingIconType,
  wrapperClassName = "h-[73px]",
  labelClassName = "w-full",
  inputBoxClassName = "",
  labelInputGapClassName = "mt-[5px]",
  fieldBackgroundColor = "#FFFFFF",
  fieldBorderColor = "#D1D1D1",
  trailingIconContainerClassName,
}: ProfileSingleFieldProps) => {
  const trailingIconSrc =
    trailingIconType === "pencil"
      ? PENCIL_SIMPLE_ICON
      : trailingIconType === "check"
        ? CHECK_ICON
        : trailingIconType === "arrow"
          ? ARROW_ICON
          : undefined;
  const trailingIcon = trailingIconSrc ? (
    <img
      src={trailingIconSrc}
      alt={trailingIconType}
      className="h-[22px] w-[22px]"
    />
  ) : undefined;

  return (
    <AuthFormField
      id={id}
      label={label}
      value=""
      placeholder={placeholder}
      labelColor="#3D3D3D"
      labelInputGapClassName={labelInputGapClassName}
      containerClassName={wrapperClassName}
      labelClassName={labelClassName}
      inputBoxClassName={inputBoxClassName}
      placeholderClassName="placeholder:text-[#ADADAD]"
      fieldBackgroundColor={fieldBackgroundColor}
      fieldBorderColor={fieldBorderColor}
      readOnly
      trailingIcon={trailingIcon}
      trailingIconContainerClassName={trailingIconContainerClassName}
    />
  );
};

export default ProfileSingleField;

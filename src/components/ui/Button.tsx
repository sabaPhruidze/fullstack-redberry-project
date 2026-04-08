interface ButtonProps {
  text: string;
  classname?: string;
}

const Button = ({ text, classname }: ButtonProps) => {
  const hasCustomPadding = !!classname?.match(/(^|\s)p[trblxy]?-[^\s]+/);
  const paddingClass = hasCustomPadding ? "" : "px-[25px] py-[17px]";

  return (
    <button
      className={`${paddingClass} bg-redberry-text-purple text-white rounded-[8px] font-[500] ${classname ?? ""}`}
    >
      {text}
    </button>
  );
};

export default Button;

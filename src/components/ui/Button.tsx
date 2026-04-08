interface ButtonProps {
  text: string;
  classname?: string;
}

const Button = ({ text, classname }: ButtonProps) => {
  return (
    <button
      className={`${classname} text-[20px] px-[25px] py-[17px] bg-redberry-text-purple text-white rounded-[8px] font-[500]`}
    >
      {text}
    </button>
  );
};

export default Button;

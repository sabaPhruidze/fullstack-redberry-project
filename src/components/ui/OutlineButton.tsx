interface OutlineButtonProps {
  text: string;
  classname?: string;
}

const OutlineButton = ({ text, classname }: OutlineButtonProps) => {
  return (
    <button
      className={`${classname} border-2 border-redberry-border-purple-light rounded-[8px] text-[20px] text-redberry-text-purple py-[12px] px-[16px] font-[500]`}
    >
      {text}
    </button>
  );
};

export default OutlineButton;

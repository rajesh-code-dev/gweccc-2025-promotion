type Props = {
  text?: string;
  className?: string;
  onClick: () => void;
};

const Button = ({ text, className, onClick }: Props) => {
  return (
    <button
      type="button"
      className={`bg-primary-color  text-[10px] font-bold  text-center  rounded-md  ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

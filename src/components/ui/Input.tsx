import React from "react";
import { cn } from "../../utils/twMerge";

type Props = {
  type?: any;
  placeholder?: string;
  className?: string;
  form1?: any;
  onChange?: any;
  value?: any;
};

const Input = React.forwardRef<HTMLInputElement, Props>(({
  type,
  placeholder,
  className,
  form1,
  onChange,
  value,
}, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      {...form1}
      onChange={onChange}
      value={value}
      className={cn(`outline-none w-full rounded-sm py-2 px-4`, className)}
    />
  );
});

Input.displayName = 'Input';
export default Input;

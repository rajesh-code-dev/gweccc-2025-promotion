import { ReactNode } from "react";
import { cn } from "../utils/twMerge";

type MaxWidthPropsType = {
  children: ReactNode;
  className: string;
};

const MaxWidthWrapper = ({ children, className }: MaxWidthPropsType) => {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
};

export default MaxWidthWrapper;

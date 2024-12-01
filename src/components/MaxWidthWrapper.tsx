import { ReactNode } from "react";
import { cn } from "../utils/twMerge";

type MaxWidthPropsType = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper = ({ className, children }: MaxWidthPropsType) => {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
};

export default MaxWidthWrapper;

import { cn } from "../../utils/twMerge";

const Backdrop = ({ closeHandler, className }: { closeHandler?: any, className?: any }) => {
  return (
    <div
      className={cn(`backdrop h-full w-full top-0 fixed z-20 bg-blue-300 mix-blend-color-dodge`, className)}
      onClick={closeHandler}
    ></div>
  );
};

export default Backdrop;

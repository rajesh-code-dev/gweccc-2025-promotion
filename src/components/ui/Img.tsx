const Img = ({
  img,
  className,
  onClick,
}: {
  img: any;
  className?: any;
  onClick?: () => void;
}) => {
  return <img src={img} alt="" onClick={onClick} className={className} />;
};

export default Img;

interface IProps {
  imageUrl: string;
  alt: string;
  className: string;
}

const Image = ({ imageUrl, className, alt }: IProps) => {
  return (
    <>
      <img src={imageUrl} alt={alt} className={className} />
    </>
  );
};

export default Image;

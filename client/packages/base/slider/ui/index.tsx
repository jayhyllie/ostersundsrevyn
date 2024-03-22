import "./style.scss";

export const SliderItem = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <>
      {image !== undefined && (
        <figure className={className}>
          <img
            src={`https://ostersundsrevyn-images.s3.eu-north-1.amazonaws.com/${image}`}
            alt={image}
            className="slider__item"
          />
        </figure>
      )}
    </>
  );
};

export const SliderItem = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  const imageUrl = import.meta.env.VITE_AWS_IMAGEBUCKET_URL;
  return (
    <>
      {image !== undefined && (
        <figure className={className}>
          <img
            src={`${imageUrl}${image}`}
            alt={image}
            className="slider__item"
          />
        </figure>
      )}
    </>
  );
};

import { SliderItem } from "@revyn/slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { usePosterData } from "../../data";

export const PosterSlider = () => {
  const { posterQuery, posterImages } = usePosterData();
  const settings = {
    children: SliderItem,
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <>
      {posterQuery.isLoading ? (
        <div>Loading...</div>
      ) : posterQuery.isError ? (
        <div>Error</div>
      ) : (
        <Slider {...settings}>
          {posterImages &&
            posterImages.map((image, index) => (
              <SliderItem key={image} image={posterImages[index + 1]} />
            ))}
        </Slider>
      )}
    </>
  );
};
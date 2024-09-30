import { SliderItem } from "@revyn/slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { usePosterData } from "../../data";
import { Spinner } from "@revyn/spinner";

export const PosterSlider = () => {
  const { posterQuery, posterImages } = usePosterData();
  const settings = {
    children: SliderItem,
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <section className="hero">
      {posterQuery.isLoading ? (
        <Spinner size={50} />
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
    </section>
  );
};

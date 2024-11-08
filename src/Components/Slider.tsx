import React, { useState } from "react";
import { ArrowLeft } from "../Icons/ArrowLeft";
import { ArrowRight } from "../Icons/ArrowRight";
import { BannerText, sliderImages } from "../Data";

function Slider(props: any) {
  const [slide, setSlide] = useState(0);
  //   const { data } = props;

  const next = () => {
    setSlide(slide === sliderImages.length - 1 ? 0 : slide + 1);
  };

  const previous = () => {
    setSlide(slide === 0 ? sliderImages.length - 1 : slide - 1);
  };

  return (
    <section className="carousel container">
      <div className="carousel-content ">
        {sliderImages.map((item: any, i: any) => {
          return (
            <div className="image-slider-content" key={i}>
              <img
                src={item.image}
                alt={item.alt}
                className={slide === i ? "slide" : "slide slide-hidden"}
              />
            </div>
          );
        })}

        <div className="carousel-arrow arrow">
          <div onClick={previous} className="arrow arrow-left">
            <ArrowLeft />
          </div>
          <div onClick={next} className="arrow arrow-right">
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;

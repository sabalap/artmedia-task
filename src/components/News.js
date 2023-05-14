import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import arrow from "../assets/button-arrow.svg";
import "swiper/css";
import "swiper/css/navigation";
import firstSliderImg from "../assets/slider1-img.png";
import secondSliderImg from "../assets/slider2-img.png";
import thirdSliderImg from "../assets/slider3-img.png";
import fourthSliderImg from "../assets/slider4-img.png";

import prevArrow from "../assets/prev-arrow.svg";
import nextArrow from "../assets/next-arrow.svg";
const News = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);
  const breakpoints = {
    300: {
      spaceBetween: 100,
    },
    768: {
      spaceBetween: -240,
    },
    868: {
      spaceBetween: -400,
    },
    968: {
      spaceBetween: -500,
    },
    1068: {
      spaceBetween: -600,
    },
    1168: {
      spaceBetween: -700,
    },
    1268: {
      spaceBetween: -800,
    },
    1368: {
      spaceBetween: -880,
    },
    1440: {
      spaceBetween: -650,
    },
    1533: {
      spaceBetween: -770,
    },
    1630: {
      spaceBetween: -870,
    },
    1730: {
      spaceBetween: -970,
    },
    1830: {
      spaceBetween: -1100,
    },
    1910: {
      spaceBetween: -1180,
    },
  };

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };
  const contents = [
    {
      image: firstSliderImg,
      text: "There are many variations of passages",
      date: "22 April 2023",
    },
    {
      image: secondSliderImg,
      text: "The point of using Lorem Ipsum",
      date: "20 April 2023",
    },
    {
      image: thirdSliderImg,
      text: "I must explain to you how all this mistaken idea",
      date: "19 April 2023",
    },
    {
      image: fourthSliderImg,
      text: "On the other hand, we denounce with righteous indignation",
      date: "15 April 2023",
    },
  ];
  return (
    <section className="news-section">
      <div className="news-section-content">
        <h1>News</h1>
        <div className="arrows-container">
          <button
            className={`prev-button ${
              activeSlideIndex === 0 ? "disable" : "active"
            }`}
          >
            <img src={prevArrow} alt="previous arrow" />
          </button>
          <button
            className={`next-button ${
              activeSlideIndex === 3 ? "disable" : "active"
            }`}
          >
            <img src={nextArrow} alt="next arrow" />
          </button>
        </div>
      </div>
      <div className="slider-container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={-1200}
          slidesPerView={1}
          breakpoints={breakpoints}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          onSlideChange={handleSlideChange}
          className="slider-wrapper"
        >
          {contents.map((content, index) => {
            return (
              <SwiperSlide className="slide-container" key={index}>
                <div className="content-container">
                  <img
                    className="slider-img"
                    src={content.image}
                    alt={`slide ${index}`}
                  />
                  <div className="slide">
                    <div
                      className={`${
                        index === contents.length - 1
                          ? "slide-container last-slide"
                          : "slide-container"
                      }`}
                    >
                      <h1 className="slide-title">{content.text}</h1>
                      <p className="">{content.date}</p>
                      <button>See more</button>
                    </div>
                  </div>
                </div>
                {activeSlideIndex === index ? (
                  <div className="active-slide" />
                ) : (
                  ""
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default News;
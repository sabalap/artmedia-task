import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import classes from "./News.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import firstSliderImg from "../../assets/slider1-img.png";
import secondSliderImg from "../../assets/slider2-img.png";
import thirdSliderImg from "../../assets/slider3-img.png";
import fourthSliderImg from "../../assets/slider4-img.png";
import nextArrow from "../../assets/next-arrow.svg";

const News = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperSlideRef = useRef(null);
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

  const slides = [
    {
      image: firstSliderImg,
      title: "There are many variations of passages",
      date: "22 April 2023",
    },
    {
      image: secondSliderImg,
      title: "The point of using Lorem Ipsum",
      date: "20 April 2023",
    },
    {
      image: thirdSliderImg,
      title: "I must explain to you how all this mistaken idea",
      date: "19 April 2023",
    },
    {
      image: fourthSliderImg,
      title: "On the other hand, we denounce with righteous indignation",
      date: "15 April 2023",
    },
  ];

  const activeSlideHandler = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <section className={classes["news-section"]} data-aos={props.anim}>
      <div className={classes["news-section-content"]}>
        <div className={classes["news-header-container"]}>
          <h1>News</h1>
          <div className={classes["arrows-container"]}>
            <button
              className={`prev-button ${
                activeSlideIndex === 0 ? classes.disable : classes.active
              }`}
            >
              <img src={nextArrow} alt="previous arrow" />
            </button>
            <button
              className={`next-button ${
                activeSlideIndex === 3 ? classes.disable : classes.active
              }`}
            >
              <img src={nextArrow} alt="next arrow" />
            </button>
          </div>
        </div>
        <div className={classes["slider-container"]}>
          <Swiper
            className={classes["slider-wrapper"]}
            ref={swiperSlideRef}
            slidesPerView={1}
            spaceBetween={-1200}
            breakpoints={breakpoints}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            onSlideChange={activeSlideHandler}
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide className={classes["slide-container"]} key={index}>
                  <div className={classes["content-container"]}>
                    <img
                      className={classes["slider-img"]}
                      src={slide.image}
                      alt={`slide ${index}`}
                    />
                    <div className={classes["slide-linear"]}></div>
                    <div className={classes.slide}>
                      <div
                        className={`${classes["slide-container"]} ${
                          index === slides.length - 1
                            ? classes["last-slide"]
                            : ""
                        }`}
                      >
                        <h1 className={classes["slide-title"]}>
                          {slide.title}
                        </h1>
                        <p className="">{slide.date}</p>
                        <button>See more</button>
                      </div>
                    </div>
                  </div>
                  {activeSlideIndex === index ? (
                    <div className={classes["active-slide"]} />
                  ) : (
                    ""
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default News;

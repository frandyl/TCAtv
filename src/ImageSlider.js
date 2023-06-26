import { useCallback, useEffect, useRef, useState } from "react";
import "./bullets.css";
import leftarrow from "./leftarrow.png";
import rightarrow from "./rightarrow.png";

const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "opacity 0.55s ease-in",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  top: "50%",
  transform: "translate(0, -140%)",
  zIndex: 3,
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  zIndex: 3,
  backgroundColor: "#000000",
};

const activeDotStyle = {
  ...dotStyle,
  backgroundColor: "#00ff2a",
  transform: "translate(0, -300%)",
};

const inactiveDotStyle = {
  ...dotStyle,
  backgroundColor: "#808080", // Color for the inactive slide's bullets
  transform: "translate(0, -300%)",
};

const ImageSlider = ({ slides }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          <img src={leftarrow} />
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          <img src={rightarrow} />
        </div>
      </div>

      <div style={slideStylesWidthBackground}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100px",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
            zIndex: 0,
          }}
        ></div>
        <h1
          class="font-regular text-5xl "
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            color: slides[currentIndex].textColor,
            zIndex: 2,
            opacity: 1,
            transition: "opacity 0.5s ease in",
          }}
        >
          {slides[currentIndex].title}
        </h1>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={
              slideIndex === currentIndex ? activeDotStyle : inactiveDotStyle
            }
            className={slideIndex === currentIndex ? "bullet-active" : "bullet"}
            key={slideIndex === currentIndex ? activeDotStyle : dotStyle}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useState, useEffect, useRef } from "react";
import "./vidcar.css";
import leftarrow from "./wlw.png";
import rightarrow from "./rwr.png";
import YouTube from "react-youtube";

const Vidcar = () => {
  const videos = [
    "ykT8h0VoSpY",
    "cD1Zi0git50",
    "IcFO6GsMR3A",
    "zVXgYVbP7m0",
    // Add more video IDs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const sliderTimeoutRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const handlePrevious = () => {
    setIsSliderPaused(true);
    const newIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(newIndex);
    clearTimeout(sliderTimeoutRef.current);
    clearTimeout(pauseTimeoutRef.current);
    sliderTimeoutRef.current = setTimeout(() => {
      setIsSliderPaused(false);
      handleNext();
    }, 3000); // Adjust the delay time (in milliseconds) before resuming the slider
  };

  const handleNext = () => {
    setIsSliderPaused(true);
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
    clearTimeout(sliderTimeoutRef.current);
    clearTimeout(pauseTimeoutRef.current);
    sliderTimeoutRef.current = setTimeout(() => {
      setIsSliderPaused(false);
      handleNext();
    }, 3000); // Adjust the delay time (in milliseconds) before resuming the slider
  };

  const handleSliderPause = () => {
    setIsSliderPaused(true);
    clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsSliderPaused(false);
    }, 3000); // Adjust the delay time (in milliseconds) before resuming the slider
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSliderPaused) {
        handleNext();
      }
    }, 5000); // Adjust the interval duration as desired (in milliseconds)

    return () => {
      clearInterval(interval);
      clearTimeout(sliderTimeoutRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, [currentIndex, isSliderPaused]);

  const opts = {
    height: "350px",
    width: "100%",
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${(currentIndex * 100) / videos.length}%)`,
          width: `${videos.length * 100}%`,
        }}
      >
        {videos.map((videoId, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <YouTube
              videoId={videoId}
              opts={opts}
              className="youtube-player"
              onStateChange={handleSliderPause}
            />
          </div>
        ))}
      </div>
      <button className="previous-button" onClick={handlePrevious}>
        <img src={leftarrow} alt="Previous" />
      </button>
      <button className="next-button" onClick={handleNext}>
        <img src={rightarrow} alt="Next" />
      </button>
    </div>
  );
};

export default Vidcar;

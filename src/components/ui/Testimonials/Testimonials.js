import { Fragment, useState, useEffect } from "react";

import TestimonialCard from "./TestimonialCard";

const Testimonials = ({ data = [] }) => {
  const stopSliderAtWidth = data.length * (320 + 16);
  const isSliderStoppedInitially = window.innerWidth > stopSliderAtWidth;

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isSliderStopped, setIsSliderStopped] = useState(
    isSliderStoppedInitially
  );

  const handleUpdateActiveItem = (newIndex) => {
    setActiveItemIndex(newIndex);
  };

  // Setting the slider auto cycle
  useEffect(() => {
    if (isSliderStopped) return;

    const interval = setInterval(() => {
      setActiveItemIndex((prev) => {
        let nextIndex = prev + 1;
        if (nextIndex >= data.length) nextIndex = 0;
        return nextIndex;
      });
    }, 3000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSliderStopped, data.length]);

  // Watching the window resize and stopping the slider when testimonials width is less than window width, otherwise start the slider
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > stopSliderAtWidth) {
        setIsSliderStopped(true);
      } else {
        setIsSliderStopped(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [stopSliderAtWidth]);

  return (
    <Fragment>
      <div
        className={`Testimonials ${
          isSliderStopped ? "" : "Testimonials--slider-active"
        }`}
      >
        <div
          className="Testimonials__container"
          style={{
            transform: `translateX(calc(-${activeItemIndex * 100}% - 0.6rem)`,
          }}
        >
          {data.map((item, index) => (
            <TestimonialCard
              key={index}
              author={item.author}
              authorDetails={item.authorDetails}
              rating={item.rating}
              imgSrc={item.imgSrc}
              testimonial={item.testimonial}
            />
          ))}
        </div>
        {!isSliderStopped && (
          <div className="Testimonials__indicators">
            {data.map((item, index) => (
              <div
                key={index}
                className={`Testimonials__indicator ${
                  index === activeItemIndex
                    ? "Testimonials__indicator--active"
                    : ""
                }`}
                onClick={handleUpdateActiveItem.bind(null, index)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Testimonials;

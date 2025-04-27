import { useRef } from "react";
import { ANGLE_PER_DOT, RADIUS, TARGET_ANGLE, NUM_DOTS } from "../consts";
import { useDateSliderAnimation } from "../hooks/useDateSliderAnimation";
import { historyNames } from "../data/events";

interface DateSliderProps {
  numDots: number;
  currentDate: number[];
  currentIndex: number;
  onChange: (index: number) => void;
}

const DateSlider = ({
  numDots,
  currentDate,
  currentIndex,
  onChange,
}: DateSliderProps) => {
  const initialRotation = TARGET_ANGLE - (currentIndex - 1) * ANGLE_PER_DOT;
  const circleRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);

  const handleDotClick = (index: number) => {
    if (index < 1 || index > numDots || index === currentIndex) return;
    onChange(index);
  };

  useDateSliderAnimation(
    circleRef,
    startRef,
    endRef,
    currentDate,
    currentIndex,
  );

  return (
    <div className="history-slider__date-slider">
      <div ref={circleRef} className="history-slider__circle-with-dots">
        <div className="history-slider__circle" />
        {[...Array(numDots)].map((_, i) => {
          const angle = (i * 360) / numDots;
          const x = RADIUS * Math.cos((angle * Math.PI) / 180);
          const y = RADIUS * Math.sin((angle * Math.PI) / 180);
          const isActive = i + 1 === currentIndex;

          return (
            <button
              key={i}
              onClick={() => handleDotClick(i + 1)}
              className={`history-slider__dot ${isActive ? "history-slider__dot--active" : ""}`}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div
                style={{
                  transform: `rotate(${-initialRotation}deg)`,
                }}
                className="history-slider__dot-inner"
              >
                <span>{i + 1}</span>
                <p>{historyNames[i]}</p>
              </div>
            </button>
          );
        })}
      </div>

      <h3 className="history-slider__date-slider-title">
        <span ref={startRef} className="history-slider__title-start">
          {currentDate[0]}
        </span>
        <span ref={endRef} className="history-slider__title-end">
          {currentDate[1]}
        </span>
      </h3>

      <div className="history-slider__date-slider-navigation">
        <span className="history-slider__date-slider-navigation-current">
          0{currentIndex}/0{numDots}
        </span>
        <div className="history-slider__date-slider-navigation-buttons">
          <button
            onClick={() => handleDotClick(currentIndex - 1)}
            className="history-slider-btn history-slider__date-slider-navigation-buttons--prev"
          >
            ‹
          </button>
          <button
            onClick={() => handleDotClick(currentIndex + 1)}
            disabled={currentIndex === NUM_DOTS}
            className="history-slider-btn history-slider__date-slider-navigation-buttons--next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSlider;

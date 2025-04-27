import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/HistorySlider.scss";
import EventsSlider from "./components/EventsSlider";
import DateSlider from "./components/DateSlider";
import useHistorySlider from "./hooks/useHistorySlider";

const HistorySlider: React.FC = () => {
  const { filteredEvents, ...props } = useHistorySlider();
  return (
    <section className="history-slider">
      <h2 className="history-slider__title">
        Исторические <br /> даты
      </h2>
      <DateSlider {...props} />
      <EventsSlider events={filteredEvents} />
    </section>
  );
};

export default HistorySlider;

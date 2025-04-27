import { HistoryEvent } from "../types";

const EventSlide = ({ event }: { event: HistoryEvent }) => {
  return (
    <div className="history-slider__event-slide">
      <h4 className="history-slider__event-slide-year">{event.year}</h4>
      <p className="history-slider__event-slide-description">
        {event.description}
      </p>
    </div>
  );
};

export default EventSlide;

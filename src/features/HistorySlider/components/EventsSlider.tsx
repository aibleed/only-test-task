import gsap from "gsap";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import EventSlide from "./EventSlide";
import { HistoryEvent } from "../types";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

const EventsSlider = ({ events }: { events: HistoryEvent[] }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useGSAP(
    () => {
      if (!parentRef.current) return;
      gsap.fromTo(
        parentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.inOut" },
      );
    },
    { dependencies: [events], scope: parentRef },
  );

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, [events]);

  return (
    <>
      <div ref={parentRef} className="history-slider__events-slider">
        <button
          className={`history-slider-btn history-slider__events-slider-btn--prev ${
            isBeginning ? "history-slider-btn--disabled" : ""
          }`}
        >
          ‹
        </button>
        <button
          className={`history-slider-btn history-slider__events-slider-btn--next ${
            isEnd ? "history-slider-btn--disabled" : ""
          }`}
        >
          ›
        </button>

        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          spaceBetween={80}
          pagination={{
            clickable: true,
            el: ".history-slider__events-slider-pagination",
            bulletClass: "history-slider__events-slider-pagination-bullet",
            bulletActiveClass:
              "history-slider__events-slider-pagination-bullet--active",
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
          slidesPerView={3}
          navigation={{
            nextEl: ".history-slider__events-slider-btn--next",
            prevEl: ".history-slider__events-slider-btn--prev",
          }}
          grabCursor
          freeMode={true}
          className="history-slider__events-slider-swiper"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventSlide event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="history-slider__events-slider-pagination"></div>
    </>
  );
};

export default EventsSlider;

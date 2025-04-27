import { useRef } from "react";
import gsap from "gsap";
import { ANGLE_PER_DOT, TARGET_ANGLE } from "../consts";
import { useGSAP } from "@gsap/react";

export function useDateSliderAnimation(
  circleRef: React.RefObject<HTMLDivElement | null>,
  startRef: React.RefObject<HTMLSpanElement | null>,
  endRef: React.RefObject<HTMLSpanElement | null>,
  currentDate: number[],
  currentIndex: number,
) {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const prevDate = useRef<number[]>(currentDate);

  useGSAP(() => {
    const newRotation = TARGET_ANGLE - (currentIndex - 1) * ANGLE_PER_DOT;

    if (tl.current) {
      tl.current.kill();
    }
    tl.current = gsap.timeline();

    tl.current
      .to(
        circleRef.current,
        {
          rotation: newRotation,
          duration: 1,
          ease: "power2.out",
        },
        0,
      )
      .set(
        ".history-slider__dot p",
        {
          display: "none",
          opacity: 0,
        },
        0,
      )
      .to(
        ".history-slider__dot--active p",
        {
          display: "block",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2",
      );

    const startElem = startRef.current;
    const endElem = endRef.current;

    if (startElem && endElem) {
      const startObj = { value: prevDate.current[0] };
      const endObj = { value: prevDate.current[1] };

      tl.current.to(
        startObj,
        {
          value: currentDate[0],
          duration: 0.4,
          ease: "power2.out",
          onUpdate: () => {
            startElem.textContent = Math.floor(startObj.value).toString();
          },
        },
        0,
      );

      tl.current.to(
        endObj,
        {
          value: currentDate[1],
          duration: 0.4,
          ease: "power2.out",
          onUpdate: () => {
            endElem.textContent = Math.floor(endObj.value).toString();
          },
        },
        0,
      );
    }

    prevDate.current = currentDate;
  }, [currentIndex, currentDate]);
}

import { useCallback, useMemo, useState } from "react";
import { historyDates, historyEvents } from "../data/events";
import { NUM_DOTS } from "../consts";

const useHistorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const currentDate = useMemo(
    () => historyDates[currentIndex - 1] ?? historyDates[currentIndex],
    [historyDates, currentIndex],
  );

  const filteredEvents = useMemo(() => {
    const [fromYear, toYear] = currentDate;
    return historyEvents
      .filter(({ year }) => {
        return year >= fromYear && year <= toYear;
      })
      .sort((a, b) => a.year - b.year);
  }, [currentDate]);

  const onChange = useCallback((index: number) => {
    if (index >= 1 && index <= NUM_DOTS) {
      setCurrentIndex((_) => index);
    }
  }, []);

  return {
    numDots: NUM_DOTS,
    currentDate,
    currentIndex,
    onChange,
    filteredEvents,
  };
};

export default useHistorySlider;

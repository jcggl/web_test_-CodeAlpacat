import React, { useState, useEffect, useCallback } from "react";
import { useRef } from "react";
import useResize from "./useResize";

const useScrollPagination = () => {
  const ref = useRef<any>();
  const [touch, setTouch] = useState<number | null>(null);
  const { height: pageHeight } = useResize();
  const [throttle, setThrottle] = useState<boolean>(false);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLInputElement>): void => {
      const currentTouch = e.touches[0].clientY;
      setTouch(currentTouch);
    },
    []
  );

  const touchScrollHandler = useCallback(
    (e: React.TouchEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const touchDown: number | null = touch;
      const { scrollTop } = ref.current;
      if (touchDown === null) return;
      if (throttle) return;

      const currentTouch = e.touches[0].clientY;
      const touchDirection = touchDown - currentTouch;
      if (touchDirection > 4) {
        //아래로 스크롤;
        ref.current.scrollTo({
          top: pageHeight * (Math.floor(scrollTop / pageHeight) + 1),
          behavior: "smooth",
        });
      } else if (touchDirection < -4) {
        //위로 스크롤
        if (parseFloat((scrollTop / pageHeight).toFixed(1)) > 4) {
          ref.current.scrollTo({
            top: pageHeight * 4,
            behavior: "smooth",
          });
        } else {
          ref.current.scrollTo({
            top: pageHeight * (Math.floor(scrollTop / pageHeight) - 1),
            behavior: "smooth",
          });
        }
      }
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, 1500);

      setTouch(null);
    },
    [touch, throttle, pageHeight]
  );

  const wheelHandler = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const { scrollTop } = ref.current;
      const scrollDown: boolean = e.deltaY > 0;
      const scrollUp: boolean = e.deltaY <= 0;

      if (throttle) return;
      if (!throttle) {
        if (scrollDown) {
          //아래로 스크롤;
          ref.current.scrollTo({
            top: pageHeight * (Math.floor(scrollTop / pageHeight) + 1),
            behavior: "smooth",
          });
        } else if (scrollUp) {
          //위로 스크롤
          if (parseFloat((scrollTop / pageHeight).toFixed(1)) > 4) {
            ref.current.scrollTo({
              top: pageHeight * 4,
              behavior: "smooth",
            });
          } else {
            ref.current.scrollTo({
              top: pageHeight * (Math.floor(scrollTop / pageHeight) - 1),
              behavior: "smooth",
            });
          }
        }
        setThrottle(true);
      }

      setTimeout(() => {
        setThrottle(false);
      }, 1500);
    },
    [pageHeight, throttle]
  );

  useEffect(() => {
    const refCurrent = ref.current;
    refCurrent.addEventListener("wheel", wheelHandler);
    refCurrent.addEventListener("touchstart", handleTouchStart);
    refCurrent.addEventListener("touchmove", touchScrollHandler);

    return () => {
      refCurrent.removeEventListener("wheel", wheelHandler);
      refCurrent.removeEventListener("touchstart", handleTouchStart);
      refCurrent.removeEventListener("touchmove", touchScrollHandler);
    };
  }, [
    throttle,
    pageHeight,
    wheelHandler,
    handleTouchStart,
    touchScrollHandler,
  ]);

  return { ref };
};

export default useScrollPagination;

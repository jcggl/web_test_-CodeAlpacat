import gsap from "gsap";
import React, { useState, useEffect, useCallback } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { useRef } from "react";
import useResize from "./useResize";
import { useLocation } from "react-router-dom";
interface positionStyleType {
  transform: string;
  transition: string;
  OverflowY: string;
}

const useScrollPagination = () => {
  const ref = useRef<any>();
  const [touch, setTouch] = useState<number | null>(null);
  const { height: pageHeight } = useResize();
  const [throttle, setThrottle] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [isFooter, setIsFooter] = useState<boolean>(false);

  const [style, setStyle] = useState<positionStyleType>({
    transform: `translateY(0px)`,
    transition: "all 0.7s ease-in-out",
    OverflowY: "hidden"
  });

  useEffect(() => {
    setTimeout(() => {
      setThrottle(false);
    }, 1010);
  }, []);

  useEffect(() => {
    setStyle((prev) => ({ ...prev, transform: `translateY(${page}px)` }));
  }, [page]);

  const movePage = useCallback((index: number): void => {
    if (throttle) return
    setPage((prev) => prev + index);
    setThrottle(true);
    setTimeout(() => {
      setThrottle(false);
    }, 1510);
    setTouch(null);
  }, [throttle]);

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
      e.stopPropagation();
      const touchDown: number | null = touch;
      const footerHeight = ref.current.children[5].clientHeight;
      const { scrollTop } = ref.current;
      if (touchDown === null) return;
      if (throttle) return;
      const currentTouch = e.touches[0].clientY;
      const touchDirection = touchDown - currentTouch;
      if (touchDirection > 4) {
        //아래로 스크롤;
        if (page <= 0 && page > -pageHeight * 4) {
          movePage(-pageHeight);
        } else if (page === -pageHeight * 4 && !isFooter) {
          movePage(-footerHeight);
          setIsFooter(true);
        }
      } else if (touchDirection < -4) {
        //위로 스크롤
        if (page < -pageHeight * 4 && isFooter) {
          movePage(footerHeight);
          setIsFooter(false);
        } else if (page < 0) {
          movePage(pageHeight);
        }
      }
    },
    [touch, isFooter, page, pageHeight, throttle, movePage]
  );

  const wheelHandler = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      e.stopPropagation()
      // const pageHeight = ref.current.clientHeight;
      const scrollDown: boolean = e.deltaY > 0;
      const scrollUp: boolean = e.deltaY <= 0;
      const footerHeight = ref.current.children[5].clientHeight;

      if (throttle) return;
      if (!throttle) {
        if (scrollDown) {
          //아래로 스크롤;
          if (page <= 0 && page > -pageHeight * 4) {
            movePage(-pageHeight);
          } else if (page === -pageHeight * 4 && !isFooter) {
            movePage(-footerHeight);
            setIsFooter(true);
          }
        } else if (scrollUp) {
          //위로 스크롤
          if (page < -pageHeight * 4 && isFooter) {
            movePage(footerHeight);
            setIsFooter(false);
          } else if (page < 0) {
            movePage(pageHeight);
          }
        }
      }
    },
    [throttle, page, isFooter, pageHeight, movePage]
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

  return { ref, style };
};

export default useScrollPagination;

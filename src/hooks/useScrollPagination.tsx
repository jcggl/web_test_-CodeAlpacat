import React, { useState, useEffect, useCallback } from "react";
import { useRef } from "react";
import useResize from "./useResize";
import { useLocation } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
interface positionStyleType {
  transform: string;
  transition: string;
  OverflowY?: string;
}

const useScrollPagination = () => {
  const ref = useRef<any>();
  const [touch, setTouch] = useState<number | null>(null);
  const { height: pageHeight } = useResize();
  const [throttle, setThrottle] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [timer, setTimer] = useState<any>([]);
  const location = useLocation();
  const [prevPage, setPrevPage] = useState<number>(0);
  const [style, setStyle] = useState<positionStyleType>({
    transform: `translateY(0px)`,
    transition: "all 0.7s ease-in-out",
  });

  const resizeHandler = useCallback(() => {
    const pageHeight = window.innerHeight;
    const fullHeight = -(pageHeight * 4 + ref.current.children[5].clientHeight);
    const newTimer = timer;
    timer.forEach((item: any) => {
      clearTimeout(item);
    });
    setTimer([]);
    if (page < -pageHeight * 4) {
      setPrevPage(fullHeight);
      console.log(page);
    } else if (page < -pageHeight * 3 && page >= -pageHeight * 4) {
      setPrevPage(-pageHeight * 4);
    } else if (page < -pageHeight * 2 && page >= -pageHeight * 3) {
      setPrevPage(-pageHeight * 3);
    } else if (page < -pageHeight && page >= -pageHeight * 2) {
      setPrevPage(-pageHeight * 2);
    } else if (page < 0 && page >= -pageHeight) {
      setPrevPage(-pageHeight);
    } else if (page >= 0) {
      setPrevPage(0);
    }

    let t = setTimeout(() => {
      setPage(prevPage);
    }, 210);
    setTimer([...newTimer, t]);
  }, [page, prevPage, timer]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  useEffect(() => {
    smoothscroll.polyfill();
    setPage(0);
    setStyle(() => {
      return {
        transform: `translateY(0px)`,
        transition: "all 0.7s ease-in-out",
      };
    });
    setTimeout(() => {
      setThrottle(false);
    }, 1110);
  }, [location]);

  useEffect(() => {
    setStyle((prev) => ({ ...prev, transform: `translateY(${page}px)` }));
  }, [page]);

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
      if (touchDown === null) return;
      if (throttle) return;

      if (window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      setTouch(null);
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, 1110);

      const fullHeight = -(
        pageHeight * 4 +
        ref.current.children[5].clientHeight
      );

      const currentTouch = e.touches[0].clientY;
      const touchDirection = touchDown - currentTouch;
      if (!throttle && touchDown) {
        if (touchDirection > 4) {
          //아래로 스크롤;

          if (page < -pageHeight * 4) {
            setThrottle(false);
          }

          // if (page <= 0 && page > -pageHeight * 4) {
          //   setPage(minusScroll);
          // } else if (page === -pageHeight * 4 && !isFooter) {
          //   setPage(footerMinus);
          //   setIsFooter(true);
          // } else {
          //   setPage(fullHeight);
          // }
          if (page < -pageHeight * 4) {
            setPage(fullHeight);
          } else if (page < -pageHeight * 3 && page >= -pageHeight * 4) {
            setPage(fullHeight);
          } else if (page < -pageHeight * 2 && page >= -pageHeight * 3) {
            setPage(-pageHeight * 4);
          } else if (page < -pageHeight && page >= -pageHeight * 2) {
            setPage(-pageHeight * 3);
          } else if (page < 0 && page >= -pageHeight) {
            setPage(-pageHeight * 2);
          } else if (page >= 0) {
            setPage(-pageHeight);
          }
        } else if (touchDirection < -4) {
          //위로 스크롤

          if (page === 0) {
            setThrottle(false);
          }

          if (page < -pageHeight * 4) {
            setPage(-pageHeight * 4);
          } else if (page < -pageHeight * 3 && page >= -pageHeight * 4) {
            setPage(-pageHeight * 3);
          } else if (page < -pageHeight * 2 && page >= -pageHeight * 3) {
            setPage(-pageHeight * 2);
          } else if (page < -pageHeight && page >= -pageHeight * 2) {
            setPage(-pageHeight);
          } else if (page < 0 && page >= -pageHeight) {
            setPage(0);
          } else if (page >= 0) {
            setPage(0);
          }

          // if (isFooter) {
          //   setPage(footerPlus);
          //   setIsFooter(false);
          // } else if (page < 0) {
          //   // movePage(pageHeight);
          //   setPage(plusScroll);
          // } else {
          //   setPage(0);
          // }
        }
      }
    },
    [page, pageHeight, throttle, touch]
  );

  const wheelHandler = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const scrollDown: boolean = e.deltaY > 0;
      const scrollUp: boolean = e.deltaY <= 0;
      const copyThrottle = throttle;
      const newTimer = timer;
      const fullHeight = -(
        pageHeight * 4 +
        ref.current.children[5].clientHeight
      );

      if (copyThrottle) return;

      if (window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      timer.forEach((item: any) => {
        clearTimeout(item);
      });
      setTimer([]);
      setThrottle(true);
      let t = setTimeout(() => {
        setThrottle(false);
      }, 1410);
      setTimer([...newTimer, t]);

      if (!copyThrottle) {
        if (scrollDown) {
          //아래로 스크롤;

          if (page < -pageHeight * 4) {
            setThrottle(false);
          }

          // if (page <= 0 && page > -pageHeight * 4) {
          //   setPage(minusScroll);
          // } else if (page === -pageHeight * 4 && !isFooter) {
          //   setPage(footerMinus);
          //   setIsFooter(true);
          // } else {
          //   setPage(fullHeight);
          // }
          if (page < -pageHeight * 4) {
            setPage(fullHeight);
          } else if (page < -pageHeight * 3 && page >= -pageHeight * 4) {
            setPage(fullHeight);
          } else if (page < -pageHeight * 2 && page >= -pageHeight * 3) {
            setPage(-pageHeight * 4);
          } else if (page < -pageHeight && page >= -pageHeight * 2) {
            setPage(-pageHeight * 3);
          } else if (page < 0 && page >= -pageHeight) {
            setPage(-pageHeight * 2);
          } else if (page >= 0) {
            setPage(-pageHeight);
          }
        } else if (scrollUp) {
          if (page === 0) {
            setThrottle(false);
          }

          // if (isFooter) {
          //   setPage(footerPlus);
          //   setIsFooter(false);
          // } else if (page < 0) {
          //   setPage(plusScroll);
          // } else {
          //   setPage(0);
          // }
          if (page < -pageHeight * 4) {
            setPage(-pageHeight * 4);
          } else if (page < -pageHeight * 3 && page >= -pageHeight * 4) {
            setPage(-pageHeight * 3);
          } else if (page < -pageHeight * 2 && page >= -pageHeight * 3) {
            setPage(-pageHeight * 2);
          } else if (page < -pageHeight && page >= -pageHeight * 2) {
            setPage(-pageHeight);
          } else if (page < 0 && page >= -pageHeight) {
            setPage(0);
          } else if (page >= 0) {
            setPage(0);
          }
        }
      }
    },
    [page, pageHeight, throttle, timer]
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
  }, [wheelHandler, touchScrollHandler, handleTouchStart]);

  return { ref, style };
};

export default useScrollPagination;

import gsap from "gsap";
import React, { useState, useEffect, useCallback } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { useRef } from "react";
import useResize from "./useResize";

const useScrollPagination = () => {
  const ref = useRef<any>();
  const [touch, setTouch] = useState<number | null>(null);
  const { height: pageHeight } = useResize();
  const [throttle, setThrottle] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [isFooter, setIsFooter] = useState<boolean>(false);

  useEffect(() => {
    smoothscroll.polyfill();
    setTimeout(() => {
      setThrottle(false);
    }, 1010);
    ref.current.children[0].style.transform = "translateY(0px)";
  }, []);

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
      const pageHeight = ref.current.clientHeight;
      const touchDown: number | null = touch;
      const { scrollTop } = ref.current;
      if (touchDown === null) return;
      if (throttle) return;
      const currentTouch = e.touches[0].clientY;
      const touchDirection = touchDown - currentTouch;
      if (touchDirection > 3) {
        //아래로 스크롤;
        if (page < 4) {
          if (
            ref.current.children[0].style.transform ===
            `translateY(${-pageHeight * page}px)`
          ) {
            gsap.to(ref.current.children[0].style, {
              transform: `translateY(${-pageHeight * (page + 1)}px)`,
              duration: 0.7,
              ease: "power1.inOut",
            });
            setPage((prev) => prev + 1);
          } else {
            gsap.to(ref.current.children[0].style, {
              transform: `translateY(${-pageHeight * (page)}px)`,
              duration: 0.7,
              ease: "power1.inOut",
            });
          }
        } else if (page === 4 && !isFooter) {
          const footerHeight = ref.current.children[0].children[5].clientHeight;
          gsap.to(ref.current.children[0].style, {
            transform: `translateY(${-(pageHeight * page + footerHeight)}px)`,
            duration: 0.4,
            ease: "power1.inOut",
          });
          setIsFooter(true);
        }
      } else if (touchDirection < -3) {
        //위로 스크롤
        if (page === 4 && isFooter) {
          gsap.to(ref.current.children[0].style, {
            transform: `translateY(${-pageHeight * page}px)`,
            duration: 0.4,
            ease: "power1.inOut",
          });
          setIsFooter(false);
        } else if (page > 0) {
          if (
            ref.current.children[0].style.transform ===
            `translateY(${-pageHeight * (page)}px)`
          ) {
            gsap.to(ref.current.children[0].style, {
              transform: `translateY(${-pageHeight * (page - 1)}px)`,
              duration: 0.7,
              ease: "power1.inOut",
            });
            setPage((prev) => prev - 1);
          } else {
            gsap.to(ref.current.children[0].style, {
              transform: `translateY(${-pageHeight * (page)}px)`,
              duration: 0.7,
              ease: "power1.inOut",
            });
          }
        }
      }
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
      }, 1510);

      setTouch(null);
    },
    [touch, throttle, isFooter, page]
  );

  const wheelHandler = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const pageHeight = ref.current.clientHeight;
      const scrollDown: boolean = e.deltaY > 0;
      const scrollUp: boolean = e.deltaY <= 0;

      if (throttle) return;
      if (!throttle) {
        if (scrollDown) {
          //아래로 스크롤;
          if (page < 4) {
            
            if (
              ref.current.children[0].style.transform ===
              `translateY(${-pageHeight * page}px)`
            ) {
              gsap.to(ref.current.children[0].style, {
                transform: `translateY(${-pageHeight * (page + 1)}px)`,
                duration: 0.7,
                ease: "power1.inOut",
              });
              setPage((prev) => prev + 1);
            } else {
              gsap.to(ref.current.children[0].style, {
                transform: `translateY(${-pageHeight * page}px)`,
                duration: 0.7,
                ease: "power1.inOut",
              });
            }
          } else if (page === 4 && !isFooter) {
            const footerHeight =
              ref.current.children[0].children[5].clientHeight;
            gsap.to(ref.current.children[0].style, {
              transform: `translateY(${-(pageHeight * page + footerHeight)}px)`,
              duration: 0.4,
              ease: "power1.inOut",
            });
            setIsFooter(true);
          }
        } else if (scrollUp) {
          //위로 스크롤
          if (page === 4 && isFooter) {
            gsap.to(ref.current.children[0].style, {
              transform: `translateY(${-pageHeight * page}px)`,
              duration: 0.4,
              ease: "power1.inOut",
            });
            setIsFooter(false);
          } else if (page > 0) {
            if (
              ref.current.children[0].style.transform ===
              `translateY(${-pageHeight * page}px)`
            ) {
              gsap.to(ref.current.children[0].style, {
                transform: `translateY(${-pageHeight * (page - 1)}px)`,
                duration: 0.7,
                ease: "power1.inOut",
              });
              setPage((prev) => prev - 1);
            } else {
              gsap.to(ref.current.children[0].style, {
                transform: `translateY(${-pageHeight * page}px)`,
                duration: 0.7,
                ease: "power1.inOut",
              });
            }
          }
        }
        setThrottle(true);
        setTimeout(() => {
          setThrottle(false);
        }, 1210);
      }
    },
    [throttle, page, isFooter]
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

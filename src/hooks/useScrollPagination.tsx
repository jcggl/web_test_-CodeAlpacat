import React, { useState, useEffect } from "react";
import { useRef } from "react";

const useScrollPagination = () => {
  const ref = useRef<any>();
  const pageHeight = window.innerHeight;
  const [throttle, setThrottle] = useState<boolean>(false);

  useEffect(() => {
    const wheelHandler = (e: React.WheelEvent) => {
      e.preventDefault();
      const scrollDown: boolean = e.deltaY > 0;
      const scrollUp: boolean = e.deltaY <= 0;
      let isFirstPage = window.scrollY >= 0 && window.scrollY < pageHeight;
      let isSecondPage =
        window.scrollY >= pageHeight && window.scrollY < pageHeight * 2;
      let isThirdPage =
        window.scrollY >= pageHeight * 2 && window.scrollY < pageHeight * 3;
      let isFourthPage =
        window.scrollY >= pageHeight * 3 && window.scrollY < pageHeight * 4;

      if (throttle) return;
      if (!throttle) {
        if (scrollDown) {
          //아래로 스크롤;
          if (isFirstPage) {
            //현재 1페이지
            window.scrollTo({
              top: pageHeight,
              behavior: "smooth",
            });
          } else if (isSecondPage) {
            window.scrollTo({
              top: pageHeight * 2,
              behavior: "smooth",
            });
          } else if (isThirdPage) {
            window.scrollTo({
              top: pageHeight * 3,
              behavior: "smooth",
            });
          } else if (isFourthPage) {
            window.scrollTo({
              top: pageHeight * 4,
              behavior: "smooth",
            });
          }
        } else if (scrollUp) {
          //위로 스크롤
          
          if (isFirstPage) {
            //현재 1페이지
            console.log("첫 페이지")
          } else if (isSecondPage) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          } else if (isThirdPage) {
            window.scrollTo({
              top: pageHeight,
              behavior: "smooth",
            });
          } else if (isFourthPage) {
            window.scrollTo({
              top: pageHeight * 2,
              behavior: "smooth",
            });
          }
        }
        setThrottle(true);
      }

      setTimeout(() => {
        setThrottle(false);
      }, 500);
    };

    const refCurrent = ref.current;
    refCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      refCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [pageHeight, throttle]);

  return { ref };
};

export default useScrollPagination;

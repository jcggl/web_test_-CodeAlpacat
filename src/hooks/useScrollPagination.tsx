import React, { useState, useEffect } from "react";
import { useRef } from "react";
// import useResize from "./useResize";

const useScrollPagination = () => {
  const ref = useRef<any>();
  // const { height:pageHeight } = useResize();
  const [throttle, setThrottle] = useState<boolean>(false);

  useEffect(() => {
    const wheelHandler = (e: React.WheelEvent) => {
      const pageHeight = ref.current.children[0].clientHeight;
      e.preventDefault();
      const scrollDown: boolean = e.deltaY > 0;
      const scrollUp: boolean = e.deltaY <= 0;
      let isFirstPage: boolean =
        window.scrollY >= 0 && window.scrollY < pageHeight;
      let isSecondPage: boolean =
        window.scrollY >= pageHeight && window.scrollY < pageHeight * 2;
      let isThirdPage: boolean =
        window.scrollY >= pageHeight * 2 && window.scrollY < pageHeight * 3;
      let isFourthPage: boolean =
        window.scrollY >= pageHeight * 3 &&
        window.scrollY < pageHeight * 4 - pageHeight * (1 - 0.88981) * 3; // 마지막 페이지는 끝 높이가 스크롤이 4페이지에 겹칠 수 있음.
      let isLastPage: boolean =
        window.scrollY >= pageHeight * 4 - pageHeight * (1 - 0.88981) * 3;

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
              top: pageHeight * 3 + pageHeight * 0.88981,
              behavior: "smooth",
            });
          }
        } else if (scrollUp) {
          //위로 스크롤
          if (isFirstPage) {
            //현재 1페이지
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
          } else if (isLastPage) {
            window.scrollTo({
              top: pageHeight * 3,
              behavior: "smooth",
            });
          }
        }
        setThrottle(true);
      }

      setTimeout(() => {
        setThrottle(false);
      }, 700);
    };

    const refCurrent = ref.current;
    refCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      refCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [throttle]);

  return { ref };
};

export default useScrollPagination;

import useResize from "@/hooks/useResize";
import { createContext, useState, useCallback } from "react";

interface Props {
  children: JSX.Element;
}

interface NavigationType {
  touchScrollHandler(e: React.TouchEvent<HTMLInputElement>): void;
  handleTouchStart(e: React.TouchEvent<HTMLInputElement>): void;
}

const TouchScrollContext = createContext<NavigationType>({
  touchScrollHandler: () => {},
  handleTouchStart: () => {},
});

export const TouchScrollProvider = ({ children }: Props) => {
  const [touch, setTouch] = useState<number | null>(null);
  const { height: pageHeight } = useResize();
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLInputElement>): void => {
    const currentTouch = e.touches[0].clientY;
    setTouch(currentTouch);
  },[]);

  let isFirstPage = window.scrollY >= 0 && window.scrollY < pageHeight
  let isSecondPage =
    window.scrollY >= pageHeight && window.scrollY < pageHeight * 2;
  let isThirdPage =
    window.scrollY >= pageHeight * 2 && window.scrollY < pageHeight * 3;
  let isFourthPage =
    window.scrollY >= pageHeight * 3 &&
    window.scrollY < pageHeight * 4 - pageHeight * (1 - 0.88981) * 2;
  let isLastPage =
    window.scrollY >= pageHeight * 4 - pageHeight * (1 - 0.88981) * 2;

  const touchScrollHandler = useCallback(
    (e: React.TouchEvent<HTMLInputElement>): void => {
      const touchDown: number | null = touch;
      if (touchDown === null) return;

      const currentTouch = e.touches[0].clientY;
      const touchDirection = touchDown - currentTouch;
       if (touchDirection > 4) {
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
       } else if (touchDirection < -4) {
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

      setTouch(null);
    },
    [touch, isFirstPage, isSecondPage, isThirdPage, isFourthPage, isLastPage, pageHeight]
  );

  const context = {
    touchScrollHandler,
    handleTouchStart,
  };

  return (
    <TouchScrollContext.Provider value={context}>
      {children}
    </TouchScrollContext.Provider>
  );
};

export default TouchScrollContext;

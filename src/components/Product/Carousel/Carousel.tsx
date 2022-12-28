import React, { useState, useRef } from "react";
import useMoveSlide from './../../../hooks/useMoveSlide';

import { kikitownImageList } from './../../../constants/Images/kikitown-image-list';
import arrowLeft from "./../../../assets/common/arrow-left.png";
import arrowRight from "./../../../assets/common/arrow-right.png";

const Carousal = ({mobileWidth, padWidth, DesktopWidth}: any) => {
  const images = useRef<string[]>(kikitownImageList);
  const {style, current, moveSlide} = useMoveSlide(images.current.length);
  const [touch, setTouch] = useState<number|null>(null);

  const handleTouchStart = (e:React.TouchEvent<HTMLInputElement>):void => {
    const currentTouch = e.touches[0].clientX
    setTouch(currentTouch)
  }
  
  const handleTouchMove = (e:React.TouchEvent<HTMLInputElement>):void => {
    const touchDown: number | null = touch;

    if (touchDown === null) return;

    const currentTouch = e.touches[0].clientX;
    const touchDirection = touchDown - currentTouch;

    if (touchDirection > 10) {
      moveSlide(1);
    }

    if (touchDirection < -10) {
      moveSlide(-1);
    }

    setTouch(null);
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="mobile:hidden pad:block pad:w-25pxr desktop:w-38pxr aspect-[38/24] object-contain cursor-pointer"
            onClick={() => {
              moveSlide(-1);
            }}
            src={arrowLeft}
            alt="ArrowLeft"
          />
        </div>
        <div className="flex justify-center">
          <div className="w-1240pxr aspect-[1240/700] overflow-hidden">
            <div
              className="flex transition-all delay-300 ease-out"
              style={style}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {images.current.map(
                (img: string, index: number): JSX.Element => (
                  <img
                    key={`${img}${index}`}
                    className="flex-none w-1240pxr aspect-[1240/700] object-contain"
                    src={img}
                    alt="슬라이드 이미지"
                  />
                )
              )}
            </div>
          </div>
          <div className="absolute mobile:bottom-[0.37rem] pad:bottom-[1.183rem] desktop:bottom-[1.625rem] w-75pxr z-[100] flex justify-between">
            {images.current.map(
              (_, index: number): JSX.Element => (
                <div
                  key={index}
                  className={
                    index === current
                      ? "mobile:w-[4.2px] mobile:h-[4.2px] pad:w-10pxr pad:h-10pxr desktop:w-15pxr desktop:h-15pxr rounded-[100%] bg-white"
                      : "mobile:w-[4.2px] mobile:h-[4.2px] pad:w-10pxr pad:h-10pxr desktop:w-15pxr desktop:h-15pxr rounded-[100%] bg-black opacity-60"
                  }
                ></div>
              )
            )}
          </div>
        </div>
        <div className="flex items-center text-[2.5rem] text-black cursor-pointer">
          <img
            onClick={() => {
              moveSlide(1);
            }}
            src={arrowRight}
            alt="ArrowRight"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousal;

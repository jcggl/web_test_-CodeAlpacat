import React, { useState, useRef } from "react";

import useMoveSlide from "./../../../hooks/useMoveSlide";
import { kikitownImageList } from "./../../../constants/Images/kikitown-image-list";
import arrowLeft from "./../../../assets/common/arrow-left.png";
import arrowRight from "./../../../assets/common/arrow-right.png";
import useInterval from "./../../../hooks/useInterval";

interface Props {
  imageList?: string[];
}

const Caroussl = ({ imageList = kikitownImageList }: Props) => {
  const images = useRef<string[]>([
    imageList[imageList.length - 1],
    ...imageList,
    imageList[0],
  ]);
  const { style, current, moveSlide } = useMoveSlide(images.current.length);
  const [touch, setTouch] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  /**
   *터치를 시작한 지점을 저장하는 함수
   */
  const handleTouchStart = (e: React.TouchEvent<HTMLInputElement>): void => {
    const currentTouch = e.touches[0].clientX;
    setTouch(currentTouch);
    setIsSwiping(true)
  };

  /**
   *터치를 중단했을 때 X축을 10이상 움직이면 스와이프하는 함수
   */
  const handleTouchMove = (e: React.TouchEvent<HTMLInputElement>): void => {
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
    setIsSwiping(false)
  };

  // 자동 슬라이드
  useInterval(() => {
    moveSlide(1);
  }, !isSwiping ? 3000 : null);

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
          <div className="mobile:w-320pxr pad:w-850pxr desktop:w-1240pxr aspect-[1240/700] overflow-hidden">
            <div
              className={`flex`}
              style={style}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {images.current.map(
                (img: string, index: number): JSX.Element => (
                  <img
                    key={`${img}${index}`}
                    className="flex-none mobile:w-320pxr pad:w-850pxr desktop:w-1240pxr aspect-[1240/700] object-contain"
                    src={img}
                    alt="슬라이드 이미지"
                  />
                )
              )}
            </div>
          </div>
          <div className="absolute mobile:bottom-[0.37rem] pad:bottom-[1.183rem] desktop:bottom-[1.625rem] flex">
            {images.current.map((_, index: number): JSX.Element | undefined => {
              const isCurrentPicture: string =
                index === current ||
                (index === 1 && current === images.current.length - 1) ||
                (index === images.current.length - 2 && current === 0)
                  ? "mobile:w-[4.2px] mobile:h-[4.2px] pad:w-10pxr pad:h-10pxr desktop:w-15pxr desktop:h-15pxr rounded-[100%] bg-white "
                  : "mobile:w-[4.2px] mobile:h-[4.2px] pad:w-10pxr pad:h-10pxr desktop:w-15pxr desktop:h-15pxr rounded-[100%] bg-black opacity-60 ";
              const skipMarginLeft: string =
                index !== 0
                  ? "mobile:ml-4pxr pad:ml-10pxr desktop:ml-15pxr"
                  : "";
              if (index === 0 || index === images.current.length - 1) return;
              return (
                <div
                  key={index}
                  className={isCurrentPicture + skipMarginLeft}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="mobile:hidden pad:block pad:w-25pxr desktop:w-38pxr aspect-[38/24] object-contain cursor-pointer"
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

export default Caroussl;

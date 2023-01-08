import React, { useState, useRef } from "react";

import useMoveSlide from "@/hooks/useMoveSlide";
import { kikitownImageList } from "@/constants/Images/kikitown-image-list";
import arrowLeft from "@/assets/common/arrow-left.png";
import arrowRight from "@/assets/common/arrow-right.png";
import useInterval from "@/hooks/useInterval";

interface Props {
  imageList?: string[];
}

const Carousel = ({ imageList = kikitownImageList }: Props) => {
  const images = useRef<string[]>([
    imageList[imageList.length - 1],
    ...imageList,
    imageList[0],
  ]);
  const { style, current, moveSlide } = useMoveSlide(images.current.length);
  const [touch, setTouch] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const isSinglePicture = images.current.length <= 3
  
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

    if (touchDirection > 4) {
      moveSlide(1);
    }

    if (touchDirection < -4) {
      moveSlide(-1);
    }
    
    setTouch(null);
    setIsSwiping(false)
  };

  // 자동 슬라이드
  useInterval(() => {
    moveSlide(1);
  }, !isSwiping && !isSinglePicture ? 3000 : null);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="hidden pad:block pad:w-[clamp(25px,2.315vw,38px)] desktop:w-[clamp(38px,1.979vw,50px)] aspect-[38/24] object-contain cursor-pointer"
            onClick={() => {
              moveSlide(-1);
            }}
            src={arrowLeft}
            alt="ArrowLeft"
          />
        </div>
        <div className="relative flex justify-center">
          <div className="w-[clamp(320px,88.889vw,850px)] pad:w-[clamp(850px,78.704vw,1240px)] desktop:w-[clamp(1240px,64.583vw,100vw)] aspect-[1240/700] overflow-hidden">
            <div
              className="flex"
              style={style}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {images.current.map(
                (img: string, index: number): JSX.Element => (
                  <img
                    key={`${img}${index}`}
                    className="flex-none w-[clamp(320px,88.889vw,850px)] pad:w-[clamp(850px,78.704vw,1240px)] desktop:w-[clamp(1240px,64.583vw,100vw)] aspect-[1240/700] object-contain"
                    src={img}
                    alt="슬라이드 이미지"
                  />
                )
              )}
            </div>
          </div>
          <div className="flex absolute bottom-[clamp(6px,1.667vw,19px)] pad:bottom-[clamp(19px,1.759vw,26px)] desktop:bottom-[clamp(26px,1.354vw,50px)]">
            {images.current.map((_, index: number): JSX.Element | undefined => {
              const isCurrentPicture: string =
                index === current ||
                (index === 1 && current === images.current.length - 1) ||
                (index === images.current.length - 2 && current === 0)
                  ? "w-[clamp(4.2px,1.167vw,10px)] pad:w-[clamp(10px,0.926vw,15px)] desktop:w-[clamp(15px,0.781vw,30px)] aspect-square rounded-[100%] bg-white opacity-1"
                  : "w-[clamp(4.2px,1.167vw,10px)] pad:w-[clamp(10px,0.926vw,15px)] desktop:w-[clamp(15px,0.781vw,30px)] aspect-square rounded-[100%] bg-black opacity-60";
              const skipMarginLeft: string =
                index !== 0
                  ? "ml-[clamp(4px,1.111vw,10px)] pad:ml-[clamp(10px,0.926vw,15px)] desktop:ml-[clamp(15px,0.781vw,30px)]"
                  : "";
              if (index === 0 || index === images.current.length - 1)
                return (
                  <React.Fragment
                    key={`CarouselImageKey${index}`}
                  ></React.Fragment>
                );
              return (
                <div
                  key={`CarouselImageKey${index}`}
                  className={isCurrentPicture+ " " + skipMarginLeft}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="hidden pad:block pad:w-[clamp(25px,2.315vw,38px)] desktop:w-[clamp(38px,1.979vw,50px)] aspect-[38/24] object-contain cursor-pointer"
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

export default Carousel;

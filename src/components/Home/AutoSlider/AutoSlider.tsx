import React from "react";
import { useRef } from "react";
import useMoveSlide from "./../../../hooks/useMoveSlide";
import useInterval from "./../../../hooks/useInterval";

type Props = {
  imageList: string[];
};

const AutoSlider = ({ imageList }: Props) => {
  const images = useRef<string[]>([
    imageList[imageList.length - 1],
    ...imageList,
    imageList[0],
  ]);
  const { style, moveSlide } = useMoveSlide(images.current.length);
  const isSinglePicture = images.current.length <= 3;

  useInterval(
    () => {
      moveSlide(1);
    },
    !isSinglePicture ? 400 : null
  );

  return (
    <div className="flex justify-center">
      <div className="mobile:w-320pxr pad:w-850pxr desktop:w-1240pxr aspect-[1240/700] overflow-hidden">
        <div className={`flex`} style={style}>
          {imageList.map(
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
    </div>
  );
};

export default AutoSlider;

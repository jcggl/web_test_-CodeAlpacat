import React from "react";
import { useRef } from "react";

import useInterval from "@/hooks/useInterval";
import useAutoSlide from "@/hooks/useAutoSlide";

type Props = {
  imageList: (string | { image: string })[];
};

const AutoSlider = ({ imageList }: Props) => {
  const images = useRef<(string | { image: string })[]>([...imageList, ...imageList]);
  const { style, moveSlide, contentWidth } = useAutoSlide(images.current.length);

  useInterval(() => {
    moveSlide(1);
  }, 2500);

  return (
    <div style={style} className="flex">
      <div className="w-full overflow-hidden">
        <div className={`flex`} style={style}>
          {images.current.map(
            (img: string | { image: string }, index: number): JSX.Element => {
              return typeof img !== "string" ? (
                <div
                  key={`PartnersImage${index}`}
                  style={contentWidth}
                  className="flex-none flex justify-center items-center"
                >
                  <img className="w-[clamp(38px,10.578vw,76px)] pad:w-[clamp(76.16px,7vw,105px)] desktop:w-[clamp(105px,5.469vw,200px)]" src={img.image} alt="Partners" />
                </div>
              ) : (
                <div
                  key={`PartnersImage${index}`}
                  style={contentWidth}
                  className="flex-none flex justify-center text-center items-center font-bold text-white text-[clamp(12px,3.3vw,20px)] pad:text-[clamp(20px,1.852vw,24px)] desktop:text-[clamp(24px,1.25vw,30px)]"
                >
                  {img}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
import React from "react";
import { useRef } from "react";

import useInterval from "@/hooks/useInterval";
import useAutoSlide from "@/hooks/useAutoSlide";

type Props = {
  imageList: (string[] | { image: string })[];
};

const AutoSlider = ({ imageList }: Props) => {
  const images = useRef<(string[] | { image: string })[]>([
    ...imageList,
    ...imageList,
  ]);
  const { style, moveSlide, contentWidth } = useAutoSlide(
    images.current.length
  );

  useInterval(() => {
    moveSlide(1);
  }, 1200);

  return (
    <div style={style} className="flex">
      <div className="w-full overflow-hidden">
        <div className={`flex`} style={style}>
          {images.current.map(
            (img: string[] | { image: string }, index: number): JSX.Element => {
                return !Array.isArray(img) ? (
                  <div
                    key={`PartnersImage${index}`}
                    style={contentWidth}
                    className="flex-none flex justify-center items-center"
                  >
                    <img
                      className="h-[clamp(60px,16.667vw,80px)] pad:h-auto"
                      src={img.image}
                      alt="Partners"
                    />
                  </div>
                ) : (
                  <div
                    key={`PartnersImage${index}`}
                    style={contentWidth}
                    className="flex-none flex flex-col justify-center text-center items-center font-bold text-white text-[clamp(12px,3.3vw,20px)] pad:text-[clamp(20px,1.852vw,24px)] desktop:text-[clamp(24px,1.25vw,30px)]"
                  >
                    {img.map((item, index) => {
                      return <h3 key={`partnerName${index}`}>{item}</h3>;
                    })}
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

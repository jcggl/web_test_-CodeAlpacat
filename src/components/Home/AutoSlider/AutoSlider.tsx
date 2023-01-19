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
  const imageRatio = useRef<string[]>([
    "aspect-[108.34/162]",
    "aspect-[266.79/60.65]",
    "aspect-[149.08/137.48]",
    "aspect-[254.55/100]",
  ])

  const imageWidth = useRef<string[]>([
    "w-[clamp(54.85px,15.236vw,65.82px)] pad:w-[clamp(81.25px,7.523vw,98.34px)] desktop:w-[clamp(108.34px,5.643vw,130px)]",
    "w-[clamp(135.06px,37.517vw,162.072px)] pad:w-[clamp(200.09px,18.527vw,246.79px)] desktop:w-[clamp(266.79px,13.895vw,320.148px)]",
    "w-[clamp(83.86px,23.294vw,100.7px)] pad:w-[clamp(111.81px,10.353vw,129.08px)] desktop:w-[clamp(149.08px,7.765vw,178.9px)]",
    "w-[clamp(130px,36.111vw,160.91px)] pad:w-[clamp(218.91px,20.269vw,225.55px)] desktop:w-[clamp(245.55px,12.789vw,294.66px)]",
  ]);

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
                      className={`${
                        imageRatio.current[index % imageList.length]
                      } ${imageWidth.current[index % imageList.length]}`}
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

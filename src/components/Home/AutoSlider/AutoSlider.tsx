import { useRef } from "react";

import useInterval from "@/hooks/useInterval";
import useAutoSlide from "@/hooks/useAutoSlide";




type Props = {
  imageList: (string[] | { image: string })[];
  intersectionStyle: {transform: string}
};

const AutoSlider = ({ imageList, intersectionStyle }: Props) => {
  const images = useRef<(string[] | { image: string })[]>([
    ...imageList,
    ...imageList,
  ]);
  const { style, moveSlide, contentWidth } = useAutoSlide(
    images.current.length
  );
  const imageRatio = useRef<string[]>([
    "aspect-[249.28/57.42]", //naverZ
    "aspect-[219.61/111.02]", //lineNext
    "aspect-[236/91]", //d2StartUp
    "aspect-[219.86/68]", //dosi
    "aspect-[277.84/100]", //nvidia
    "aspect-[139.12/130]", //planetarium
    "aspect-[100.31/150]", //kimgisaLab
  ]);

  const imageWidth = useRef<string[]>([
    "w-[clamp(115.5px,32.083vw,169.51px)] pad:w-[clamp(169.51px,15.695vw,249.28px)] desktop:w-[clamp(249.28px,12.983vw,100vw)]", //naverZ
    "w-[clamp(101.75px,28.264vw,149.33px)] pad:w-[clamp(149.33px,13.827vw,219.61px)] desktop:w-[clamp(219.61px,11.438vw,100vw)]", //lineNext
    "w-[clamp(108.56px,30.156vw,159.69px)] pad:w-[clamp(159.69px,14.786vw,236px)] desktop:w-[clamp(236px,12.292vw,100vw)]", //d2StartUp
    "w-[clamp(101.14px,28.094vw,149.51px)] pad:w-[clamp(149.51px,13.844vw,219.86px)] desktop:w-[clamp(219.86px,11.451vw,100vw)]", //dosi
    "w-[clamp(127.81px,35.503vw,188px)] pad:w-[clamp(188px,17.407vw,277.84px)] desktop:w-[clamp(277.84px,14.471vw,100vw)]", //nvidia
    "w-[clamp(64.46px,17.906vw,139.12px)] pad:w-[clamp(94.6px,8.759vw,139.12px)] desktop:w-[clamp(139.12px,7.246vw,100vw)]", //planetarium
    "w-[clamp(46.48px,12.911vw,68.21px)] pad:w-[clamp(68.21px,6.316vw,100.31px)] desktop:w-[clamp(100.31px,5.224vw,100vw)]", //kimgisaLab
  ]);

  useInterval(() => {
    moveSlide(1);
  }, 1200);

  return (
    <div style={{...style, ...intersectionStyle}} className="flex">
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
                      loading="lazy"
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

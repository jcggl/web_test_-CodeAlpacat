import useScrollAnimation from "@/hooks/useScrollAnimation";
import React, { useContext } from "react";
import subIntroAsset from "@/assets/svg/home/sub-intro.svg";
import TouchScrollContext from "@/contexts/TouchScrollContext";
const SubIntro = () => {
  // const { ref, textStyle, imageStyle } = useScrollAnimation(0.65);
    const { touchScrollHandler, handleTouchStart } =
      useContext(TouchScrollContext);
  return (
    <div
      // ref={ref}
      className="relative w-full h-screen font-spline tracking-[.01em] text-main-white touch-none overflow-hidden max-w-[2560px] mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={touchScrollHandler}
    >
      {/* title */}
      <div className="">
        <h3
          // style={textStyle}
          className="absolute w-[clamp(282px,78.333%,100%)] pad:w-auto left-[clamp(30px,8.333%,100%)] pad:left-[clamp(89px,8.241%,260px)] desktop:left-[clamp(260px,13.542%,100%)] top-[clamp(84px,23.3%,100%)] pad:top-[clamp(152px,14.074%,193px)] desktop:top-[clamp(193px,10.052%,100%)] font-spline font-main-white tracking-[.01em] text-main-white text-[clamp(34px,9.44%,100%)] pad:text-[clamp(65px,6.019%,84px)] desktop:text-[clamp(84px,4.375%,100%)] leading-[130%]"
        >
          Avatar Communication
          <br />
          holds the key
          <br />
          to the future
          <br />
          of the metaverse.
        </h3>
        <div className="absolute right-[clamp(38px,10.556%,100%)] pad:right-[clamp(112px,10.370%,322px)] desktop:right-[clamp(322px,16.771%,100%)] top-[clamp(329px,91.389%,100%)] pad:top-[clamp(282px,26.111%,319px)] desktop:top-[clamp(319px,16.615%,100%)]">
          <img
            // style={imageStyle}
            className="w-[clamp(124px,34.44%,221px)] pad:w-[clamp(221px,20.4%,359px)] desktop:w-[clamp(359px,18.698%,100%)]"
            src={subIntroAsset}
            alt="톱니바퀴"
          />
        </div>
      </div>
      {/* subtitle */}
      <div>
        <h4
          // style={textStyle}
          className="absolute right-[clamp(17px,4.722%,100%)] pad:right-[clamp(101px,9.352%,248px)] desktop:right-[clamp(248px,12.917%,100%)] top-[clamp(482px,133.889%,200%)] pad:top-[clamp(584px,54.074%,769px)] desktop:top-[clamp(769px,40.052%,100%)] font-spline font-light font-main-white tracking-[.01em] w-[clamp(209px,58%,100%)] pad:w-[clamp(380px,35.185%,100%)] desktop:w-[clamp(600px,31.25%,100%)] text-[clamp(16px,4.4%,100%)] pad:text-[clamp(20px,1.852%,36px)] desktop:text-[clamp(28px,1.458%,100%)] leading-[143%]"
        >
          GoodGang Labs is pushing the forefront by developing the core
          technologies that enable fluid, natural, and expressive avatar
          dynamics.
        </h4>
      </div>
    </div>
  );
};

export default SubIntro;

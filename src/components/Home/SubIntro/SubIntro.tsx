import useScrollAnimation from "@/hooks/useScrollAnimation";
import React, { useContext } from "react";
import subIntroAsset from "@/assets/svg/home/sub-intro.svg";
import TouchScrollContext from "@/contexts/TouchScrollContext";
const SubIntro = () => {
  const { ref, textStyle, imageStyle } = useScrollAnimation(0.65);
  const { touchScrollHandler, handleTouchStart } =
    useContext(TouchScrollContext);
  return (
    <div
      ref={ref}
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      className="relative w-full h-screen font-spline tracking-[.01em] text-main-white touch-none overflow-hidden max-w-[600px] pad:max-w-[1920px] desktop:max-w-[100vw] mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={touchScrollHandler}
    >
      {/* title */}
      <div className="">
        <h3
          style={textStyle}
          className="absolute w-[clamp(282px,78.333vw,400px)] pad:w-auto left-[clamp(30px,8.333vw,40px)] pad:left-[clamp(89px,8.241vw,260px)] desktop:left-[clamp(260px,13.542vw,100vw)] top-[clamp(84px,23.3vw,100px)] pad:top-[clamp(152px,14.074vw,193px)] desktop:top-[clamp(193px,10.052vw,100vw)] font-spline font-main-white tracking-[.01em] text-main-white text-[clamp(34px,9.44vw,40px)] pad:text-[clamp(65px,6.019vw,84px)] desktop:text-[clamp(84px,4.375vw,100vw)] leading-[130%]"
        >
          Avatar Communication
          <br />
          holds the key
          <br />
          to the future
          <br />
          of the metaverse.
        </h3>
        <div className="absolute right-[clamp(38px,10.556vw,45px)] pad:right-[clamp(112px,10.370vw,322px)] desktop:right-[clamp(322px,16.771vw,100vw)] top-[clamp(329px,91.389vw,400px)] pad:top-[clamp(282px,26.111vw,319px)] desktop:top-[clamp(319px,16.615vw,100vw)]">
          <img
            style={imageStyle}
            className="w-[clamp(124px,34.44vw,170px)] pad:w-[clamp(221px,20.4vw,350px)] desktop:w-[clamp(359px,18.698vw,100vw)]"
            src={subIntroAsset}
            alt="톱니바퀴"
          />
        </div>
      </div>
      {/* subtitle */}
      <div>
        <h4
          style={textStyle}
          className="absolute right-[clamp(17px,4.722vw,20px)] pad:right-[clamp(101px,9.352vw,248px)] desktop:right-[clamp(248px,12.917vw,100vw)] top-[clamp(482px,133.889vw,610px)] pad:top-[clamp(584px,54.074vw,769px)] desktop:top-[clamp(769px,40.052vw,100vw)] font-spline font-light font-main-white tracking-[.01em] w-[clamp(209px,58vw,270px)] pad:w-[clamp(380px,35.185vw,100vw)] desktop:w-[clamp(600px,31.25vw,100vw)] text-[clamp(16px,4.4vw,20px)] pad:text-[clamp(20px,1.852vw,36px)] desktop:text-[clamp(28px,1.458vw,100vw)] leading-[143%]"
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

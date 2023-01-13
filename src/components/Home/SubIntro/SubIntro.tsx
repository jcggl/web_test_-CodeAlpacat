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
      className="w-full h-screen font-spline tracking-[.01em] text-main-white touch-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={touchScrollHandler}
    >
      {/* title */}
      <div className="flex flex-col pad:flex-row pad:items-center ml-[clamp(30px,5.041vw,178px)] pt-[clamp(84px,23.3vw,130px)] pad:pt-[clamp(152px,14.074vw,180px)]">
        <h3
          style={textStyle}
          className="font-spline tracking-[.01em] text-main-white text-[clamp(34px,9.44vw,45px)] pad:text-[clamp(65px,6.019vw,110px)] desktop:text-[clamp(110px,5.729vw,130px)] leading-[clamp(40px,120%,124px)]"
        >
          Avatar Communication
          <br />
          holds the key
          <br />
          to the future
          <br />
          of the metaverse.
        </h3>
        <div className="flex pad:block flex-row-reverse desktop:w-[clamp(359px,18.698vw,400px)] pt-[clamp(45px,12.5vw,106px)] pad:pt-[clamp(106px,9.815vw,140px)] desktop:pt-[clamp(160px,8.333vw,300px)] ml-[clamp(178px,49.444vw,768px)] pad:ml-[clamp(60px,5.556vw,150px)] desktop:ml-[clamp(150px,7.813vw,100vw)]">
          <img
            style={imageStyle}
            className="restart-animation w-[clamp(124px,34.44vw,221px)] pad:w-[clamp(221px,20.4vw,359px)] desktop:w-[clamp(359px,18.698vw,400px)]"
            src={subIntroAsset}
            alt="톱니바퀴"
          />
        </div>
      </div>
      {/* subtitle */}
      <div className="flex flex-row-reverse pad:flex-row-reverse relative pt-[clamp(10px,2.778vw,50px)] pad:pt-[clamp(75px,6.944vw,90px)] desktop:pt-[clamp(106px,5.521vw,130px)]">
        <h4
          style={textStyle}
          className="mr-[clamp(17px,4.72vw,101px)] pad:mr-[clamp(101px,9.352vw,140px)] desktop:mr-[clamp(180px,9.375vw,200px)] w-[clamp(209px,58vw,280px)] pad:w-[clamp(382px,35.37vw,628px)] desktop:w-[clamp(623px,32.4vw,700px)] text-[clamp(16px,4.4vw,20px)] pad:text-[clamp(20px,1.852vw,34px)] desktop:text-[clamp(34px,1.771vw,50px)]"
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

import useScrollAnimation from "@/hooks/useScrollAnimation";
import React from "react";
import subIntroAsset from "@/assets/svg/home/sub-intro.svg";

const SubIntro = () => {
  const { ref: titleRef, style: titleStyle } = useScrollAnimation("up", 0.45);
  const { ref: subTitleRef, style: subTitleStyle } = useScrollAnimation("up", 0.35);
  const { ref: assetRef, style: assetStyle } = useScrollAnimation("right", 0.45);

  return (
    <div className="w-full h-screen font-spline text-main-white">
      {/* title */}
      <div className="flex flex-col pad:flex-row pad:items-center ml-[clamp(30px,5.041vw,178px)] pt-[clamp(84px,23.3vw,130px)] pad:pt-[clamp(152px,14.074vw,180px)]">
        <h3
          className="font-spline text-main-white text-[clamp(34px,9.44vw,45px)] pad:text-[clamp(65px,6.019vw,110px)] desktop:text-[clamp(110px,5.729vw,130px)] leading-[clamp(40px,120%,124px)]"
          style={titleStyle}
          ref={titleRef}
        >
          Avatar Communication
          <br />
          holds the key
          <br />
          to the future
          <br />
          of the metaverse.
        </h3>
        <div
          className="flex pad:block flex-row-reverse desktop:w-[clamp(359px,18.698vw,400px)] pt-[clamp(45px,12.5vw,106px)] pad:pt-[clamp(106px,9.815vw,140px)] desktop:pt-[clamp(75px,3.906vw,100px)] ml-[clamp(178px,55vw,768px)] pad:ml-[clamp(40px,4vw,260px)] desktop:ml-[clamp(30px,30vw,140px)]"
          ref={assetRef}
          style={assetStyle}
        >
          <img
            className="restart-animation w-[clamp(124px,34.44vw,221px)] pad:w-[clamp(221px,20.4vw,359px)] desktop:w-[clamp(359px,18.698vw,400px)]"
            src={subIntroAsset}
            alt="톱니바퀴"
          />
        </div>
      </div>
      {/* subtitle */}
      <div
        ref={subTitleRef}
        style={subTitleStyle}
        className="flex flex-row-reverse pad:flex-row-reverse relative pt-[clamp(10px,2.778vw,50px)] pad:pt-[clamp(75px,6.944vw,90px)] desktop:pt-[clamp(106px,5.521vw,130px)]"
      >
        <h4 className="mr-[clamp(17px,4.72vw,101px)] pad:mr-[clamp(101px,9.352vw,140px)] desktop:mr-[clamp(180px,9.375vw,200px)] w-[clamp(209px,58vw,280px)] pad:w-[clamp(382px,35.37vw,628px)] desktop:w-[clamp(623px,32.4vw,700px)] text-[clamp(16px,4.4vw,20px)] pad:text-[clamp(20px,1.852vw,34px)] desktop:text-[clamp(34px,1.771vw,50px)]">
          GoodGang Labs is pushing the forefront by developing the core
          technologies that enable fluid, natural, and expressive avatar
          dynamics.
        </h4>
      </div>
    </div>
  );
};

export default SubIntro;

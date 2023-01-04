import React from "react";
import WallDesktop from "./WallDesktop";
import WallTablet from "./WallTablet";
import WallMobile from "./WallMobile";
import { HiringButton } from "@/components/Common";
import useTextSlideUp from './../../../hooks/useTextSlideUp';

const JoinUs = () => {
  const {ref, style} = useTextSlideUp(0.55, 0.1);
  return (
    <div className="relative w-full overflow-hidden h-[83.704vh]">
      <div
        ref={ref}
        className="relative flex flex-col mobile:w-[clamp(310px,86.111vw,835px)] pad:w-[clamp(835px,77.315vw,1270px)] desktop:w-[clamp(1270px,66.146vw,100vw)] gap-y-[clamp(40px,11.111vw,52px)] pad:gap-y-[clamp(52px,4.815vw,85px)] pad:gap-y-[clamp(85px,4.427vw,100vw)] pl-[clamp(45px,12.5vw,112px)] pad:pl-[clamp(112px,10.37vw,202px)] desktop:pl-[clamp(202px,10.521vw,100vw)] pt-[clamp(123px,34.167vw,189px)] pad:pt-[clamp(189px,17.5vw,303px)] desktop:pt-[clamp(303px,15.781vw,100vw)] text-main-white font-spline z-[1]"
      >
        <h4
          className="font-light mobile:text-[clamp(20px,5.556vw,30px)] pad:text-[clamp(30px,2.778px,50px)] desktop:text-[clamp(50px,2.604vw,100vw)]"
        >
          Join Us
        </h4>
        <h3
          style={style}
          className="font-medium mobile:text-[clamp(30px,8.333vw,60px)] pad:text-[clamp(60px,5.556vw,90px)] desktop:text-[clamp(90px,4.688vw,100vw)] mobile:leading-[140%] pad:leading-[130%] desktop:leading-[120%]"
        >
          We value trust, autonomy, and exceptional ability.
        </h3>
        <HiringButton animationStyle={style} />
      </div>
      <div>
        {/* 데스크탑 */}
        <WallDesktop />
        {/* 태블릿 */}
        <WallTablet />
        {/* 모바일 */}
        <WallMobile />
      </div>
    </div>
  );
};

export default JoinUs;

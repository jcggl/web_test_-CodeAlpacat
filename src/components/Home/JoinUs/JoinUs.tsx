import React, { useContext } from "react";
import { HiringButton } from "@/components/Common";
import useTextSlideUp from "@/hooks/useTextSlideUp";
import TouchScrollContext from "@/contexts/TouchScrollContext";

import Walls from "./Walls";

const JoinUs = () => {
  const { ref, style } = useTextSlideUp(0.6, 0.05);
  const { touchScrollHandler, handleTouchStart } =
    useContext(TouchScrollContext);
  return (
    <div
      className="relative w-full h-screen overflow-hidden touch-none"
      // style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      onTouchStart={handleTouchStart}
      onTouchMove={touchScrollHandler}
    >
      <div
        ref={ref}
        className="relative flex flex-col w-[clamp(310px,86.111vw,835px)] pad:w-[clamp(775px,55.833vw,1270px)] desktop:w-[clamp(1270px,66.146vw,100vw)] gap-y-[clamp(40px,11.111vw,52px)] pad:gap-y-[clamp(36px,3.333vw,85px)] desktop:gap-y-[clamp(85px,4.427vw,100vw)] pl-[clamp(45px,12.5vw,112px)] pad:pl-[clamp(160px,14.815vw,202px)] desktop:pl-[clamp(202px,10.521vw,100vw)] pt-[clamp(123px,34.167vw,150px)] pad:pt-[clamp(309px,28.611vw,230px)] desktop:pt-[clamp(340px,17.708vw,350px)] text-main-white font-spline z-[1] leading-[110%] tracking-[.01em]"
      >
        <h4 className="font-light text-[clamp(20px,5.556vw,30px)] pad:text-[clamp(26px,2.778px,50px)] desktop:text-[clamp(40px,2.083vw,100vw)]">
          Join Us
        </h4>
        <h3
          style={style}
          className="text-[clamp(30px,8.333vw,40px)] pad:text-[clamp(50px,4.63vw,80px)] desktop:text-[clamp(64px,3.333vw,100vw)] leading-[140%] desktop:leading-[120%]"
        >
          We value trust, autonomy, and exceptional ability.
        </h3>
        <HiringButton animationStyle={style} />
      </div>
      <Walls />
    </div>
  );
};

export default JoinUs;

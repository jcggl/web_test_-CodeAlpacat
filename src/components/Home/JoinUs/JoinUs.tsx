import React from "react";
import { HiringButton } from "@/components/Common";
import useTextSlideUp from "@/hooks/useTextSlideUp";
// import TouchScrollContext from "@/contexts/TouchScrollContext";

import Walls from "./Walls";
import MobileWalls from "./MobileWalls";

const JoinUs = () => {
  const { ref, style, JoinUsStyle } = useTextSlideUp(0.6, 0.05);
  // const { touchScrollHandler, handleTouchStart } =
  //   useContext(TouchScrollContext);
  return (
    <div
      className="relative w-full h-screen overflow-hidden min-h-[640px] pad:min-h-[clamp(768px,71.111vw,1080px)] desktop:min-h-[clamp(1080px,56.250vw,1296px)]"
      // style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      // onTouchStart={handleTouchStart}
      // onTouchMove={touchScrollHandler}
    >
      <Walls />
      <MobileWalls />
      <div
        ref={ref}
        className="relative flex flex-col w-[clamp(255px,70.833vw,360px)] pad:w-[clamp(603px,55.833vw,870px)] desktop:w-[clamp(812px,42.292vw,812px)] gap-y-[clamp(45px,12.5vw,52px)] pad:gap-y-[clamp(36px,3.333vw,85px)] desktop:gap-y-[85px] ml-[clamp(50px,13.889vw,120px)] pad:ml-[clamp(160px,14.815vw,202px)] desktop:ml-[clamp(202px,10.521vw,100vw)] pt-[clamp(249px,69.167vw,240px)] pad:pt-[clamp(309px,28.611vw,340px)] desktop:pt-[clamp(340px,17.708vw,350px)] text-main-white font-spline z-[1] leading-[110%] tracking-[.01em]"
      >
        <h4
          style={JoinUsStyle}
          className="font-light text-[clamp(16px,4.444vw,21.6px)] pad:text-[clamp(26px,2.407vw,40px)] desktop:text-[40px]"
        >
          Join Us
        </h4>
        <h3
          style={style}
          className="font-medium text-[clamp(28px,7.778vw,33.6px)] pad:text-[clamp(50px,4.63vw,64px)] desktop:text-[64px] leading-[140%] desktop:leading-[140%]"
        >
          We value trust, autonomy, and exceptional ability.
        </h3>
        <HiringButton animationStyle={style} />
      </div>
    </div>
  );
};

export default JoinUs;

import React from "react";

import left from "@/assets/home/join-us/pad/left.png";
import right from "@/assets/home/join-us/pad/right.png";
import top from "@/assets/home/join-us/pad/top.png";
import bottom from "@/assets/home/join-us/pad/bottom.png";
import useCombineWall from "@/hooks/useCombineWall";

const WallTablet = () => {
  const { ref, bottomStyle, leftStyle, rightStyle, topStyle } = useCombineWall(0.4);
  return (
    <div ref={ref} className="hidden pad:block desktop:hidden">
      <img style={bottomStyle} className="absolute bottom-0 w-screen" src={bottom} alt="" />
      <img
        style={leftStyle}
        className="absolute left-0 bottom-0 w-[clamp(71.16px,6.589vw,176.28px)]"
        src={left}
        alt=""
      />
      <img
        style={rightStyle}
        className="absolute right-0 bottom-[clamp(235px,21.759vw,100vw)] w-[clamp(423px,39.167vw,100vw)]"
        src={right}
        alt=""
      />
      <img
        style={topStyle}
        className="absolute bottom-[clamp(473px,43.796vw,100vw)] w-screen"
        src={top}
        alt=""
      />
    </div>
  );
};

export default WallTablet;

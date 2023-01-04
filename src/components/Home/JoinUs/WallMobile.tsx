import React from 'react'

import left from "@/assets/home/join-us/mobile/left.png";
import right from "@/assets/home/join-us/mobile/right.png";
import top from "@/assets/home/join-us/mobile/top.png";
import bottom from "@/assets/home/join-us/mobile/bottom.png";
import useCombineWall from '@/hooks/useCombineWall';

const WallMobile = () => {
  const { ref, bottomStyle, leftStyle, rightStyle, topStyle } = useCombineWall(0.4);
  return (
    <div ref={ref} className="mobile:block pad:hidden">
      <img style={bottomStyle} className="absolute bottom-0 w-screen" src={bottom} alt="" />
      <img
        style={leftStyle}
        className="absolute left-0 bottom-0 w-[clamp(24.96px,6.933vw,71.16px)]"
        src={left}
        alt=""
      />
      <img
        style={rightStyle}
        className="absolute right-0 bottom-[clamp(183px,49.833vw,100vw)] w-[clamp(122.81px,34.114vw,100vw)]"
        src={right}
        alt=""
      />
      <img
        style={topStyle}
        className="absolute bottom-[clamp(373px,103.611vw,100vw)] w-screen"
        src={top}
        alt=""
      />
    </div>
  );
}

export default WallMobile
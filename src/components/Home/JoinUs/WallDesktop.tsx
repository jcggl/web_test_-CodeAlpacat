import React from 'react'

import left from "@/assets/home/join-us/desktop/left.png";
import right from "@/assets/home/join-us/desktop/right.png";
import top from "@/assets/home/join-us/desktop/top.png";
import bottom from "@/assets/home/join-us/desktop/bottom.png";
import useCombineWall from '@/hooks/useCombineWall';

const WallDesktop = () => {
  const {ref, bottomStyle, leftStyle, rightStyle, topStyle} = useCombineWall(0.5)
  return (
    <div ref={ref} className="hidden desktop:block">
      <img style={bottomStyle} className="absolute bottom-0 w-screen" src={bottom} alt="하단 벽" />
      <img
        style={leftStyle}
        className="absolute left-0 bottom-0 w-[clamp(176.28px,9.181vw,100vw)]"
        src={left}
        alt="좌측 벽"
      />
      <img
        style={rightStyle}
        className="absolute right-0 bottom-[clamp(325px,16.927vw,100vw)] w-[clamp(936.39px,48.770vw,100vw)]"
        src={right}
        alt="우측 벽"
      />
      <img
        style={topStyle}
        className="absolute bottom-[clamp(620px,32.292vw,100vw)] w-screen"
        src={top}
        alt="상단 벽"
      />
    </div>
  );
}

export default WallDesktop
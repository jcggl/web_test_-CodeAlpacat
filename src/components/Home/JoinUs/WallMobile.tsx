import React from 'react'

import left from "@/assets/home/join-us/original/left.webp";
import right from "@/assets/home/join-us/original/right.webp";
import top from "@/assets/home/join-us/original/top.webp";
import bottom from "@/assets/home/join-us/original/bottom.webp";
import useCombineWall from "@/hooks/useCombineWall";

const WallMobile = () => {
  const { ref, bottomStyle, leftStyle, rightStyle, topStyle } = useCombineWall(0.4);
  return (
    <div ref={ref} className="block middleMobile:hidden">
      <img
        style={bottomStyle}
        className="absolute left-[-76.5vw] bottom-0 w-[221.667vw] aspect-[798/295.05] max-w-none max-h-none"
        src={bottom}
        alt="하단 벽"
      />
      <img
        style={leftStyle}
        className="absolute right-[93.067vw] bottom-0 w-[83.322vw] aspect-[299.96/481.53] max-w-none max-h-none"
        src={left}
        alt="좌측 벽"
      />
      <img
        style={rightStyle}
        className="absolute left-[65.886vw] bottom-[51.5vw] w-[79.392vw] aspect-[285.81/480.94] max-w-none max-h-none"
        src={right}
        alt="우측 벽"
      />
      <img
        style={topStyle}
        className="absolute left-[-76.5vw] bottom-[103.55vw] w-[221.667vw] aspect-[798/293.87] max-w-none max-h-none"
        src={top}
        alt="상단 벽"
      />
    </div>
  );
}

export default WallMobile
import React from "react";

import left from "@/assets/home/join-us/original/left.webp";
import right from "@/assets/home/join-us/original/right.webp";
import top from "@/assets/home/join-us/original/top.webp";
import bottom from "@/assets/home/join-us/original/bottom.webp";
import useCombineWall from "@/hooks/useCombineWall";

const Walls = () => {
  const { ref, bottomStyle, leftStyle, rightStyle, topStyle } =
    useCombineWall(0.5);
  return (
    <div ref={ref}>
      <img
        style={bottomStyle}
        className="absolute right-[-45.3vw] pad:right-[0] top-[46.6vw] pad:top-[21.55vw] w-[221.667vw] pad:w-[148.854vw] aspect-[798/295.05] pad:aspect-[2858/490.04] max-w-none max-h-none"
        src={bottom}
        alt="하단 벽"
      />
      <img
        style={leftStyle}
        className="absolute right-[93.067vw] pad:right-[92.917vw] top-[-5.6vw] pad:top-[5.4vw] w-[83.322vw] pad:w-[55.952vw] aspect-[299.96/481.53] pad:aspect-[1074.28/799.75] max-w-none max-h-none"
        src={left}
        alt="좌측 벽"
      />
      <img
        style={rightStyle}
        className="absolute right-[-45.5vw] pad:right-[0] top-[-57.6vw] pad:top-[-10.4vw] w-[79.392vw] pad:w-[53.13vw] aspect-[285.81/480.94] pad:aspect-[1023.61/798.77] max-w-none max-h-none"
        src={right}
        alt="우측 벽"
      />
      <img
        style={topStyle}
        className="absolute right-[-45.4vw] pad:right-[0] top-[-57.222vw] pad:top-[-10.69vw] w-[221.667vw] pad:w-[148.854vw] aspect-[798/293.87] pad:aspect-[2858/488.08] max-w-none max-h-none"
        src={top}
        alt="상단 벽"
      />
    </div>
  );
};

export default Walls;

import React from "react";

import left from "@/assets/home/join-us/original/left.webp";
import right from "@/assets/home/join-us/original/right.webp";
import top from "@/assets/home/join-us/original/top.webp";
import bottom from "@/assets/home/join-us/original/bottom.webp";
import useCombineWall from "@/hooks/useCombineWall";

const WallDesktop = () => {
  const { ref, bottomStyle, leftStyle, rightStyle, topStyle } =
    useCombineWall(0.6);
  return (
    <div ref={ref} className="hidden middleMobile:block pad:hidden middlePad:block">
      <img
        style={bottomStyle}
        className="absolute right-[0] bottom-0 w-[148.854vw] aspect-[2858/490.04] max-w-none max-h-none"
        src={bottom}
        alt="하단 벽"
      />
      <img
        style={leftStyle}
        className="absolute right-[92.917vw] bottom-0 w-[55.952vw] aspect-[1074.28/799.75] max-w-none max-h-none"
        src={left}
        alt="좌측 벽"
      />
      <img
        style={rightStyle}
        className="absolute left-[45.854vw] bottom-[15.85vw] w-[53.13vw] aspect-[1023.61/798.77] max-w-none max-h-none"
        src={right}
        alt="우측 벽"
      />
      <img
        style={topStyle}
        className="absolute bottom-[32.292vw] right-[0] w-[148.854vw] aspect-[2858/488.08] max-w-none max-h-none"
        src={top}
        alt="상단 벽"
      />
    </div>
  );
};

export default WallDesktop;

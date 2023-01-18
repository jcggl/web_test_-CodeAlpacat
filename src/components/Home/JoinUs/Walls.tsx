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
        className="absolute right-[-45.3vw] pad:right-[-34vw] desktop:right-[-2.4vw] top-[46.6vw] pad:top-[32.222vw] desktop:top-[441.6px] w-[221.667vw] pad:w-[204.001vw] desktop:w-[148.854vw] aspect-[798/295.05] desktop:h-[490.04px] pad:aspect-[2858/490.04] desktop:aspect-auto max-w-none max-h-none"
        src={bottom}
        alt="하단 벽"
      />
      <img
        style={leftStyle}
        className="absolute right-[93.067vw] pad:right-[93.411vw] desktop:right-[90.633vw] top-[-5.6vw] pad:top-[10.162vw] desktop:top-[132.672px] w-[83.322vw] pad:w-[76.681vw] desktop:w-[55.952vw] desktop:h-[799.75px] aspect-[299.96/481.53] pad:aspect-[1074.28/799.75] desktop:aspect-auto max-w-none max-h-none"
        src={left}
        alt="좌측 벽"
      />
      <img
        style={rightStyle}
        className="absolute right-[-45.5vw] pad:right-[-33.908vw] desktop:right-[0] top-[-57.6vw] pad:top-[-12.4vw] desktop:top-[-172px] w-[79.392vw] pad:w-[73.056vw] desktop:w-[53.13vw] desktop:h-[798.77px] aspect-[285.81/480.94] pad:aspect-[1023.61/798.77] desktop:aspect-auto max-w-none max-h-none"
        src={right}
        alt="우측 벽"
      />
      <img
        style={topStyle}
        className="absolute right-[-45.4vw] pad:right-[-34vw] desktop:right-[-2.4vw] top-[-57.222vw] pad:top-[-11.8vw] desktop:top-[-176.064px] w-[221.667vw] pad:w-[204.001vw] desktop:w-[148.854vw] desktop:h-[488.08px] aspect-[798/293.87] pad:aspect-[2858/488.08] desktop:aspect-auto max-w-none max-h-none"
        src={top}
        alt="상단 벽"
      />
    </div>
  );
};

export default Walls;

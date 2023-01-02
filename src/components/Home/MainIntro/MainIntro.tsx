import React, { useCallback, useEffect, useRef, useState } from "react";

import leftWall from "@/assets/svg/home/left-wall.svg";
import rightWall from "@/assets/svg/home/right-wall.svg";
import topWall from "@/assets/svg/home/top-wall.svg";
import bottomWall from "@/assets/svg/home/bottom-wall.svg";

const MainIntro = () => {
  const [scroll, setScroll]=useState<boolean>(false);

  return (
    <div className="w-full h-screen">
      <img
        className="h-screen absolute left-0 w-[clamp()]"
        src={leftWall}
        alt=""
      />
      <img className="h-screen absolute right-0" src={rightWall} alt="" />
      <img className="w-screen absolute top-0" src={topWall} alt="" />
      <img
        className="w-screen absolute bottom-0"
        src={bottomWall}
        alt=""
      />
    </div>
  );
};

export default MainIntro;

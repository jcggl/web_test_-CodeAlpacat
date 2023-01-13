import React, { useContext } from "react";
import intersect from "@/assets/svg/home/Intersect.svg";
import intersectReverse from "@/assets/svg/home/Intersect-reverse.svg";
import useIntersectAnimation from "@/hooks/useIntersectAnimation";
import TouchScrollContext from "@/contexts/TouchScrollContext";

const WebThreeIntro = () => {
  const { ref, evenStyle, oddStyle, textStyle} = useIntersectAnimation(0.5);
    const { touchScrollHandler, handleTouchStart } =
      useContext(TouchScrollContext);
  return (
    <div
      ref={ref}
      className="relative w-full h-screen touch-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={touchScrollHandler}
    >
      <img
        style={evenStyle}
        className="absolute object-cover h-[120vh] left-[0%] w-[25%]"
        src={intersect}
        alt="Intersect BG"
      />
      <img
        style={oddStyle}
        className="absolute object-cover h-[120vh] left-[25%] w-[25%]"
        src={intersectReverse}
        alt="Intersect BG"
      />
      <img
        style={evenStyle}
        className="absolute object-cover h-[120vh] left-[50%] w-[25%]"
        src={intersect}
        alt="Intersect BG"
      />
      <img
        style={oddStyle}
        className="absolute object-cover h-[120vh] left-[75%] w-[25%]"
        src={intersectReverse}
        alt="Intersect BG"
      />
      <div
        style={textStyle}
        className="flex justify-center items-center w-full h-full"
      >
        <h3 className="font-spline tracking-[.01em] font-medium text-main-white text-[clamp(32px,8.889vw,80px)] pad:text-[clamp(80px,7.407vw,125px)] desktop:text-[clamp(125px,6.51vw,150px)] leading-[clamp(48px,150%,100px)] pad:leading-[clamp(100px,125%,150px)] desktop:leading-[clamp(150px,120%,180px)] z-[2]">
          We will establish
          <br />
          the new standard for
          <br />
          how you represent
          <br />
          yourself in Web3.
        </h3>
      </div>
    </div>
  );
};

export default WebThreeIntro;

import React from "react";
import intersect from "@/assets/svg/home/Intersect.svg";
import intersectReverse from "@/assets/svg/home/Intersect-reverse.svg";
import useIntersectAnimation from "@/hooks/useIntersectAnimation";
// import TouchScrollContext from "@/contexts/TouchScrollContext";

const WebThreeIntro = () => {
  const { ref, FirstStyle, SecondStyle, ThirdStyle, FourthStyle, textStyle } = useIntersectAnimation(0.75);
  // const { touchScrollHandler, handleTouchStart } =
  //   useContext(TouchScrollContext);
  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden min-h-[640px] pad:min-h-[768px] desktop:min-h-[1080px]"
      // onTouchStart={handleTouchStart}
      // onTouchMove={touchScrollHandler}
    >
      <img
        style={FirstStyle}
        className="absolute object-cover left-[0%] w-[25%] h-full pad:h-auto"
        src={intersect}
        alt="Intersect BG"
      />
      <img
        style={SecondStyle}
        className="absolute object-cover left-[25%] w-[25%] h-full pad:h-auto"
        src={intersectReverse}
        alt="Intersect BG"
      />
      <img
        style={ThirdStyle}
        className="absolute object-cover left-[50%] w-[25%] h-full pad:h-auto"
        src={intersect}
        alt="Intersect BG"
      />
      <img
        style={FourthStyle}
        className="absolute object-cover left-[75%] w-[25%] h-full pad:h-auto"
        src={intersectReverse}
        alt="Intersect BG"
      />
      <div
        style={textStyle}
        className="flex justify-center items-center w-full h-full"
      >
        <h3 className="font-spline tracking-[.01em] font-medium text-main-white text-[clamp(32px,8.889vw,50px)] pad:text-[clamp(64px,5.926vw,125px)] desktop:text-[clamp(125px,6.51vw,130px)] leading-[clamp(48px,150%,100px)] pad:leading-[125%] desktop:leading-[clamp(150px,120%,180px)] z-[2]">
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

import React, { useContext } from "react";

import leftWall from "@/assets/home/main-intro/left-wall.webp";
import rightWall from "@/assets/home/main-intro/right-wall.webp";
import topWall from "@/assets/home/main-intro/top-wall.webp";
import bottomWall from "@/assets/home/main-intro/bottom-wall.webp";
import TouchScrollContext from "@/contexts/TouchScrollContext";

const MainIntro = () => {
  const { touchScrollHandler, handleTouchStart } =
    useContext(TouchScrollContext);
  return (
    <div
      className="relative w-screen h-screen touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={touchScrollHandler}
    >
      <h3 className="absolute top-[clamp(213px,59.167vw,229px)] pad:top-[clamp(229px,21.204vw,295px)] desktop:top-[clamp(295px,15.365vw,350px)] text-main-white font-spline font-semibold left-[clamp(33px,9.167vw,201px)] pad:left-[clamp(201px,18.611vw,384px)] desktop:left-[clamp(384px,20vw,100vw)] text-[clamp(40px,11.111vw,95px)] pad:text-[clamp(95px,8.796vw,150px)] desktop:text-[clamp(150px,7.813vw,100vw)] leading-[118%] animate-[mobileSlideDown_.5s_ease-out] pad:animate-[padSlideDown_.5s_ease-out] desktop:animate-[desktopSlideDown_.5s_ease-out]">
        Inspire Life
        <br />
        Into Avatars
      </h3>
      <h4 className="hidden pad:block absolute pad:top-[clamp(524px,48.519vw,741px)] desktop:top-[clamp(741px,38.594vw,1000px)] text-main-white pad:right-[clamp(175px,16.204vw,318px)] desktop:right-[clamp(318px,16.563vw,100vw)] pad:text-[clamp(20px,1.852vw,34px)] desktop:text-[clamp(34px,1.771vw,100vw)] pad:leading-[140%] desktop:leading-[130%] animate-[mobileSlideUp_.5s_ease-out] pad:animate-[padSlideUp_.5s_ease-out] desktop:animate-[desktopSlideUp_.5s_ease-out]">
        Establishing the next generation
        <br />
        communication technology
        <br />
        for the metaverse
      </h4>
      <h4 className="pad:hidden absolute top-[clamp(386px,107.222vw,524px)] text-main-white right-[clamp(31px,8.611vw,100vw)] text-[clamp(16px,4.444vw,20px)] leading-[137%] animate-[mobileSlideUp_.5s_ease-out]">
        GoodGang Labs is building
        <br />
        the next generation
        <br />
        communication platform
        <br />
        and technology for avatars
      </h4>
      <div className="relative w-screen h-screen animate-[zoomBlurIn_.5s_ease-out]">
        <img
          className="absolute left-0 w-[clamp(0px,30.856vw,100vw)] h-screen object-fill"
          src={leftWall}
          alt="좌측 벽"
        />
        <img
          className="absolute right-0 w-[clamp(0px,30.856vw,100vw)] h-screen object-fill"
          src={rightWall}
          alt="우측 벽"
        />
        <img
          className="absolute top-0 w-screen h-[clamp(0px,43.766vh,100vh)] object-fill"
          src={topWall}
          alt="상단 벽"
        />
        <img
          className="absolute bottom-0 w-screen h-[clamp(0px,43.766vh,100vh)] object-fill"
          src={bottomWall}
          alt="하단 벽"
        />
      </div>
    </div>
  );
};

export default MainIntro;

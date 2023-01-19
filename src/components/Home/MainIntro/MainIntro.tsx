import React from "react";

import leftWall from "@/assets/home/main-intro/left-wall.webp";
import rightWall from "@/assets/home/main-intro/right-wall.webp";
import topWall from "@/assets/home/main-intro/top-wall.webp";
import bottomWall from "@/assets/home/main-intro/bottom-wall.webp";
// import TouchScrollContext from "@/contexts/TouchScrollContext";

const MainIntro = () => {
  // const { touchScrollHandler, handleTouchStart } =
  //   useContext(TouchScrollContext);
  
  return (
    <div
      className="relative w-screen h-screen min-h-[640px] pad:min-h-[clamp(768px,71.111vw,1080px)] desktop:min-h-[clamp(1080px,56.250vw,1296px)] overflow-hidden"
      // onTouchStart={handleTouchStart}
      // onTouchMove={touchScrollHandler}
    >
      <div className="relative max-w-[500px] pad:max-w-[1705px] desktop:max-w-[2304px] mx-auto">
        <h3 className="absolute top-[clamp(190px,52.778vw,228px)] pad:top-[clamp(251px,23.241vw,307px)] desktop:top-[clamp(307px,15.99vw,360px)] text-main-white font-spline font-semibold left-[clamp(55px,15.278vw,66px)] pad:left-[clamp(243px,22.5vw,441px)] desktop:left-[clamp(441px,22.969vw,529px)] text-[clamp(40px,11.111vw,60px)] pad:text-[clamp(85px,7.870vw,130px)] desktop:text-[clamp(140px,7.292vw,168px)] leading-[145%] pad:leading-[119%] animate-[mobileSlideDown_.5s_ease-out] pad:animate-[padSlideDown_.5s_ease-out] desktop:animate-[desktopSlideDown_.5s_ease-out] tracking-[.01em]">
          Inspiring Life
          <br />
          Into Avatars
        </h3>
        <h4 className="hidden pad:block absolute font-spline font-light pad:top-[clamp(496px,45.926vw,690px)] desktop:top-[clamp(690px,35.938vw,828px)] text-main-white pad:right-[clamp(223px,20.648vw,475px)] desktop:right-[clamp(435px,22.656vw,522px)] pad:text-[clamp(20px,1.852vw,28px)] desktop:text-[clamp(28px,1.458vw,33px)] pad:leading-[143%] animate-[mobileSlideUp_.5s_ease-out] pad:animate-[padSlideUp_.5s_ease-out] desktop:animate-[desktopSlideUp_.5s_ease-out] tracking-[.01em]">
          Establishing the next generation
          <br />
          communication technology
          <br />
          for the metaverse
        </h4>
        <h4 className="pad:hidden absolute top-[clamp(344px,95.556vw,442.8px)] font-spline tracking-[.01em] text-main-white right-[clamp(46px,12.778vw,50px)] text-[clamp(14px,3.889vw,20px)] animate-[mobileSlideUp_.5s_ease-out] leading-[157%]">
          GoodGang Labs is building
          <br />
          the next generation
          <br />
          communication platform
          <br />
          and technology for avatars.
        </h4>
      </div>
      <div className="relative w-screen h-screen min-h-[640px] pad:min-h-[clamp(768px,71.111vw,1080px)] desktop:min-h-[clamp(1080px,56.250vw,1296px)] animate-[zoomBlurIn_.5s_ease-out]">
        <img
          className="absolute left-0 w-[clamp(0px,30.856%,100%)] h-screen min-h-[640px] pad:min-h-[clamp(768px,71.111vw,1080px)] desktop:min-h-[clamp(1080px,56.250vw,1296px)] object-fill"
          src={leftWall}
          alt="좌측 벽"
        />
        <img
          className="absolute right-0 w-[clamp(0px,30.856%,100%)] h-screen min-h-[640px] pad:min-h-[clamp(768px,71.111vw,1080px)] desktop:min-h-[clamp(1080px,56.250vw,1296px)] object-fill"
          src={rightWall}
          alt="우측 벽"
        />
        <img
          className="absolute top-0 w-screen h-[clamp(0px,43.766%,100%)] object-fill"
          src={topWall}
          alt="상단 벽"
        />
        <img
          className="absolute bottom-0 w-screen h-[clamp(0px,43.766%,100%)] object-fill"
          src={bottomWall}
          alt="하단 벽"
        />
      </div>
    </div>
  );
};

export default MainIntro;

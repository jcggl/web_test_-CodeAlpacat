import React, { useEffect, useRef } from "react";

import leftWall from "@/assets/home/main-intro/left-wall.webp";
import rightWall from "@/assets/home/main-intro/right-wall.webp";
import topWall from "@/assets/home/main-intro/top-wall.webp";
import bottomWall from "@/assets/home/main-intro/bottom-wall.webp";
import { resetScrollState, subIntroState } from "@/store/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
// import TouchScrollContext from "@/contexts/TouchScrollContext";

const MainIntro = () => {
  // const { touchScrollHandler, handleTouchStart } =
  //   useContext(TouchScrollContext);
  const ref = useRef<any>();
  const setSubIntro = useSetRecoilState(subIntroState);
  const resetScrollValue = useRecoilValue(resetScrollState);

  useEffect(() => {
    let observer: any;

    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]: any) => {
          if (entry.isIntersecting) {
            setSubIntro(false);
          }
        },
        {
          threshold: 0.8,
          rootMargin: "0px 0px 0px 0px",
        }
      );
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [setSubIntro]);

  return (
    <div
      ref={ref}
      className="relative w-screen h-screen min-h-[640px] pad:min-h-[clamp(768px,71.111vw,1080px)] desktop:min-h-[clamp(1080px,56.250vw,1296px)] overflow-hidden"
      // onTouchStart={handleTouchStart}
      // onTouchMove={touchScrollHandler}
    >
      <div className="relative max-w-[500px] pad:max-w-[1705px] desktop:max-w-[2304px] mx-auto">
        <h3
          className={`absolute top-[clamp(190px,29.688vh,100vh)] pad:top-[clamp(251px,32.682vh,100vh)] desktop:top-[clamp(307px,28.426vh,100vh)] text-main-white font-spline font-semibold left-[clamp(55px,15.278vw,66px)] pad:left-[clamp(243px,22.5vw,441px)] desktop:left-[clamp(441px,22.969vw,529px)] text-[clamp(40px,11.111vw,60px)] pad:text-[clamp(85px,7.870vw,130px)] desktop:text-[clamp(140px,7.292vw,168px)] leading-[145%] pad:leading-[119%] tracking-[.01em] ${
            resetScrollValue &&
            "animate-[mobileSlideDown_.5s_ease-out] pad:animate-[padSlideDown_.5s_ease-out] desktop:animate-[desktopSlideDown_.5s_ease-out]"
          }`}
        >
          Inspire Life
          <br />
          Into Avatars
        </h3>
        <h4
          className={`hidden pad:block absolute font-spline font-light pad:top-[clamp(496px,64.583vh,100vh)] desktop:top-[clamp(690px,63.889vh,100vh)] text-main-white pad:right-[clamp(223px,20.648vw,475px)] desktop:right-[clamp(435px,22.656vw,522px)] pad:text-[clamp(20px,1.852vw,28px)] desktop:text-[clamp(28px,1.458vw,33px)] pad:leading-[143%] tracking-[.01em] ${
            resetScrollValue &&
            "pad:animate-[padSlideUp_.5s_ease-out] desktop:animate-[desktopSlideUp_.5s_ease-out]"
          }`}
        >
          Establishing the next generation
          <br />
          communication technology
          <br />
          for the metaverse
        </h4>
        <h4
          className={`pad:hidden absolute top-[clamp(344px,53.750vh,100vh)] font-spline tracking-[.01em] text-main-white right-[clamp(46px,12.778vw,50px)] text-[clamp(14px,3.889vw,20px)] leading-[157%] ${
            resetScrollValue && "animate-[mobileSlideUp_.5s_ease-out]"
          }`}
        >
          GoodGang Labs is building
          <br />
          the next generation
          <br />
          communication platform
          <br />
          and technology for avatars.
        </h4>
      </div>
      <div
        className={`relative w-screen h-screen min-h-[640px] pad:min-h-[clamp(768px,71.111vw,1080px)] desktop:min-h-[clamp(1080px,56.250vw,1296px)] ${
          resetScrollValue && "animate-[zoomBlurIn_.5s_ease-out]"
        }`}
      >
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

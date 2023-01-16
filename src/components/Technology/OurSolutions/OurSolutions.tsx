import React from "react";
import { VideoCardList } from "@/components/Technology";

const OurSolutions = () => {
  return (
    <div className="w-full pt-[clamp(39px,10.833vw,75px)] pad:pt-[clamp(75px,6.944vw,135px)] desktop:pt-[clamp(171px,8.906vw,100vw)] pb-[clamp(23px,6.389vw,58px)] pad:pb-[clamp(32px,2.963vw,48px)] desktop:pb-[0px]">
      <h3 className="text-center font-bold font-spline tracking-[.01em] mb-[clamp(37px,10.278vw,74px)] pad:mb-[clamp(84px,7.778vw,122px)] desktop:mb-[clamp(158px,8.229vw,100vw)] text-[clamp(25px,6.944vw,42px)] pad:text-[clamp(38px,3.519vw,60px)] desktop:text-[clamp(60px,3.125vw,100vw)] leading-[130%] pad:leading-[150%]">
        Our Solutions
      </h3>
      <VideoCardList />
    </div>
  );
};

export default OurSolutions;

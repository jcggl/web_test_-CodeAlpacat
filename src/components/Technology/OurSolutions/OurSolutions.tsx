import React from "react";
import { VideoCardList } from "@/components/Technology";

const OurSolutions = () => {
  return (
    <div className="w-full pt-[clamp(39px,10.833vw,75px)] pad:pt-[clamp(75px,6.944vw,135px)] desktop:pt-[clamp(135px,7.031vw,100vw)] pb-[clamp(23px,6.389vw,58px)] desktop:pb-[clamp(58px,3.021vw,100vw)]">
      <h3 className="text-center font-bold font-spline mb-[clamp(37px,10.278vw,74px)] pad:mb-[clamp(74px,6.852vw,122px)] desktop:mb-[clamp(122px,6.354vw,100vw)] text-[clamp(25px,6.944vw,42px)] pad:text-[clamp(42px,3.889vw,60px)] desktop:text-[clamp(60px,3.125vw,100vw)] leading-[130%]">
        Our Solutions
      </h3>
      <VideoCardList />
    </div>
  );
};

export default OurSolutions;

import React from "react";
import { VideoCardList } from "@/components/Technology";

const OurSolutionScreen = () => {
  return (
    <div className="w-full desktop:pt-135pxr desktop:pb-58pxr">
      <h3 className="text-center font-bold font-spline mobile:mb-37pxr pad:mb-74pxr desktop:mb-122pxr mobile:text-[1.5625rem] pad:text-[2.625rem] desktop:text-[3.75rem] mobile:leading-[2rem] pad:leading-[5rem]">
        Our Solutions
      </h3>
      <VideoCardList/>
    </div>
  );
};

export default OurSolutionScreen;

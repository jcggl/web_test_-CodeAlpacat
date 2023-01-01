import React from "react";
import { VideoCardList } from "@/components/Technology";

const OurSolutions = () => {
  return (
    <div className="w-full mobile:pt-39pxr pad:pt-75pxr desktop:pt-135pxr mobile:pb-23pxr desktop:pb-58pxr">
      <h3 className="text-center font-bold font-spline mobile:mb-37pxr pad:mb-74pxr desktop:mb-122pxr mobile:text-[1.5625rem] pad:text-[2.625rem] desktop:text-[3.75rem] mobile:leading-[2rem] pad:leading-[5rem]">
        Our Solutions
      </h3>
      <VideoCardList />
    </div>
  );
};

export default OurSolutions;

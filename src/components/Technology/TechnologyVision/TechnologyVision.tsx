import React from "react";
import techsvg1 from "@/assets/svg/technology/tech-1.svg";
import techsvg2 from "@/assets/svg/technology/tech-2.svg";
import techsvg3 from "@/assets/svg/technology/tech-3.svg";

const TechnologyVision = () => {
  return (
    <div className="flex flex-col w-full bg-black h-screen mobile:min-h-[640px] pad:min-h-[768px] desktop:min-h-[1080px] text-center text-main-white">
      <h3 className="font-bold font-spline mobile:pt-60pxr pad:pt-105pxr desktop:pt-160pxr tracking-[.01em] mobile:text-[1.5rem] pad:text-[2.625rem] desktop:text-[4.125rem] mobile:leading-[2rem] pad:leading-[3.75rem] desktop:leading-[5rem]">
        Focus on your product,
        <br />
        and let us handle the rest.
      </h3>
      <div className="flex mobile:flex-col pad:flex-row justify-center items-center h-full mobile:gap-y-[1.5rem] pad:gap-y-[0px] pad:gap-x-[7.3rem] desktop:gap-x-[4rem] desktop:pb-120pxr mobile:text-[0.8125rem] pad:text-[1rem] desktop:text-[1.75rem] mobile:leading-[1.1875rem] pad:leading-[1.25rem] desktop:leading-[2.5rem]">
        <div className="flex pad:flex-col-reverse desktop:flex-col pad:justify-between mobile:items-center pad:items-start mobile:w-265pxr pad:w-203pxr desktop:w-396pxr">
          <div className="flex justify-center items-center aspect-square mx-auto mobile:pr-35pxr pad:pr-[0px] mobile:w-125pxr pad:w-203pxr desktop:w-308pxr">
            <img
              className="mobile:w-79pxr pad:w-151pxr desktop:w-230pxr"
              src={techsvg1}
              alt=""
            />
          </div>
          <h4 className="mx-auto desktop:mt-30pxr mobile:w-126pxr pad:w-150pxr pad:h-74pxr desktop:h-auto desktop:w-396pxr">
            One API works with any OS, device, and browser.
          </h4>
        </div>
        <div className="flex mobile:flex-row-reverse pad:flex-col-reverse desktop:flex-col mobile:items-center pad:items-start mobile:w-265pxr pad:w-203pxr desktop:w-396pxr">
          <div className="flex justify-center items-center aspect-square mx-auto mobile:w-125pxr pad:w-203pxr desktop:w-308pxr">
            <img
              className="mobile:w-125pxr pad:w-203pxr desktop:w-308pxr"
              src={techsvg2}
              alt=""
            />
          </div>
          <h4 className="mx-auto desktop:mt-30pxr mobile:pr-35pxr pad:pr-[0px] mobile:w-115pxr pad:w-170pxr pad:h-74pxr desktop:h-auto desktop:w-252pxr">
            Simple and easy integration.
          </h4>
        </div>
        <div className="flex pad:flex-col-reverse desktop:flex-col mobile:items-center pad:items-start pad:justify-between mobile:w-265pxr pad:w-203pxr desktop:w-396pxr">
          <div className="flex justify-center items-center aspect-square mx-auto mobile:pr-35pxr pad:pr-[0px] mobile:w-125pxr pad:w-203pxr desktop:w-308pxr">
            <img
              className="mobile:w-76pxr pad:w-128pxr desktop:w-194pxr"
              src={techsvg3}
              alt=""
            />
          </div>
          <h4 className="mx-auto desktop:mt-30pxr mobile:w-102pxr pad:w-120pxr pad:h-74pxr desktop:h-auto desktop:w-256pxr">
            Low maintenance cost.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TechnologyVision;

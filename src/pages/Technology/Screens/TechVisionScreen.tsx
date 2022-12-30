import React from 'react'
import techsvg1 from "@/assets/svg/TechSVG/tech-1.svg";
import techsvg2 from "@/assets/svg/TechSVG/tech-2.svg";
import techsvg3 from "@/assets/svg/TechSVG/tech-3.svg";

const TechVisionScreen = () => {
  return (
    <div className="w-full bg-black h-screen text-main-white">
      <h3>
        Focus on your product,
        <br />
        and let us handle the rest.
      </h3>
      <div className="flex">

      <img className="w-228pxr h-166pxr" src={techsvg1} alt="" />
      <img src={techsvg2} alt="" />
      <img src={techsvg3} alt="" />
      </div>
    </div>
  );
}

export default TechVisionScreen
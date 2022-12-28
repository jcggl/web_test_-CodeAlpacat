import React from "react";
import { HamburgerButtonType } from "./NavRouter.types";

const HamburgerButton = ({location}:HamburgerButtonType) => {
  
  const isHomeBorder: string =
    location.pathname === "/" ? "border-[#EDEDED]" : "border-[#191919]";

  return (
    <div className="mobile:block pad:hidden flex flex-col justify-between pt-3pxr">
      <div
        className={`border border-solid mb-10pxr w-26pxr ${isHomeBorder}`}
      ></div>
      <div className={`border border-solid w-26pxr ${isHomeBorder}`}></div>
    </div>
  );
};

export default HamburgerButton;

import React, { useContext } from "react";
import hamburger from "@/assets/common/hamburger.svg";
import NavigationContext from "@/contexts/NavigationContext";

import { HamburgerButtonType } from "./NavRouter.types";

const HamburgerButton = ({location}:HamburgerButtonType) => {
  const {toggle, toggleNavigation} = useContext(NavigationContext)

  const isHomeBorder: string =
    location.pathname === "/" || toggle
      ? "text-main-white"
      : "text-main-black filter invert";

  return (
    <div className="block pad:hidden flex justify-center cursor-pointer" onClick={toggleNavigation}>
      <img
        className={`w-[clamp(44px,12.222vw,70px)] ${isHomeBorder}`}
        src={hamburger}
        alt="모바일 햄버거 버튼"
      />
    </div>
  );
};

export default HamburgerButton;

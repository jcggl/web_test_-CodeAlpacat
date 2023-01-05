import React, { useContext } from "react";
import { HamburgerButtonType } from "./NavRouter.types";
import hamburger from "../../../../../assets/common/hamburger.svg";
import NavigationContext from "@/contexts/NavigationContext";

const HamburgerButton = ({location}:HamburgerButtonType) => {
  const {toggle, toggleNavigation} = useContext(NavigationContext)

  const isHomeBorder: string =
    location.pathname === "/" || toggle
      ? "text-main-white"
      : "text-main-black filter invert";

  return (
    <div className="mobile:block pad:hidden flex justify-center cursor-pointer" onClick={toggleNavigation}>
      <img
        className={`w-[clamp(44px,12.222vw,70px)] ${isHomeBorder}`}
        src={hamburger}
        alt="모바일 햄버거 버튼"
      />
    </div>
  );
};

export default HamburgerButton;

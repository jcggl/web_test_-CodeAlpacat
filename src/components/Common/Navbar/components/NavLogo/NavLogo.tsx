import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../../../../../assets/logo/logo2.svg";
import logo from "../../../../../assets/logo/logo.svg";
import { NavLogoType } from "./NavLogo.types";
import NavigationContext from "@/contexts/NavigationContext";

const NavLogo = ({ location, checkActiveLink }:NavLogoType) => {
  const { toggle } = useContext(NavigationContext)
  const isHomeLogo: string =
    location.pathname === "/" || toggle
      ? "text-main-white"
      : "text-main-black filter invert";

  return (
    <NavLink
      to="/"
      className={`${isHomeLogo}`}
      onClick={() => checkActiveLink("/")}
    >
      <img
        className="hidden pad:block pad:w-[clamp(144px,13.333vw,221px)] desktop:w-[clamp(221px,11.51vw,270px)] aspect-[221/65]"
        src={logo2}
        alt="굳갱랩스 로고"
      />
      <img
        className={`block pad:hidden w-[clamp(47.52px,13.2vw,80px)] aspect-[47.45/32]`}
        src={logo}
        alt="굳갱랩스 로고"
      />
    </NavLink>
  );
};

export default NavLogo;

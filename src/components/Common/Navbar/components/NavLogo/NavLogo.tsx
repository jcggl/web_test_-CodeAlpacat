import React from "react";
import { NavLink } from "react-router-dom";

import logo2 from "../../../../../assets/logo/logo2.png";
import logo from "../../../../../assets/logo/logo.png";
import { NavLogoType } from "./NavLogo.types";

const NavLogo = ({ location, checkActiveLink }:NavLogoType) => {

  const isHomeLogo: string =
    location.pathname === "/"
      ? "text-main-white"
      : "text-main-black filter invert";

  return (
    <NavLink
      to="/"
      className={`${isHomeLogo}`}
      onClick={() => checkActiveLink("/")}
    >
      <img
        className="mobile:hidden pad:block pad:w-144pxr desktop:w-221pxr aspect-[221/65]"
        src={logo2}
        alt="굳갱랩스 로고"
      />
      <img
        className={`mobile:block pad:hidden w-[2.97rem] p- aspect-[47.45/32]`}
        src={logo}
        alt="굳갱랩스 로고"
      />
    </NavLink>
  );
};

export default NavLogo;

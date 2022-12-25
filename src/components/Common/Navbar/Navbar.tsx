import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo2 from "../../../assets/logo/logo2.png";
const PATH: string[] = ["about", "technology", "product", "team"];

const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState<string>("/");

  const isHome: string =
    location.pathname === "/" ? "text-main-white" : "text-main-black";
  const isNotHome: string =
    location.pathname === "/" ? "text-main-black" : "text-main-white";
  const isHomeBackground: string =
    location.pathname === "/" ? "bg-main-white" : "bg-main-black";
  const isHomeLogo: string =
    location.pathname === "/"
      ? "text-main-white"
      : "text-main-black filter invert";
  const checkActiveLink = (current: string): void => {
    setSelected("/" + current);
  };

  return (
    <>
      <nav
        className={`fixed flex justify-between items-center w-full p-25pxr bg-transparent`}
      >
        <NavLink
          to="/"
          className={`${isHomeLogo}`}
          onClick={() => checkActiveLink("/")}
        >
          <img src={logo2} alt="굳갱랩스 로고" />
        </NavLink>
        <div className="flex justify-center items-center gap-x-1 text-xl">
          {PATH.map((address, index) => {
            const selectedFont =
              selected === "/" + address ? "font-bold" : "font-normal";
            return (
              <NavLink
                key={`NavLinkKey${index}`}
                to={`/${address}`}
                className={`flex justify-center items-center w-128pxr h-40pxr ${isHome} ${selectedFont}`}
                onClick={() => checkActiveLink(address)}
              >
                {address}
              </NavLink>
            );
          })}
          <div
            className={`flex justify-center items-center w-174pxr h-48pxr ${isHomeBackground} rounded-[5rem]`}
          >
            <a
              href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center ${isNotHome} font-medium font-spline`}
            >
              We're hiring!
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

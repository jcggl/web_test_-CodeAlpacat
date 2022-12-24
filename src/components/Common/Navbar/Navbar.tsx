import React from "react";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const PATH: string[] = ["about", "technology", "product", "team"];

const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState<string>("/");

  const isHome: string =
    location.pathname === "/" ? "text-nav-white" : "text-nav-black";
  const isNotHome: string =
    location.pathname === "/" ? "text-nav-black" : "text-nav-white";
  const isHomeBackground: string =
    location.pathname === "/" ? "bg-nav-white" : "bg-nav-black";
  const isHomeLogo: string =
    location.pathname === "/"
      ? "text-nav-white"
      : "text-nav-black filter invert";
  const checkActiveLink = (current: string): void => {
    setSelected("/" + current);
  };

  return (
    <>
      <nav
        className={`fixed flex justify-between items-center w-full bg-transparent p-25pxr`}
      >
        <NavLink
          to="/"
          className={`${isHomeLogo}`}
          onClick={() => checkActiveLink("/")}
        >
          <img src="assets/logo/logo2.png" alt="굳갱랩스 로고" />
        </NavLink>
        <div className="flex justify-center items-center text-xl gap-x-1">
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
            className={`flex justify-center items-center w-174pxr h-48pxr rounded-full ${isHomeBackground}`}
          >
            <a
              href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center ${isNotHome} font-medium`}
            >
              We're hiring!
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

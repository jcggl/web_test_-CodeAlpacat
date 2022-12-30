import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { NavRouterType } from "./NavRouter.types";

const PATH: string[] = ["about", "technology", "product", "team"];

const NavRouters = ({ location, selected, checkActiveLink }: NavRouterType) => {
  const isHome: string =
    location.pathname === "/" ? "text-main-white" : "text-main-black";
  const isHomeBackground: string =
    location.pathname === "/" ? "bg-main-white" : "bg-main-black";
  const isNotHome: string =
    location.pathname === "/" ? "text-main-black" : "text-main-white";

  return (
    <>
      {PATH.map((address, index) => {
        const selectedFont =
          selected === "/" + address ? "font-bold" : "font-normal";
        return (
          <NavLink
            key={`NavLinkKey${index}`}
            to={`/${address}`}
            className={`flex justify-center items-center pad:w-72pxr desktop:w-128pxr ${isHome} ${selectedFont}`}
            onClick={() => checkActiveLink(address)}
          >
            {address}
          </NavLink>
        );
      })}
      <div
        className={`flex justify-center items-center mobile:w-156pxr mobile:w-46pxr pad:w-104pxr pad:h-28pxr desktop:w-174pxr desktop:h-48pxr ${isHomeBackground} rounded-[5rem]`}
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
    </>
  );
};

export default NavRouters;

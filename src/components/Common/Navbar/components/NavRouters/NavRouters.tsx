import React from "react";
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
            className={`flex justify-center items-center pad:w-[clamp(72px,6.667vw,140px)] ${isHome} ${selectedFont}`}
            onClick={() => checkActiveLink(address)}
          >
            {address}
          </NavLink>
        );
      })}
      <div
        className={`flex justify-center items-center pad:w-[clamp(104px,9.63vw,174px)] desktop:w-[clamp(174px,9.063vw,200px)] pad:h-[clamp(28px,2.593vw,48px)] desktop:h-[48px,2.5vw,70px] ${isHomeBackground} rounded-[5rem]`}
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

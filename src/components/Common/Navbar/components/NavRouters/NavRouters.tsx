import React from "react";
import { NavLink } from "react-router-dom";

import { NavRouterType } from "./NavRouter.types";

const PATH: string[] = ["About", "Technology", "Product", "Team"];

const NavRouters = ({ location, selected, checkActiveLink, isTechVision }: NavRouterType) => {
  const isHome: string =
    location.pathname === "/" || isTechVision ? "text-main-white" : "text-main-black";
  const isHomeBackground: string =
    location.pathname === "/" || isTechVision
      ? "bg-main-white"
      : "bg-main-black";
  const isNotHome: string =
    location.pathname === "/" || isTechVision
      ? "text-main-black"
      : "text-main-white";

  return (
    <>
      {PATH.map((address, index) => {
        const selectedFont =
          selected === "/" + address ? "font-bold" : "font-normal";
        return (
          <NavLink
            key={`NavLinkKey${index}`}
            to={`/${address}`}
            className={`flex justify-center items-center pad:w-[clamp(74px,6.852vw,100px)] desktop:w-[clamp(128px,6.667vw,153.6px)] ${isHome} ${selectedFont} transition delay-150 hover:opacity-70`}
            onClick={() => checkActiveLink(address)}
          >
            {address}
          </NavLink>
        );
      })}
      <div
        className={`flex justify-center items-center pad:w-[clamp(96px,8.889vw,154px)] desktop:w-[clamp(145px,7.552vw,174px)] ${isHomeBackground} rounded-[5rem] transition delay-150 hover:opacity-70 aspect-[96/28]`}
      >
        <a
          href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-center ${isNotHome} font-medium font-spline tracking-[.01em]`}
        >
          We're hiring!
        </a>
      </div>
    </>
  );
};

export default NavRouters;

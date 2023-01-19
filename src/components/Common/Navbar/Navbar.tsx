import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useHideOnScroll from "@/hooks/useHideOnScroll";
import useReverseColor from "@/hooks/useReverseColor";
import NavigationContext from "@/contexts/NavigationContext";

import HamburgerButton from "./components/HamburgerButton/HamburgerButton";
import NavRouters from "./components/NavRouters/NavRouters";
import NavLogo from "./components/NavLogo/NavLogo";

const Navbar = () => {
  const location = useLocation();
  const { ref, isTechVision } = useReverseColor();
  const { style} = useHideOnScroll();
  const { closeNavigation } = useContext(NavigationContext);
  const [selected, setSelected] = useState<string>("/");

  const checkActiveLink = (current: string): void => {
    setSelected("/" + current);
    closeNavigation();
  };

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <nav
      ref={ref}
      style={style}
      className="fixed flex justify-between items-center w-full px-[clamp(19px,5.278vw,30px)] pad:px-[clamp(160px,14.815vw,260px)] desktop:px-[clamp(260px,13.542vw,100vw)] pt-[clamp(16px,4.444vw,20px)] pad:pt-[clamp(20px,1.852vw,34px)] desktop:pt-[clamp(25px,1.302vw,30px)] bg-transparent z-[100] animate-[navSlideDown_.5s_ease-out] transition ease-in-out duration-[270ms]"
    >
      <NavLogo
        location={location}
        checkActiveLink={checkActiveLink}
        isTechVision={isTechVision}
      />
      <div className="hidden pad:flex justify-center items-center font-spline pad:gap-x-[clamp(8px,0.741vw,12px)] desktop:gap-x-[clamp(10px,0.521vw,12px)] pad:text-[clamp(12px,1.111vw,18px)] desktop:text-[clamp(18px,0.938vw,21.6px)] leading-[166%]">
        <NavRouters
          isTechVision={isTechVision}
          location={location}
          selected={selected}
          checkActiveLink={checkActiveLink}
        />
      </div>
      <HamburgerButton location={location} isTechVision={isTechVision} />
    </nav>
  );
};

export default Navbar;

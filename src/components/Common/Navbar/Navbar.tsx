import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useHideOnScroll from '@/hooks/useHideOnScroll';
import useReverseColor from "@/hooks/useReverseColor";
import NavigationContext from "@/contexts/NavigationContext";

import HamburgerButton from "./components/HamburgerButton/HamburgerButton";
import NavRouters from "./components/NavRouters/NavRouters";
import NavLogo from "./components/NavLogo/NavLogo";

const Navbar = () => {
  const location = useLocation();
  const { ref, isTechVision } = useReverseColor();
  const {style} = useHideOnScroll();
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
      className="fixed flex justify-between items-center w-full px-[clamp(19px,5.278vw,30px)] pt-[clamp(16px,4.444vw,20px)] pad:p-[clamp(20px,1.852vw,34px)] pad:pb-[0px] desktop:p-[clamp(34px,1.771vw,36px)] desktop:pb-[0px] bg-transparent z-[100] animate-[navSlideDown_.5s_ease-out] transition ease-in-out duration-[320ms]"
    >
      <NavLogo
        location={location}
        checkActiveLink={checkActiveLink}
        isTechVision={isTechVision}
      />
      <div className="hidden pad:flex justify-center items-center pad:gap-x-[clamp(6px,0.556vw,9px)] desktop:gap-x-[clamp(9px,0.469vw,12px)] pad:text-[clamp(12px,1.111vw,20px)] desktop:text-[clamp(20px,1.042vw,28px)]">
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

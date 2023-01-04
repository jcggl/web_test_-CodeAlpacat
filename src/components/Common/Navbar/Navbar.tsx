import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HamburgerButton from "./components/HamburgerButton/HamburgerButton";
import NavRouters from "./components/NavRouters/NavRouters";
import NavLogo from "./components/NavLogo/NavLogo";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState<string>("/");

  const checkActiveLink = (current: string): void => {
    setSelected("/" + current);
  };

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <>
      <nav className="fixed flex justify-between items-center w-full mobile:px-19pxr mobile:pt-[clamp(16px,4.444vw,20px)] pad:p-[clamp(20px,1.852vw,34px)] desktop:p-[clamp(34px,1.771vw,36px)] bg-transparent z-[100] animate-[navSlideDown_.5s_ease-out]">
        <NavLogo location={location} checkActiveLink={checkActiveLink} />
        <div className="mobile:hidden pad:flex justify-center items-center pad:gap-x-[clamp(6px,0.556vw,9px)] desktop:gap-x-[clamp(9px,0.469vw,12px)] pad:text-[clamp(12px,1.111vw,20px)] desktop:text-[clamp(20px,1.042vw,28px)]">
          <NavRouters
            location={location}
            selected={selected}
            checkActiveLink={checkActiveLink}
          />
        </div>
        <HamburgerButton location={location} />
        <Modal />
      </nav>
    </>
  );
};

export default Navbar;

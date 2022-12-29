import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import HamburgerButton from './components/HamburgerButton/HamburgerButton';
import NavRouters from "./components/NavRouters/NavRouters";
import NavLogo from './components/NavLogo/NavLogo';

const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState<string>("/");

  const checkActiveLink = (current: string): void => {
    setSelected("/" + current);
  };

  return (
    <>
      <nav className="fixed flex justify-between items-center w-full mobile:px-19pxr mobile:pt-16pxr pad:p-20pxr desktop:p-34pxr bg-transparent z-[100]">
        <NavLogo location={location} checkActiveLink={checkActiveLink}/>
        <div className="mobile:hidden pad:flex justify-center items-center pad:gap-x-[0.375rem] desktop:gap-x-[0.5625rem] pad:text-[0.75rem] desktop:text-[1.25rem]">
          <NavRouters location={location} selected={selected} checkActiveLink={checkActiveLink}/>
        </div>
        <HamburgerButton location={location}/>
      </nav>
    </>
  );
};

export default Navbar;

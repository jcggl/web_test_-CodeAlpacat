import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationContext from "@/contexts/NavigationContext";

const PATH: string[] = ["about", "technology", "product", "team"];

const ModalRouter = () => {
  const location = useLocation();
  const { toggleNavigation } = useContext(NavigationContext);
  const [selected, setSelected] = useState<string>("/");

  const checkActiveLink = (current: string): void => {
    setSelected("/" + current);
    toggleNavigation()
  };

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <div className="flex flex-col justify-center pl-[clamp(52px,14.444vw,600px)] w-full h-screen font-spline">
      {PATH.map((address, index) => {
        const selectedFont =
          selected === "/" + address ? "text-main-white" : "text-main-grey";
        return (
          <NavLink
            key={`NavLinkKey${index}`}
            to={`/${address}`}
            className={`block h-[clamp(46px,12.778vw,80px)] text-[clamp(30px,8.333vw,45px)] mb-[clamp(21px,5.833vw,30px)] ${selectedFont}`}
            onClick={() => checkActiveLink(address)}
          >
            {address}
          </NavLink>
        );
      })}
      <div
        className={`flex justify-center items-center text-[clamp(20px,5.556vw,30px)] w-[clamp(156px,43.333vw,245px)] h-[clamp(46px,12.778vw,64px)] bg-main-grey rounded-[5rem] mt-[clamp(14px,3.889vw,21px)]`}
      >
        <a
          href="https://www.notion.so/goodganglabs/GoodGang-Careers-2565b36b1e134c42ac1a56b8a6b45b47"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-center text-black font-medium`}
        >
          We're hiring!
        </a>
      </div>
    </div>
  );
};

export default ModalRouter;
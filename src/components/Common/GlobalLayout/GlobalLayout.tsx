import React, { useContext, useEffect } from "react";
import { Navbar, Footer } from "@/components/Common";
import { Outlet, useLocation } from "react-router-dom";
import Modal from "@/components/Common/Modal/Modal";
import NavigationContext from "@/contexts/NavigationContext";

const GlobalLayout = () => {
  const { pathname } = useLocation();
  const { toggle } = useContext(NavigationContext);
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return (
    <div>
      <Navbar />
      {toggle && <Modal />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default GlobalLayout;

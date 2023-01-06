import React, { useEffect } from "react";
import { Navbar, Footer } from "@/components/Common";
import { Outlet, useLocation } from "react-router-dom";

const GlobalLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default GlobalLayout;

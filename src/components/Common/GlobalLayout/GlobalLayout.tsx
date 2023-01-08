import React, { useEffect } from "react";
import { Navbar, Footer } from "@/components/Common";
import { Outlet, useLocation } from "react-router-dom";
import Modal from "@/components/Common/Modal/Modal";

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
      <Modal />
      <Outlet />
      <Footer />
    </>
  );
};

export default GlobalLayout;

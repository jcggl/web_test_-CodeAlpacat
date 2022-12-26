import React from "react";
import { Navbar, Footer } from "@/components/Common";
import { Outlet } from "react-router-dom";
const GlobalLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default GlobalLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const FooterContainer = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default FooterContainer;

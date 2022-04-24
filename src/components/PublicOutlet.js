import React from "react";
import Header from "../view/website/layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../view/website/layout/Footer";

export default function PublicOutlet() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

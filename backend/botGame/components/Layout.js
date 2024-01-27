import React from "react";
import Navbar from "./Navbar";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const Layout = ({ children }) => {
  return (
    <>
      <div className="background-img"> {children} </div>
    </>
  );
};

export default Layout;

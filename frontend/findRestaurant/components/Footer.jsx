import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});



const Navbar = () => {

  return (
    <div className="footer">
      <Container maxWidth="xl" className={roboto.className}>
        <div className="my-4">
        <strong className="footer-text">Footer</strong>

        </div>
      </Container>
    </div>
  );
};

export default Navbar;

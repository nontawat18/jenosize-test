import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRouter } from "next/router";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../asset/Screenshot_2024-01-27_200907-removebg-preview.ico";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    blue: {
      main: "#8ec1e2",
      light: "#8ec1e2",
      dark: "#8ec1e2",
      contrastText: "#FFFFFF",
    },
    white: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#FFFFFF",
    },
    btn: {
      main: "#635ee7",
      light: "#635ee7",
      dark: "#635ee7",
      contrastText: "#FFFFFF",
    },
  },
});

const Navbar = ({ onClick }) => {
  const [open, setOpen] = React.useState(false);

  const [searchText, setSearchText] = React.useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleButtonClick = () => {
    const data = searchText;
    onClick(data);
  };

  const handleEnterPress = async (event) => {
      const data = searchText;
      onClick(data);
    
  };

  return (
    <div className="back-appbar">
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        className="appbar"
      >
        <Container maxWidth="xl" className={roboto.className}>
          <Toolbar disableGutters className="justify-center align-center">
            <Grid container spacing={2} className="justify-center align-center">
              <Grid
                item
                xs={12}
                lg={9}
                md={9}
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  container
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={2} className="" md={2}>
                    <Image
                      src={logo}
                      alt="Picture of the author"
                      // className="logo-img"
                    />
                  </Grid>
                  <Grid item xs={10} className="" md={10}>
                    <strong className="topbar-name">Website Name</strong>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={3} md={3}>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { md: "flex", xs: "none" },
                  }}
                  className="jsutify-end mt-16"
                >
                  <strong>Search</strong>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { md: "flex", xs: "none" },
                  }}
                  className="jsutify-end "
                >
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                    elevation={0}
                    className="input-search "
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search"
                      inputProps={{ "aria-label": "search" }}
                      value={searchText}
                      onChange={handleInputChange}
                      onKeyDown={handleEnterPress}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                      onClick={handleButtonClick}
                    >
                      <SearchIcon className="icon-search" />
                    </IconButton>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;

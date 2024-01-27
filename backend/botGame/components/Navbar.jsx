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
import logo from "../asset/pet-removebg-preview.ico";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    bluee: {
      main: "#635ee7",
      light: "#635ee7",
      dark: "#635ee7",
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
const StyleButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  // border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: "#635ee7",
  borderColor: "#635ee7",
  borderRadius: 25,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#635ee7",
    borderColor: "#635ee7",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#635ee7",
    borderColor: "#635ee7",
  },
  "&:focus": {
    boxShadow: "#635ee7",
    backgroundColor: "#635ee7",
    borderColor: "#635ee7",
  },
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "500",
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgb(200, 200, 200)",
    "&.Mui-selected": {
      color: "#635ee7",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 13,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    // if (prevOpen.current === true && open === false) {
    //   anchorRef.current.focus();
    // }

    prevOpen.current = open;
  }, [open]);
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  React.useEffect(() => {
    // Use the router to set the value based on the path
    if (router.asPath === "/") {
      setValue(0);
    } else if (router.asPath === "/store") {
      setValue(1);
    } else if (router.asPath === "/about") {
      setValue(2);
    } else if (router.asPath === "/contact") {
      setValue(3);
    } else if (router.asPath === "/account") {
      setValue(4);
    }
  }, [router.asPath]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);

    console.log(newValue);
  };

  return (
    <div className="back-appbar">
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        className="appbar"
      >
            <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "right top"
                              : "right bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>
                                My account
                              </MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={4} md={4}>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
              
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Image
                        src={logo}
                        alt="Picture of the author"
                        className="logo-img"
                      />
                    </Grid>
                    <Grid item xs={4} className="align-center">
                      <ThemeProvider theme={theme}>
                        <StyledBadge
                          badgeContent={4}
                          color="bluee"
                          className="pr-1"
                          overlap="circular"
                        >
                          <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="white"
                          >
                            <ShoppingCartIcon color="bluee" />
                          </IconButton>
                        </StyledBadge>
                      </ThemeProvider>
                      <ThemeProvider theme={theme}>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleToggle}
                          color="white"
                        >
                          <MenuIcon color="white" />
                        </IconButton>
                      </ThemeProvider>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Image
                    src={logo}
                    alt="Picture of the author"
                    className="logo-img"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={8} md={8}>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { md: "flex", xs: "none" },
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={10} md={2}>
                      <StyledTabs
                        value={value}
                        onChange={handleChange}
                        aria-label="styled tabs example"
                      >
                        <StyledTab label="Home" href="/" />
                        <StyledTab label="Store" href="/store" />
                        <StyledTab label="About Us" href="/about" />
                        <StyledTab label="Contact Us" href="/contact" />
                        <StyledTab label="My Account" href="/account" />
                      </StyledTabs>
                    </Grid>
                    <Grid item xs={12} lg={2} md={2} className="">
                      <strong className="str-count">$0.00</strong>
                      <ThemeProvider theme={theme}>
                        <Badge
                          badgeContent={4}
                          color="bluee"
                          overlap="circular"
                        >
                          <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="white"
                          >
                            <ShoppingCartIcon color="bluee" />
                          </IconButton>
                        </Badge>
                      </ThemeProvider>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" className={roboto.className}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <span className="span-para">Best Quality Pets</span>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <strong className="strong-para">
                Amazing Variety Of Pets Starting Just $50
              </strong>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button variant="contained" className="btn">
                Show Now
              </Button>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <span className="span-para">Best Quality Pets</span>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <strong className="strong-para">
                Amazing Variety Of Pets Starting Just $50
              </strong>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <Button variant="contained" className="btn">
                Show Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navbar;

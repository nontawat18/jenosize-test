import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Roboto } from "@next/font/google";
import HomeIcon from "@mui/icons-material/Home";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
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
    <div className="back-appbar ">
      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        className="appbar align-end"
      >
        <Container maxWidth="xl" className={roboto.className}>
          <Toolbar disableGutters className="mt-16">
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
                  <Grid
                    item
                    xs={2}
                    md={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <IconButton aria-label="HomeIcon">
                      <HomeIcon className="icon-color" />
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    md={10}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center"
                    >
                      <Grid item justifyContent="center" alignItems="center">
                        <Grid
                          item
                          xs={12}
                          md={12}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <strong>All Report</strong>
                          <IconButton aria-label="HomeIcon">
                            <KeyboardArrowDownIcon className="icon-color" />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={2} md={1}>
                    <IconButton aria-label="HomeIcon">
                      <TuneIcon className="icon-color" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;

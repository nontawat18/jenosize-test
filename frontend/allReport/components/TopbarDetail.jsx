import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Roboto } from "@next/font/google";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  

 
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
                    xs={3}
                    md={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    
                    <IconButton aria-label="HomeIcon" href={"/"}>
                      <KeyboardArrowLeftIcon className="icon-color" />
                    </IconButton>
                    <span>Back</span>
                  </Grid>
                  <Grid
                    item
                    xs={7}
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
                          <strong>OKRs Report</strong>
                          
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item xs={2} md={1}>
                    <IconButton aria-label="HomeIcon">
                      <MoreHorizIcon className="icon-color" />
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

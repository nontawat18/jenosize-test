
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Roboto } from "@next/font/google";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import TopbarDetail from "../components/TopbarDetail";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import logo from "../asset/picture.png";
import Image from "next/image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InputBase from '@mui/material/InputBase';


const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Detail() {
  const ListPaper = styled(Paper)(({ theme }) => ({
    padding: 4,
    ...theme.typography.body2,
    // textAlign: "left",
  }));
  const BarPaper = styled(Paper)(({ theme }) => ({
    padding: 4,
    ...theme.typography.body2,
    textAlign: "center",
  }));
  return (
    <div>
      <TopbarDetail />
      <Container maxWidth="lg" className={roboto.className}>
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
          }}
          className=" my-4"
        >
          <Grid container spacing={1} className="" alignItems="center">
            <Grid item xs={12} lg={12} md={12} className="">
              <ListPaper
                elevation={0}
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "left",
                }}
                className=" justify-center "
              >
                <Grid
                  container
                  spacing={1}
                  className=""
                  justifyContent=""
                  alignItems="center"
                >
                  <Grid item xs={8} lg={8} md={8} className="">
                    <Grid
                      container
                      spacing={1}
                      className=""
                      alignItems="center"
                    >
                      <Grid item xs={2} lg={2} md={12} className="">
                        <Avatar sx={{ width: 42, height: 42 }} className="">
                          <PersonIcon />
                        </Avatar>
                      </Grid>
                      <Grid item xs={10} lg={10} md={10} className="">
                        <strong>Somsay Jaidee</strong>
                        <br />
                        <small>Design Director</small>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={4}
                    lg={4}
                    md={4}
                    className=""
                    justifyContent="end"
                  >
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-end"
                    >
                      <PostAddIcon fontSize="small" className="pr-1" />
                      <small>14/01/2024</small>
                    </Box>
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-end"
                    >
                      <MapsUgcOutlinedIcon fontSize="small" className="pr-1" />
                      <small>12:45</small>
                    </Box>
                  </Grid>
                </Grid>
              </ListPaper>
            </Grid>
            <Grid item xs={12} lg={12} md={12} className="my-4">
              <span className="text-content">Content 1</span>
              <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, quae esse.
              </span>
            </Grid>
            <Grid item xs={12} lg={12} md={12} className="mb-4">
              <span className="text-content">Content 2</span>
              <br />
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                autem ad incidunt perferendis nulla.
              </span>
            </Grid>
            <Grid item xs={12} lg={12} md={12} className="mb-4">
              <span className="text-content">Content 3</span>
              <br />
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur nihil dolores, laudantium assumenda magnam
                veritatis iure optio saepe sint, consequatur, vitae porro.
              </span>
            </Grid>
            <Grid item xs={12} lg={12} md={12} className="mb-4">
              <span className="text-content">Image</span>
              <Grid container spacing={1} className="mt-4" alignItems="center">
                <Grid item xs={3} lg={3} md={3} className="">
                  <Image src={logo} alt="Picture of the author" />
                </Grid>
                <Grid item xs={3} lg={3} md={3} className="">
                  <Image src={logo} alt="Picture of the author" />
                </Grid>
                <Grid item xs={3} lg={3} md={3} className="">
                  <Image src={logo} alt="Picture of the author" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12} md={12} className="mb-4">
              <span className="text-content">Attach File</span>
              <br />
              <IconButton aria-label="HomeIcon">
                <AttachFileIcon className="" />
              </IconButton>
              <span className="list-text">Update Design OKRs.pdf</span>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <div className="bar-detail my-4">
        <Container maxWidth="lg" className={roboto.className}>
          <BarPaper
            elevation={0}
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: "left",
            }}
            className="bar-paper justify-center "
          >
            <Grid
              container
              spacing={1}
              className="my-4"
              alignItems="center"
              justifyItems="center"
            >
              <Grid item xs={3} lg={3} md={3} className="read pb-2">
                <small className="cars-subtitle">Read (10)</small>
              </Grid>
              <Grid item xs={3} lg={3} md={3} className="read pb-2">
                <small className="cars-subtitle">Unread (25)</small>
              </Grid>
              <Grid item xs={3} lg={3} md={3} className="read pb-2">
                <small className="cars-subtitle">Likes (2)</small>
              </Grid>
              <Grid item xs={3} lg={3} md={3} className=" pb-2 ">
                <small className="view-all">View</small>
                <KeyboardArrowRightIcon
                  fontSize="small"
                  className="pl-1 list-text"
                />
              </Grid>
            </Grid>
          </BarPaper>
        </Container>
      </div>
      <div className="gift-detail">
        <Container maxWidth="lg" className={roboto.className}>
          <Grid
            container
            spacing={2}
            className="mt-4 mb-8"
            alignItems="center"
            justifyItems="center"
          >
            <Grid item xs={6} lg={6} md={6} className="">
              <Chip
                icon={<CardGiftcardOutlinedIcon fontSize="" />}
                label="Gift Point"
                color="primary"
                className="chip-detail"
              />
            </Grid>
            <Grid item xs={6} lg={6} md={6} className="">
              <Chip
                icon={<ThumbUpOutlinedIcon fontSize="" />}
                label="Like"
                color="primary"
                className="chip-detail"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="gift-detail">
        <Container maxWidth="lg" className={roboto.className}>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
            }}
            className=" my-4"
          >
            <Grid container spacing={1} className="" alignItems="center">
              <Grid item xs={12} lg={12} md={12} className="">
                <ListPaper
                  elevation={0}
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "left",
                  }}
                  className=" justify-center "
                >
                  <Grid
                    container
                    spacing={1}
                    className=""
                    justifyContent=""
                    alignItems="center"
                  >
                    <Grid item xs={12} lg={12} md={12} className="">
                      <Grid
                        container
                        spacing={1}
                        className=""
                        alignItems="center"
                      >
                        <Grid item xs={2} lg={2} md={12} className="">
                          <Avatar sx={{ width: 40, height: 40 }} className="">
                            <PersonIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={10} lg={10} md={10} className="">
                          <strong>Nontawat Jaidee</strong>
                          <br />
                          <small>Full Stack developer</small>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListPaper>
                <div className="gift-detail">
                  <div className="my-4">
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus nihil possimus exercitationem.
                    </span>
                    <Grid
                      container
                      spacing={1}
                      className="my-2"
                      alignItems="center"
                    >
                      <Grid item xs={3} lg={3} md={3} className="">
                        <small className="cars-subtitle">2 days ago</small>
                      </Grid>
                      <Grid item xs={5} lg={3} md={3} className="">
                        <small className="list-text">3 People Likes</small>
                      </Grid>
                      <Grid item xs={2} lg={3} md={3} className="">
                        <ChatBubbleOutlineIcon
                          fontSize="small"
                          className="list-text pr-1"
                        />
                        <small className="list-text">Reply</small>
                      </Grid>
                      <Grid item xs={2} lg={3} md={3} className="">
                        <ThumbUpOutlinedIcon
                          fontSize="small"
                          className="list-text pr-1"
                        />

                        <small className="list-text">Like</small>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "flex" },
            }}
            className=" my-4"
          >
            <Grid container spacing={1} className="" alignItems="center">
              <Grid item xs={12} lg={12} md={12} className="">
                <ListPaper
                  elevation={0}
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "left",
                  }}
                  className=" justify-center "
                >
                  <Grid
                    container
                    spacing={1}
                    className=""
                    justifyContent=""
                    alignItems="center"
                  >
                    <Grid item xs={12} lg={12} md={12} className="">
                      <Grid
                        container
                        spacing={1}
                        className=""
                        alignItems="center"
                      >
                        <Grid item xs={2} lg={2} md={12} className="">
                          <Avatar sx={{ width: 40, height: 40 }} className="">
                            <PersonIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={10} lg={10} md={10} className="">
                          <strong>Yupawadee Jaidee</strong>
                          <br />
                          <small>Digital Marketing</small>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListPaper>
                <div className="">
                  <div className="my-4">
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus nihil possimus exercitationem.
                    </span>
                    <Grid
                      container
                      spacing={1}
                      className="my-2"
                      alignItems="center"
                    >
                      <Grid item xs={3} lg={3} md={3} className="">
                        <small className="cars-subtitle">32 days ago</small>
                      </Grid>
                      <Grid item xs={5} lg={3} md={3} className="">
                        <small className="list-text">13 People Likes</small>
                      </Grid>
                      <Grid item xs={2} lg={3} md={3} className="">
                        <ChatBubbleOutlineIcon
                          fontSize="small"
                          className="list-text pr-1"
                        />
                        <small className="list-text">Reply</small>
                      </Grid>
                      <Grid item xs={2} lg={3} md={3} className="">
                        <ThumbUpOutlinedIcon
                          fontSize="small"
                          className="list-text pr-1"
                        />

                        <small className="list-text">Like</small>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <Container maxWidth="lg" className={roboto.className}>
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
          }}
          className=" my-4"
        >
          <Grid container spacing={1} className="my-2" alignItems="center">
            <Grid item xs={2} lg={2} md={2} className="">
              <IconButton aria-label="HomeIcon">
                <PhotoSizeSelectActualIcon className="cars-subtitle" />
              </IconButton>
            </Grid>
            <Grid item xs={2} lg={2} md={2} className="">
              <IconButton aria-label="HomeIcon">
                <AttachFileIcon className="cars-subtitle" />
              </IconButton>
            </Grid>
            <Grid item xs={2} lg={2} md={2} className="">
              <IconButton aria-label="HomeIcon">
                <AlternateEmailIcon className="cars-subtitle" />
              </IconButton>
            </Grid>
            <Grid item xs={6} lg={6} md={6} className="">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
                elevation={0}
                className="textfield"
              >
               
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Comment"
                  inputProps={{ "aria-label": "Comment" }}
                />
                
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

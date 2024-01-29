import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { Roboto } from "@next/font/google";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import IosShareIcon from "@mui/icons-material/IosShare";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import Chip from "@mui/material/Chip";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import DiamondIcon from "@mui/icons-material/Diamond";
import LineChart from "../components/LineChart";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Topbar from "../components/Topbar";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  datePicker: {
    width: "auto",
  },
}));

const data = [0, 19, 13, 15, 22, 13];
const dataComment = [0, 19, 35, 51, 28, 31];
const dataPoint = [0, 19, 33, 25, 21, 23];
const dataDiamond = [0, 19, 3, 5, 12, 8];

const labels = ["0", "10", "20", "30", "40", "50"];

export default function Home() {
  const [clickedData, setClickedData] = React.useState(null);
  const [serachData, setSerachData] = React.useState([]);
  const [value, setValue] = React.useState("daily");
  const [chart, setChart] = React.useState("chart");
  const [chip, setchip] = React.useState("like");
  const [open, setOpen] = React.useState(false);

  const [checked, setChecked] = React.useState(false);
  const handleChangeOpen = (newOpen) => {
    setOpen(newOpen);
  };
  const handleChangeChart = (newChart) => {
    setChart(newChart);
  };
  const handleChangeChip = (newChip) => {
    setchip(newChip);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const DemoPaper = styled(Paper)(({ theme }) => ({
    padding: 4,
    ...theme.typography.body2,
    textAlign: "center",
  }));
  const ListPaper = styled(Paper)(({ theme }) => ({
    padding: 4,
    ...theme.typography.body2,
    textAlign: "left",
  }));
  const DatePaper = styled(Paper)(({ theme }) => ({
    padding: 4,
    ...theme.typography.body2,
    textAlign: "center",
  }));
  // const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const items = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Somsay Jaidee ${index}`,
    likeCount: 10,
  }));

  return (
    <div>
      <Topbar />
      <div className="body-index">
        <DemoPaper
          elevation={0}
          component="form"
          sx={{
            // p: "2px 4px",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
          className="sub-haeder justify-center"
          square
        >
          <Button variant="text" className="botton-text">
            Submission
          </Button>

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button variant="text" className="botton-text-active">
            Engagement
          </Button>
        </DemoPaper>
        <DatePaper
          elevation={0}
          component="form"
          sx={{
            // p: "2px 4px",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
          className="sub-haeder justify-center"
          square
        >
          <Container maxWidth="lg" className={roboto.className}>
            <Grid
              container
              spacing={2}
              className=""
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={9}
                lg={8}
                md={8}
                justifyContent="center"
                alignItems="center"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className="tab-main"
                >
                  <Tab value="daily" label="Daily" className="tab-text" />
                  <Tab value="weekly" label="Weekly" className="tab-text" />
                  <Tab value="monthly" label="Monthly" className="tab-text" />
                </Tabs>
              </Grid>
              <Grid
                item
                xs={1}
                lg={2}
                md={2}
                justifyContent="center"
                alignItems="center"
              >
                {chart === "chart" && (
                  <IconButton
                    aria-label="HomeIcon"
                    onClick={() => handleChangeChart("chart")}
                  >
                    <BarChartIcon className="chart-icon" />
                  </IconButton>
                )}
                {chart !== "chart" && (
                  <IconButton
                    aria-label="HomeIcon"
                    onClick={() => handleChangeChart("chart")}
                  >
                    <BarChartIcon className="chart-icon-noactive" />
                  </IconButton>
                )}
              </Grid>
              <Grid
                item
                xs={1}
                lg={2}
                md={2}
                justifyContent="center"
                alignItems="center"
              >
                {chart === "chart" && (
                  <IconButton
                    aria-label="HomeIcon"
                    onClick={() => handleChangeChart("list")}
                  >
                    <FormatListBulletedIcon className="chart-icon-noactive" />
                  </IconButton>
                )}
                {chart !== "chart" && (
                  <IconButton
                    aria-label="HomeIcon"
                    onClick={() => handleChangeChart("list")}
                  >
                    <FormatListBulletedIcon className="chart-icon" />
                  </IconButton>
                )}
              </Grid>
            </Grid>
            {open === true && (
              <div>
                <TabContext value={value}>
                  <TabPanel value="daily">
                    <Grid container spacing={1} className="date-text">
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">M</small>
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            className=" ml-3 avatar-day-pass"
                          >
                            17
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">T</small>
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            className=" ml-3 avatar-day-now"
                          >
                            18
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">W</small>
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            className=" ml-3 avatar-select"
                          >
                            19
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">TH</small>
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            className=" ml-3 avatar-far"
                          >
                            20
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">F</small>
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            className=" ml-3 avatar-far"
                          >
                            21
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">S</small>
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            className=" ml-3 avatar-far"
                          >
                            22
                          </Avatar>
                        </div>
                      </Grid>
                    </Grid>
                    <IconButton
                      aria-label="HomeIcon"
                      className="btn-action"
                      onClick={() => handleChangeOpen(false)}
                    >
                      <KeyboardArrowUpIcon className="" />
                    </IconButton>
                  </TabPanel>
                  <TabPanel value="weekly">
                    <Grid container spacing={1} className="date-text">
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">M</small>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">T</small>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">W</small>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">TH</small>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">F</small>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <small className="avatar-far">S</small>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} className="date-text-month">
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <Avatar
                            sx={{ width: 28, height: 28 }}
                            className=" ml-3 avatar-day-pass"
                          >
                            <small>17</small>
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <Avatar
                            sx={{ width: 28, height: 28 }}
                            className=" ml-3 avatar-day-pass"
                          >
                            <small>18</small>
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <Avatar
                            sx={{ width: 28, height: 28 }}
                            className=" ml-3 avatar-day-pass"
                          >
                            <small>19</small>
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <Avatar
                            sx={{ width: 28, height: 28 }}
                            className=" ml-3 avatar-day-pass"
                          >
                            <small>20</small>
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <Avatar
                            sx={{ width: 28, height: 28 }}
                            className=" ml-3 avatar-far"
                          >
                            <small>21</small>
                          </Avatar>
                        </div>
                      </Grid>
                      <Grid item xs={2} lg={2} md={2} className="">
                        <div
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <Avatar
                            sx={{ width: 28, height: 28 }}
                            className=" ml-3 avatar-far"
                          >
                            <small>22</small>
                          </Avatar>
                        </div>
                      </Grid>
                    </Grid>

                    <IconButton
                      aria-label="HomeIcon"
                      className="btn-action-week"
                      onClick={() => handleChangeOpen(false)}
                    >
                      <KeyboardArrowUpIcon className="" />
                    </IconButton>
                  </TabPanel>
                  <TabPanel value="monthly" className="my-4">
                    <strong> January 2024</strong>
                    <IconButton
                      aria-label="HomeIcon"
                      className="btn-action-month"
                      onClick={() => handleChangeOpen(false)}
                    >
                      <KeyboardArrowUpIcon className="" />
                    </IconButton>
                  </TabPanel>
                  <div className="my-2"></div>
                </TabContext>
              </div>
            )}
            {open !== true && (
              <div>
                <TabContext value={value}>
                  <div className="my-2"></div>
                </TabContext>
                <IconButton
                  aria-label="HomeIcon"
                  className="btn-action-down"
                  onClick={() => handleChangeOpen(true)}
                >
                  <KeyboardArrowDownIcon className="" />
                </IconButton>
              </div>
            )}
          </Container>
        </DatePaper>
        {chart === "chart" && (
          <Container maxWidth="lg" className={roboto.className}>
            {value === "daily" && (
              <div>
                <Grid container spacing={1} className="date-text">
                  <Grid item xs={10} lg={10} md={10} className=" mt-3">
                    <strong>18 January 2024</strong>
                  </Grid>
                  <Grid item xs={2} lg={2} md={2} className="">
                    <IconButton aria-label="HomeIcon">
                      <IosShareIcon className="chart-icon" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="">
                  <Grid item xs={6} lg={6} md={6} className="">
                    <DatePaper
                      elevation={0}
                      component="form"
                      sx={{
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                      className="card-summary justify-center "
                    >
                      <div
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                        className="mt-4 mb-6"
                      >
                        <ThumbUpOutlinedIcon className="card-icon" />
                        <span className="card-namm">Like</span>
                      </div>
                      <strong className="card-title">34</strong>
                      <br />
                      <small className="cars-subtitle">Likes</small>
                    </DatePaper>
                  </Grid>
                  <Grid item xs={6} lg={6} md={6} className="">
                    <DatePaper
                      elevation={0}
                      component="form"
                      sx={{
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                      className="card-summary justify-center "
                    >
                      <div
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                        className="mt-4 mb-6"
                      >
                        <ChatBubbleOutlineIcon className="card-icon" />
                        <span className="card-namm">Comment</span>
                      </div>
                      <strong className="card-title">56</strong>
                      <br />
                      <small className="cars-subtitle">Comments</small>
                    </DatePaper>
                  </Grid>
                  <Grid item xs={6} lg={6} md={6} className="">
                    <DatePaper
                      elevation={0}
                      component="form"
                      sx={{
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                      className="card-summary justify-center "
                    >
                      <div
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                        className="mt-4 mb-6"
                      >
                        <CardGiftcardOutlinedIcon className="card-icon" />
                        <span className="card-namm">Point</span>
                      </div>
                      <strong className="card-title">450</strong>
                      <br />
                      <small className="cars-subtitle">Point</small>
                    </DatePaper>
                  </Grid>
                  <Grid item xs={6} lg={6} md={6} className="">
                    <DatePaper
                      elevation={0}
                      component="form"
                      sx={{
                        alignItems: "center",
                        justifyItems: "center",
                      }}
                      className="card-summary justify-center "
                    >
                      <div
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyItems: "center",
                        }}
                        className="mt-4 mb-6"
                      >
                        <DiamondOutlinedIcon className="card-icon" />
                        <span className="card-namm">Diamond</span>
                      </div>
                      <strong className="card-title">40</strong>
                      <br />
                      <small className="cars-subtitle">Diamond</small>
                    </DatePaper>
                  </Grid>
                </Grid>
              </div>
            )}
            {value === "weekly" && (
              <div>
                <Grid container spacing={1} className="date-text">
                  <Grid item xs={10} lg={10} md={10} className=" mt-3">
                    <strong>10-16 January 2024</strong>
                  </Grid>
                  <Grid item xs={2} lg={2} md={2} className="">
                    <IconButton aria-label="HomeIcon">
                      <IosShareIcon className="chart-icon" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1} className="">
                  <Grid item xs={12} lg={12} md={12} className="">
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center my-4"
                    >
                      {chip === "like" && (
                        <Chip
                          icon={<ThumbUpIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip !== "like" && (
                        <Chip
                          icon={<ThumbUpOutlinedIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip === "comment" && (
                        <Chip
                          icon={<ChatBubbleIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip !== "comment" && (
                        <Chip
                          icon={<ChatBubbleOutlineIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip === "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip !== "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip === "diamond" && (
                        <Chip
                          icon={<DiamondIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                      {chip !== "diamond" && (
                        <Chip
                          icon={<DiamondOutlinedIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center my-8"
                    >
                      {chip === "like" && (
                        <LineChart data={data} labels={labels} />
                      )}
                      {chip === "comment" && (
                        <LineChart data={dataComment} labels={labels} />
                      )}
                      {chip === "point" && (
                        <LineChart data={dataPoint} labels={labels} />
                      )}
                      {chip === "diamond" && (
                        <LineChart data={dataDiamond} labels={labels} />
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </div>
            )}
            {value !== "daily" && value !== "weekly" && (
              <div>
                <Grid container spacing={1} className="date-text">
                  <Grid item xs={10} lg={10} md={10} className=" mt-3">
                    <strong> January 2024</strong>
                  </Grid>
                  <Grid item xs={2} lg={2} md={2} className="">
                    <IconButton aria-label="HomeIcon">
                      <IosShareIcon className="chart-icon" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1} className="">
                  <Grid item xs={12} lg={12} md={12} className="">
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center my-4"
                    >
                      {chip === "like" && (
                        <Chip
                          icon={<ThumbUpIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip !== "like" && (
                        <Chip
                          icon={<ThumbUpOutlinedIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip === "comment" && (
                        <Chip
                          icon={<ChatBubbleIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip !== "comment" && (
                        <Chip
                          icon={<ChatBubbleOutlineIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip === "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip !== "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip === "diamond" && (
                        <Chip
                          icon={<DiamondIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                      {chip !== "diamond" && (
                        <Chip
                          icon={<DiamondOutlinedIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center my-8"
                    >
                      {chip === "like" && (
                        <LineChart data={data} labels={labels} />
                      )}
                      {chip === "comment" && (
                        <LineChart data={dataComment} labels={labels} />
                      )}
                      {chip === "point" && (
                        <LineChart data={dataPoint} labels={labels} />
                      )}
                      {chip === "diamond" && (
                        <LineChart data={dataDiamond} labels={labels} />
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </div>
            )}
          </Container>
        )}
        {chart !== "chart" && (
          <Container maxWidth="lg" className={roboto.className}>
            {value === "daily" && (
              <div>
                <Grid container spacing={1} className="date-text">
                  <Grid item xs={10} lg={10} md={10} className=" mt-3">
                    <strong>16 January 2024</strong>
                  </Grid>
                  <Grid item xs={2} lg={2} md={2} className="">
                    <IconButton aria-label="HomeIcon">
                      <IosShareIcon className="chart-icon" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1} className="">
                  <Grid item xs={12} lg={12} md={12} className="">
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center my-4"
                    >
                      {chip === "like" && (
                        <Chip
                          icon={<ThumbUpIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip !== "like" && (
                        <Chip
                          icon={<ThumbUpOutlinedIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip === "comment" && (
                        <Chip
                          icon={<ChatBubbleIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip !== "comment" && (
                        <Chip
                          icon={<ChatBubbleOutlineIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip === "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip !== "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip === "diamond" && (
                        <Chip
                          icon={<DiamondIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                      {chip !== "diamond" && (
                        <Chip
                          icon={<DiamondOutlinedIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                    </Box>
                    {chip === "like" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <ThumbUpIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "comment" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <ChatBubbleIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "point" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <CardGiftcardOutlinedIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "diamond" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <DiamondIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
            )}
            {value === "weekly" && (
              <div>
                <Grid container spacing={1} className="date-text">
                  <Grid item xs={10} lg={10} md={10} className=" mt-3">
                    <strong>10 - 16 January 2024</strong>
                  </Grid>
                  <Grid item xs={2} lg={2} md={2} className="">
                    <IconButton aria-label="HomeIcon">
                      <IosShareIcon className="chart-icon" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1} className="">
                  <Grid item xs={12} lg={12} md={12} className="">
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center my-4"
                    >
                      {chip === "like" && (
                        <Chip
                          icon={<ThumbUpIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip !== "like" && (
                        <Chip
                          icon={<ThumbUpOutlinedIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip === "comment" && (
                        <Chip
                          icon={<ChatBubbleIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip !== "comment" && (
                        <Chip
                          icon={<ChatBubbleOutlineIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip === "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip !== "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip === "diamond" && (
                        <Chip
                          icon={<DiamondIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                      {chip !== "diamond" && (
                        <Chip
                          icon={<DiamondOutlinedIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                    </Box>
                    {chip === "like" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <ThumbUpIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "comment" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <ChatBubbleIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "point" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <CardGiftcardOutlinedIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "diamond" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <DiamondIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
            )}
            {value !== "daily" && value !== "weekly" && (
              <div>
                <Grid container spacing={1} className="date-text">
                  <Grid item xs={10} lg={10} md={10} className=" mt-3">
                    <strong>January 2024</strong>
                  </Grid>
                  <Grid item xs={2} lg={2} md={2} className="">
                    <IconButton aria-label="HomeIcon">
                      <IosShareIcon className="chart-icon" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container spacing={1} className="">
                  <Grid item xs={12} lg={12} md={12} className="">
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center my-4"
                    >
                      {chip === "like" && (
                        <Chip
                          icon={<ThumbUpIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip !== "like" && (
                        <Chip
                          icon={<ThumbUpOutlinedIcon fontSize="small" />}
                          label="Like"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("like")}
                        />
                      )}
                      {chip === "comment" && (
                        <Chip
                          icon={<ChatBubbleIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip !== "comment" && (
                        <Chip
                          icon={<ChatBubbleOutlineIcon fontSize="small" />}
                          label="Comment"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("comment")}
                        />
                      )}
                      {chip === "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip !== "point" && (
                        <Chip
                          icon={<CardGiftcardOutlinedIcon fontSize="small" />}
                          label="Point"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("point")}
                        />
                      )}
                      {chip === "diamond" && (
                        <Chip
                          icon={<DiamondIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon-fill"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                      {chip !== "diamond" && (
                        <Chip
                          icon={<DiamondOutlinedIcon fontSize="small" />}
                          label="Diamond"
                          color="primary"
                          className="chip-icon"
                          onClick={() => handleChangeChip("diamond")}
                        />
                      )}
                    </Box>
                    {chip === "like" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <ThumbUpIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "comment" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <ChatBubbleIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "point" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <CardGiftcardOutlinedIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                    {chip === "diamond" && (
                      <div>
                        {items.map((item) => (
                          <Box
                            key={item}
                            sx={{
                              display: { xs: "flex", md: "flex" },
                            }}
                            className=" my-4"
                          >
                            <Grid
                              container
                              spacing={1}
                              className=""
                              alignItems="center"
                            >
                              <Grid item xs={1} lg={1} md={1} className="">
                                <Avatar
                                  sx={{ width: 24, height: 24 }}
                                  className="avatar-color"
                                >
                                  {item.id}
                                </Avatar>
                              </Grid>
                              <Grid item xs={11} lg={11} md={11} className="">
                                <Link href={"/" + item.id}>
                                  <ListPaper
                                    elevation={0}
                                    component="form"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyItems: "left",
                                    }}
                                    className="list-card justify-center "
                                  >
                                    <Grid
                                      container
                                      spacing={1}
                                      className=""
                                      justifyContent=""
                                      alignItems="center"
                                    >
                                      <Grid
                                        item
                                        xs={8}
                                        lg={8}
                                        md={8}
                                        className=""
                                      >
                                        <Grid
                                          container
                                          spacing={1}
                                          className=""
                                          justifyContent=""
                                          alignItems="center"
                                        >
                                          <Grid
                                            item
                                            xs={2}
                                            lg={2}
                                            md={12}
                                            className=""
                                          >
                                            <Avatar
                                              sx={{ width: 34, height: 34 }}
                                              className=""
                                            >
                                              <PersonIcon />
                                            </Avatar>
                                          </Grid>
                                          <Grid
                                            item
                                            xs={10}
                                            lg={10}
                                            md={10}
                                            className="name-list"
                                          >
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
                                      >
                                        <DiamondIcon
                                          fontSize="small"
                                          className="pr-1 list-text"
                                        />
                                        <small>10 people like</small>
                                      </Grid>
                                    </Grid>
                                  </ListPaper>
                                </Link>
                              </Grid>
                            </Grid>
                          </Box>
                        ))}
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
            )}
          </Container>
        )}
      </div>
    </div>
  );
}

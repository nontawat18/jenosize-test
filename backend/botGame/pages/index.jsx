import * as React from "react";

import axios from "axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import logo from "../asset/people.gif";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import imageBot from "../asset/renew.gif";
import Button from '@mui/material/Button';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Home() {
  const [board, setBoard] =  React.useState(Array(9).fill(""));
  const [winner, setWinner] =  React.useState(null);
  const [activeSquares, setActiveSquares] =  React.useState(Array(9).fill(false));
  const [x, setX] =  React.useState(0);
  const [data, setData] =  React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    window.location.reload();

  };
  const handleClick = (indices) => {
    const rowIndex = indices[0];
    const cellIndex = indices[1];
    console.log(indices);
    handleMove(indices);
    const newActiveSquares = [...activeSquares];
    newActiveSquares[rowIndex] = true;
    setActiveSquares(newActiveSquares);
    setX(1);
    // console.log(data);
  };
  React.useEffect(() => {}, []);
  const [activePlayer, setActivePlayer] =  React.useState("X");

  const handleMove = async (indices) => {
    console.log(indices);
    const rowIndex = indices[0];
    const cellIndex = indices[1];
    const headers = {
      'Content-Type': 'application/json', 
      'Api-Key': '6bb6b3cf-bad3-4143-8924-ebd35ea5e5a4', 
    };

    try {
      const moveData = {
        col: cellIndex,
        row: rowIndex,
        player: activePlayer,
      };

      const response = await axios.post(
        "https://jenosize-test.vercel.app/jenosize/moveGame",
        moveData,
        { headers: headers } // Pass headers as the third argument
      );

      if (response.status === 200) {
        setBoard(response.data.board);
        console.log(response.data.message);
        if (response.data.message === "Player X wins!") {
          setWinner("Player wins!");
          setOpen(true);
        } else if (response.data.message === "Player O wins!") {
          setWinner("Player wins!");
          setOpen(true);
        } else if (response.data.message === "Bot wins!") {
          setWinner("Bot wins!");
          setOpen(true);
        } else if (response.data.message === "It's a draw!") {
          setWinner("It's a draw!");
          setOpen(true);
        } else {
          setActivePlayer(activePlayer === "X" ? "X" : "X");
        }
      } else {
        console.error("Failed to make the move.");
      }
    } catch (error) {
      console.error("Error making the move:", error.message);
    }
  };

  return (
    <div className="justify-center  ">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {winner && <strong className="dialog">{winner} </strong>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Play Again</Button>
        </DialogActions>
      </Dialog>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
          }}
          className="justify-center"
        >
          <Paper elevation={3} className="my-4 py-8 pl-8 pr-8  main-paper">
            {board.map((value, index) => (
              <Grid container spacing={0} key={index}>
                {Array.isArray(value) ? (
                  value.map((values, indexs) => (
                    <Grid item xs={4} lg={4} md={4} key={indexs}>
                      <DemoPaper
                        square
                        onClick={() => handleClick([index, indexs])}
                        elevation={0}
                        className={`sup-paper ${
                          values === "X" ? "x-color" : "o-color"
                        }`}
                      >
                        {values === "O" ? (
                          <Image
                            src={imageBot}
                            alt="Picture of the author"
                            className=""
                          />
                        ) : (
                          <div> </div>
                        )}
                        {values === "X" ? (
                          <Image
                            src={logo}
                            alt="Picture of the author"
                            className=""
                          />
                        ) : (
                          <div> </div>
                        )}
                      </DemoPaper>
                    </Grid>
                  ))
                ) : (
                  <Grid container spacing={0}>
                    <Grid item xs={4} lg={4} md={4}></Grid>
                  </Grid>
                )}
              </Grid>
            ))}
            {x === 0 ? (
              <Grid container spacing={0}>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([0, 0])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([0, 1])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([0, 2])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([1, 0])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([1, 1])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([1, 2])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([2, 0])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([2, 1])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([2, 2])}
                  ></DemoPaper>
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={0}>
              </Grid>
            )}
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default Home;

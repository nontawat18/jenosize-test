import Head from "next/head";
import { Inter } from "@next/font/google";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Roboto } from "@next/font/google";
import logo from "../asset/Screenshot_2024-01-28_001425-removebg-preview.ico";
import Image from "next/image";
import Topbar from "../components/Topbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const [clickedData, setClickedData] = React.useState(null);
  const [serachData, setSerachData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let data = "ไอคอนสยาม"
      try {
        const response = await axios.get(`/api/${data}`);
        const searchData = response.data.results;
        setSerachData(searchData);
        console.log(searchData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); 
  }, []); 
  
  const handleClick = async (data) => {
    setClickedData(data);
    console.log(data);
  
    try {
      const response = await axios.get(`/api/${data}`);
      const searchData = response.data.results;
      setSerachData(searchData);
      console.log(searchData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <div>
      <Topbar onClick={handleClick} />
      <div className="body-index">
        <Container maxWidth="lg" className={roboto.className}>
          {serachData.map((value, index) => (
            <div key={index}>
              <Grid
                container
                spacing={2}
                className=""
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  lg={2}
                  md={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image src={logo} alt="Picture of the author" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={10}
                  md={10}
                  justifyContent="center"
                  alignItems="center"
                >
                  <div className="my-4">
                    <strong className="title-text">{value.name}</strong>
                    <br />
                    <div className="my-2">
                      <span>{value.formatted_address}</span>
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laborum, veritatis. Laborum dolorum iusto tempora
                      perferendis aut omnis. Nobis similique voluptatem, quod ex
                      quam cum voluptas, eius mollitia iure laudantium nostrum.
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
}

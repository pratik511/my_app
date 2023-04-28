import React from "react";
import CommonCard from "../CommonComponent/CommonCard";
import { Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Dashboard.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import AdsComponent from "../CommonComponent/AdsComponent";

const bannerImage = [
  {
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1681302827~exp=1681303427~hmac=5abb418019f773ebad3154a3e09e2564298867d6bfbf9a9a8bf2706c5094f2b8"
  },
  {
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1681302827~exp=1681303427~hmac=5abb418019f773ebad3154a3e09e2564298867d6bfbf9a9a8bf2706c5094f2b8"
  },
  {
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1681302827~exp=1681303427~hmac=5abb418019f773ebad3154a3e09e2564298867d6bfbf9a9a8bf2706c5094f2b8"
  },
  {
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1681302827~exp=1681303427~hmac=5abb418019f773ebad3154a3e09e2564298867d6bfbf9a9a8bf2706c5094f2b8"
  }
];

const Dashboard = () => {
  return (
    <div>
      <div className="home-page">
        <AwesomeSlider
          autoPlay={true}
          play={true}
          cancelOnInteraction={false}
          interval={500}
          cssModule={AwesomeSliderStyles}
          showTimer={true}
          bullets={false}
        >
          {bannerImage?.length > 0 &&
            bannerImage?.map((data, i) => {
              return (
                <div className="image-slide-align">
                  <img src={data?.image} alt="HeroBannerImage" />
                  <div className="image-blur"></div>
                  <div className="container">
                    <div className="button-center-align-home">
                      <NavLink to="/home">
                        <button>VIEW HOME</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
        </AwesomeSlider>
      </div>
      <AdsComponent dataAdSlot="4788656543" width="300" height="250" />
      <Grid sx={{ display: "flex" }}>
        <Grid sx={{ width: "20%", display: { xs: "none", sm: "flex" } }}>
          <Grid
            container
            // rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            
          </Grid>
        </Grid>
        <Container sx={{ textAlign: "-webkit-center" }}>
          <Grid
            container
            rowSpacing={{ xs: 1.5, sm: 3 }}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]?.map(() => {
              return (
                <Grid item xs={6} sm={6} md={4} xl={4}>
                  <CommonCard />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Grid sx={{ width: "20%", display: { xs: "none", sm: "flex" } }}>
          <Grid
            container
            // rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

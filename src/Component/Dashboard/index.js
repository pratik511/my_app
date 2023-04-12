import React from "react";
import CommonCard from "../CommonComponent/CommonCard";
import { Container, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Grid sx={{ display: "flex" }}>
        <Grid sx={{ width: "20%" }}>
          {/* <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]?.map(() => {
              return (
                <Grid item xs={12} sm={6} md={4} xl={4}>
                  <CommonCard />
                </Grid>
              );
            })}
          </Grid> */}
        </Grid>
        <Container sx={{ textAlign: "-webkit-center" }}>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]?.map(() => {
              return (
                <Grid item xs={12} sm={6} md={4} xl={4}>
                  <CommonCard />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Grid sx={{ width: "20%" }}>
          {/* <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]?.map(() => {
              return (
                <Grid item xs={12} sm={6} md={4} xl={4}>
                  <CommonCard />
                </Grid>
              );
            })}
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

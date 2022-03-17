import React from "react";
import { Grid } from "@mui/material";
import Hero from "./Hero";
import mainCards from "../data/mainCards.json";
import MainCard from "./MainCard";

const Main = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
        <Hero />
      </Grid>
      {mainCards.map((card) => (
        <MainCard key={card.title} card={card} />
      ))}
    </Grid>
  );
};

export default Main;

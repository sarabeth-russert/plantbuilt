import React from "react";
import data from "../data/2017data.json";
import { Paper } from "@mui/material";
import ResultCard from "./ResultCard";
import useWindowDimensions from "../windowDimensions";

const Results2017 = () => {
  const { width } = useWindowDimensions();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper
        style={{
          width: width * 0.8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px 0 20px 0",
        }}
      >
        <h1>2017 Competition Results</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {data.map((section, idx) => (
            <ResultCard key={idx} card={section} />
          ))}
          <img
            src={"/plantbuilt-flyer-2017.png"}
            alt={"2017 flyer"}
            style={{ width: width * 0.33, margin: "0 0 20px 0" }}
          />
        </div>
      </Paper>
    </div>
  );
};

export default Results2017;

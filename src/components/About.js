import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Card sx={{ display: "flex", margin: "20px", padding: "20px" }}>
      <CardMedia
        component="img"
        sx={{ width: "25%" }}
        image={"plantbuilt-origin.png"}
        alt={"2012 portland vegfest"}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Plantbuilt: A Decade of Compassionate Strength
        </Typography>
        <Typography variant="body1" gutterBottom>
          In 2012 Giacomo Marchese and Dani Taylor championed the idea of
          forming a team of vegan bodybuilders to compete along side non-vegan
          competitors with the goal of showing that not only could the vegan
          athletes compete, they could win. They reached out to friends in the
          community to gauge their interest in participating and the first
          Plantbuilt team was formed. The team traveled to Austin, Texas to
          participate in the Naturally Fit Games- a multi sport expo, and
          dominated the bodybuilding stage. Since then Plantbuilt has competed
          two more times broadening our base of athletes to include more
          strength based sports and every time successfully spreads the message
          of cruelty free strength. 2022 will be the fourth time the team sets
          out to change hearts and minds, with some familar faces and some new
          additions to the family. Help us celebrate our 10th year of activism
          and keep checking in for updates about the team and the compitition.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default About;

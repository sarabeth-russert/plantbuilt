import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import useWindowDimensions from "../windowDimensions";

const styleWide = {
  display: "flex",
};

const styleSingleColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const gridSize = {
  1160: 5,
  1000: 3,
  660: 5,
};

const MainCard = ({ card }) => {
  const { width } = useWindowDimensions();

  return (
    <Grid
      item
      xs={
        width > 1160
          ? gridSize[1160]
          : width > 1000
          ? gridSize[1000]
          : width > 600
          ? gridSize[660]
          : 10
      }
    >
      <Card sx={width > 1160 ? styleWide : styleSingleColumn}>
        <CardMedia
          component="img"
          alt={card.title}
          sx={{ width: 200, margin: "5px", borderRadius: "5px" }}
          image={card.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: "30px" }}
          >
            {card.text}
          </Typography>
          <CardActions>
            <Button size="small" target="_blank" href={card.link}>
              Learn More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MainCard;

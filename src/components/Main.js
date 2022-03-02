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
import Hero from "./Hero";

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
      <Grid item xs={5}>
        <Card sx={{ display: "flex", height: "210px" }}>
          <CardMedia
            component="img"
            alt="timeline graphic"
            sx={{ width: 200, margin: "5px", borderRadius: "5px" }}
            image="plantbuilt-timeline-graphic.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About Plantbuilt
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "30px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card sx={{ display: "flex", height: "210px" }}>
          <CardMedia
            component="img"
            alt="timeline graphic"
            sx={{ width: 200, margin: "5px", borderRadius: "5px" }}
            image="plantbuilt-flyer-2017.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Latest News
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "30px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card sx={{ display: "flex", height: "210px" }}>
          <CardMedia
            component="img"
            alt="timeline graphic"
            sx={{ width: 200, margin: "5px", borderRadius: "5px" }}
            image="plantbuilt-vegfest.jpeg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Community Outreach
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "30px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            alt="timeline graphic"
            sx={{ width: 200, margin: "5px", borderRadius: "5px" }}
            image="plantbuilt-volunteer.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Volunteer
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "30px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Main;

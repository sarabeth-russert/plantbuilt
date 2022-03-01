import React from "react";
import { Paper, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

const Main = () => {
  return (
    <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", marginTop: "20px"}}>
      <Grid item xs={10} sx={{display: "flex", justifyContent: "center"}}>
        <Paper elevation={2} sx={{ padding: "15px"}}>
          <Card>
            <CardMedia
              component="img"
              height="100%"
              image="PlantBuilt-Dark-Logo-.png"
              alt="plantbuilt"
            />
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Card sx={{ display: "flex"}} >
          <CardMedia
            component="img"
            alt="timeline graphic"
            sx={{ width: 300, margin: "5px", borderRadius: "5px" }}
            image="plantbuilt-timeline-graphic.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About Plantbuilt 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Accomplishing elite levels of strength, health, and wellness, is an extension of our compassion for life. Our lifestyle requires physical effort beyond our normal capacity, furthermore is the use of proper nutrition, rest, and mental well being. None of these require the destruction of animals . As a collective (PlantBuilt) we live, train, compete, and educate in our communities, showing the success of compassionate Veganism.
            </Typography>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card sx={{ display: "flex"}} >
          <CardMedia
            component="img"
            alt="timeline graphic"
            sx={{ width: 300, margin: "5px", borderRadius: "5px" }}
            image="plantbuilt-flyer-2017.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About Plantbuilt 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Accomplishing elite levels of strength, health, and wellness, is an extension of our compassion for life. Our lifestyle requires physical effort beyond our normal capacity, furthermore is the use of proper nutrition, rest, and mental well being. None of these require the destruction of animals . As a collective (PlantBuilt) we live, train, compete, and educate in our communities, showing the success of compassionate Veganism.
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

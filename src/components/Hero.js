import React from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import useWindowDimensions from "../windowDimensions";

const Hero = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 1245 ? (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
          <Box
            gridColumn="3 / 13"
            gridRow="1 / 6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Card sx={{ minWidth: 500 }}>
              <CardMedia
                component="img"
                height="100%"
                image="plantbuilt-team-photo-orig.jpeg"
                alt="plantbuilt"
              />
            </Card>
          </Box>
          <Box gridColumn="1 / 4" gridRow="4 / 5">
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  PLANTBUILT
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Powered by VEGAN STRONG
                </Typography>
                <Typography variant="body1">
                  Accomplishing elite levels of strength, health, and wellness,
                  is an extension of our compassion for life. Our lifestyle
                  requires physical effort beyond our normal capacity,
                  furthermore is the use of proper nutrition, rest, and mental
                  well being. None of these require the destruction of animals .
                  As a collective (PlantBuilt) we live, train, compete, and
                  educate in our communities, showing the success of
                  compassionate Veganism.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      ) : (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
          <Box
            gridColumn="1 / 13"
            gridRow="1"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Card sx={{ minWidth: 320 }}>
              <CardMedia
                component="img"
                height="100%"
                image="plantbuilt-team-photo.jpeg"
                alt="plantbuilt"
              />
            </Card>
          </Box>
          <Box gridColumn="1 / 13" gridRow="2">
            <Card sx={{ minWidth: 320 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  PLANTBUILT
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Vegan Strong
                </Typography>
                <Typography variant="body1">
                  Accomplishing elite levels of strength, health, and wellness,
                  is an extension of our compassion for life. Our lifestyle
                  requires physical effort beyond our normal capacity,
                  furthermore is the use of proper nutrition, rest, and mental
                  well being. None of these require the destruction of animals .
                  As a collective (PlantBuilt) we live, train, compete, and
                  educate in our communities, showing the success of
                  compassionate Veganism.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Hero;

import * as React from "react";
import { AppBar, IconButton, Box, Toolbar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SocialMediaIcons from "./SocialMediaIcons";
// import { makeStyles } from "@mui/styles";
// import NavMenu from "./NavMenu";
// import { MenuItem, Typography } from "@mui/material";

// const useStyles = makeStyles({
//   logo: {
//     height: "75px",
//   },
// });

export default function ButtonAppBar() {
  // const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            color="success"
            href="https://twitter.com/plantbuilt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="success"
            href="https://www.facebook.com/VeganOlympia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="success"
            href="https://www.youtube.com/user/plantbuilt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            color="success"
            href="https://www.instagram.com/plantbuilt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
// import NavMenu from "./NavMenu";
import { MenuItem, Typography } from "@mui/material";

const useStyles = makeStyles({
  logo: {
    width: "250px",
  },
  links: {
    width: "120px",
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <MenuItem className={classes.links}>
            <Typography>Athletes</Typography>
          </MenuItem>
          <MenuItem className={classes.links}>
            <Typography>2017 Results</Typography>
          </MenuItem>
          <img
            src={"plantbuilt-logo-dark.png"}
            alt="plantbuilt"
            className={classes.logo}
          />
          <MenuItem className={classes.links}>
            <Typography>About Us</Typography>
          </MenuItem>
          <MenuItem className={classes.links}>
            <Typography>Contact</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

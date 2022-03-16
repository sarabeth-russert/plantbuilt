import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
// import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import logo from "../plantbuilt-logo-dark.png";

const useStyles = makeStyles({
  logo: {
    width: "250px",
  },
  links: {
    width: "120px",
  },
  text: { color: "white" },
  link: { textDecoration: "none" },
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
            <Link className={classes.link} to="/profiles">
              <Typography className={classes.text}>Athletes</Typography>
            </Link>
          </MenuItem>
          <MenuItem className={classes.links}>
            <Typography>2017 Results</Typography>
          </MenuItem>
          <Link to="/">
            <img src={logo} alt="plantbuilt" className={classes.logo} />
          </Link>
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

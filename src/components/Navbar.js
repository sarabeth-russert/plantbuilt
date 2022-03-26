import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import logo from "../plantbuilt-logo-dark.png";
import useWindowDimensions from "../windowDimensions";
import NavMenu from "./NavMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
  const { width } = useWindowDimensions();

  return (
    <>
      {width > 650 ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <NavMenu
                className={classes.links}
                title={"Athletes"}
                menuItems={[
                  "All Sports",
                  "Bodybuilding",
                  "CF",
                  "Powerlifting",
                  "Kettlebell Sport",
                  "Olympic Weightlifting",
                ]}
                icon={<KeyboardArrowDownIcon />}
              />
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
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar
              sx={{
                display: "flex",
              }}
            >
              <NavMenu
                item={"open"}
                menuItems={["Athletes", "Contact", "About"]}
                icon={<KeyboardArrowDownIcon />}
              />
              {/* this needs to be centered */}
              <Link to="/">
                <img src={logo} alt="plantbuilt" className={classes.logo} />
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
}

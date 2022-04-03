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
import MenuIcon from "@mui/icons-material/Menu";

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
                  "Legacy Athletes",
                ]}
                icon={<KeyboardArrowDownIcon />}
              />
              <Link to="/results-2017" className={classes.link}>
                <MenuItem className={classes.links}>
                  <Typography className={classes.text}>2017 Results</Typography>
                </MenuItem>
              </Link>
              <Link to="/">
                <img src={logo} alt="plantbuilt" className={classes.logo} />
              </Link>
              <Link to="/about" className={classes.link}>
                <MenuItem className={classes.links}>
                  <Typography className={classes.text}>About Us</Typography>
                </MenuItem>
              </Link>
              <Link to="/contact" className={classes.link}>
                <MenuItem className={classes.links}>
                  <Typography className={classes.text}>Contact</Typography>
                </MenuItem>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <NavMenu
                item={"open"}
                menuItems={["Athletes", "2017 Results", "Contact", "About"]}
                icon={<MenuIcon />}
              />
              <Link to="/" style={{ width: "250px" }}>
                <img src={logo} alt="plantbuilt" className={classes.logo} />
              </Link>
              <NavMenu item={""} menuItems={[]} icon={""} />
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
}

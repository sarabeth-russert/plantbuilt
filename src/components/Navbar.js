import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import NavMenu from "./NavMenu";

const useStyles = makeStyles({
  logo: {
    height: "75px",
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
          <NavMenu title={"Athletes"} menuItems={[]} />
          <NavMenu title={"2017 Results"} menuItems={[]} />
          <img
            src={"plantbuilt-logo-dark.png"}
            alt="plantbuilt"
            className={classes.logo}
          />
          <NavMenu title={"About"} menuItems={[]} />
          <NavMenu title={"Contact"} menuItems={[]} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

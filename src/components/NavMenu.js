import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const linkMap = {
  "All Sports": "/profiles",
  Bodybuilding: "/profiles/bodybuilding",
  CF: "/profiles/cf",
  Powerlifting: "/profiles/powerlifting",
  "Kettlebell Sport": "/profiles/kettle-bell-sport",
  "Olympic Weightlifting": "/profiles/olympic-weightlifting",
  "Legacy Athletes": "/profiles/former-team",
  About: "/about",
  Contact: "/contact",
};

const useStyles = makeStyles({
  text: { color: "white" },
  link: { textDecoration: "none" },
});

export default function NavMenu({ title, menuItems, icon }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="Nav-button"
        aria-controls={open ? "Nav-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        {title}
        {icon}
      </Button>
      <Menu
        id="Nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "Nav-button",
        }}
      >
        {menuItems.map((item, idx) => (
          <Link to={linkMap[item]} className={classes.link}>
            <MenuItem key={idx} onClick={handleClose}>
              <Typography className={classes.text}>{item}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}

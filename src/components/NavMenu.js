import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NavMenu({ title, menuItems }) {
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
        <KeyboardArrowDownIcon />
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
          <MenuItem key={idx} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

// React-Bootstrap
import { Nav } from "react-bootstrap";

// Material UI
import AddIcon from "@mui/icons-material/Add";

// Images
import en from "../../../../image/flagIcon/en.svg";
import fr from "../../../../image/flagIcon/fr.svg";
import az from "../../../../image/flagIcon/az.svg";
import adminAvatar from "../../../../image/adminAvatar/adminAvatar.svg";

// Styles
import HeaderContainerStyle from "./HeaderContainer.module.css";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const HeaderContainer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Nav className={HeaderContainerStyle.Keeper}>
      <button className={HeaderContainerStyle.Keeper_Add_Product}>
        <AddIcon sx={{ fontSize: 20 }} />
        ADD PRODUCT
      </button>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
         <img src={en} alt="en" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <img src={en} alt="en" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img src={fr} alt="fr" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <img src={az} alt="az" />
          </MenuItem>
        </Menu>

      <div className={HeaderContainerStyle.Keeper_Avatar}>
        <img src={adminAvatar} alt="adminAvatar" />
        <span>Admin</span>
      </div>
    </Nav>
  );
};

export default HeaderContainer;

import * as React from "react";

// React-Bootstrap
import { Nav } from "react-bootstrap";

// Images
import en from "../../../../image/flagIcon/en.svg";
import fr from "../../../../image/flagIcon/fr.svg";
import az from "../../../../image/flagIcon/az.svg";
import adminAvatar from "../../../../image/adminAvatar/adminAvatar.svg";

// Styles
import HeaderContainerStyle from "./HeaderContainer.module.css";

// Material-UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import AddModal from "../../../containers/AddModal";

import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
  az: { nativeName: "Az" },
};

const flags = {
  en,
  fr,
  az,
};

const HeaderContainer = () => {
  const { i18n } = useTranslation();
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
      <AddModal />
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src={flags[i18n.resolvedLanguage]}
          alt={flags[i18n.resolvedLanguage]}
        />
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
        {Object.keys(lngs).map((lng) => (
          <MenuItem
            key={lng}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            <img src={flags[lng]} alt="FlagIcon" />
          </MenuItem>
        ))}
      </Menu>
      <div className={HeaderContainerStyle.Keeper_Avatar}>
        <img src={adminAvatar} alt="adminAvatar" />
        <span>Admin</span>
      </div>
    </Nav>
  );
};

export default HeaderContainer;

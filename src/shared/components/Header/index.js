// React-Bootstrap
import { Nav, Navbar } from "react-bootstrap";

// Material UI
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Styles
import HeaderStyle from "./Header.module.css";

// Images
import FoodyIcon from "../../../image/logo/foodyIcon.svg";
import flagIcon from "../../../image/flagIcon/en.svg";
import adminAvatar from "../../../image/adminAvatar/adminAvatar.svg";

const Header = () => {
  return (
    <Navbar className={HeaderStyle.Navbar}>
      <Navbar.Brand className={HeaderStyle.Brand}>
        <img src={FoodyIcon} alt="FoodyIcon" />
      </Navbar.Brand>
      <Nav className={HeaderStyle.Keeper}>
        <Fab variant="extended" className={HeaderStyle.Keeper_Add_Product}>
          <AddIcon sx={{ fontSize: 20 }} />
          ADD PRODUCT
        </Fab>
        <img
          src={flagIcon}
          alt="flagIcon"
          className={HeaderStyle.Keeper_FlagIcon}
        />
        <div className={HeaderStyle.Keeper_Avatar}>
          <img src={adminAvatar} alt="adminAvatar" />
          <span>Admin</span>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;

import { Nav } from "react-bootstrap";

// Material UI
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Images
import flagIcon from "../../../../image/flagIcon/en.svg";
import adminAvatar from "../../../../image/adminAvatar/adminAvatar.svg";

// Styles
import HeaderContainerStyle from "./HeaderContainer.module.css";

const HeaderContainer = () => {
  return (
    <Nav className={HeaderContainerStyle.Keeper}>
      <Fab
        variant="extended"
        className={HeaderContainerStyle.Keeper_Add_Product}
      >
        <AddIcon sx={{ fontSize: 20 }} />
        ADD PRODUCT
      </Fab>
      <img
        src={flagIcon}
        alt="flagIcon"
        className={HeaderContainerStyle.Keeper_FlagIcon}
      />
      <div className={HeaderContainerStyle.Keeper_Avatar}>
        <img src={adminAvatar} alt="adminAvatar" />
        <span>Admin</span>
      </div>
    </Nav>
  );
};

export default HeaderContainer;

// React-Bootstrap
import { Navbar } from "react-bootstrap";

// Styles
import HeaderStyle from "./Header.module.css";

// Images
import FoodyIcon from "../../../image/logo/foodyIcon.svg";

// Component
import HeaderContainer from "./HeaderContainer";

const Header = () => {
  return (
    <Navbar className={HeaderStyle.Navbar}>
      <Navbar.Brand className={HeaderStyle.Brand}>
        <img src={FoodyIcon} alt="FoodyIcon" />
      </Navbar.Brand>
      <HeaderContainer />
    </Navbar>
  );
};

export default Header;

// React-Bootstrap
import { Navbar } from "react-bootstrap";

// Styles
import HeaderStyle from "./Header.module.css";

// Images
import FoodyIcon from "../../../image/logo/foodyIcon.svg";

// Component
import HeaderContainer from "./HeaderContainer";
import { ProductProvider } from "../../../provider/Product/ProductProvider";

const Header = () => {
  return (
    <ProductProvider>
      <Navbar className={HeaderStyle.Navbar}>
        <Navbar.Brand className={HeaderStyle.Brand}>
          <img src={FoodyIcon} alt="FoodyIcon" />
        </Navbar.Brand>
        <HeaderContainer />
      </Navbar>
    </ProductProvider>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Data from "../../../../constant/Sidebar";

// Style
import SidebarListStyle from "./SidebarList.module.css"

const SidebarList = () => {
  return (
    <Nav className={`${SidebarListStyle.nav} flex-column`}>
      {Data.map((item) => (
        <li key={`menu-list-${item.title}`}>
          <NavLink to={item.link}>
            <span>{item.icon}</span>
            {item.title}
          </NavLink>
        </li>
      ))}
    </Nav>
  );
};

export default SidebarList;

import { NavLink, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Data from "../../../../util/Sidebar";
import { setLogin } from "../../../../store/slices/loginSlice";
import LogoutIcon from "@mui/icons-material/Logout";

// Style
import SidebarListStyle from "./SidebarList.module.css";

const SidebarList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBack = () => {
    localStorage.removeItem("isLogin");
    dispatch(setLogin(false));
    navigate("/login");
  };
  return (
    <Nav className={`${SidebarListStyle.Nav_List} flex-column`}>
      {Data.map((item) => (
        <li key={`menu-list-${item.title}`} className={SidebarListStyle.List}>
          <NavLink to={item.link} className={SidebarListStyle.Nav_Link}>
            <span className={SidebarListStyle.Nav_Icon}>{item.icon}</span>
            {item.title}
          </NavLink>
        </li>
      ))}

      <button className={SidebarListStyle.Button} onClick={onBack}>
        <span className={SidebarListStyle.Nav_Icon}>
          <LogoutIcon />
        </span>
        Logout
      </button>
    </Nav>
  );
};

export default SidebarList;

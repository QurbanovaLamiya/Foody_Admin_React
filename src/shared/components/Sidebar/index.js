// Components
import SidebarList from "./SidebarList";
import SidebarFooter from "./SidebarFooter";

// Style
import SidebarStyle from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={SidebarStyle.Sidebar_Section}>
      <SidebarList />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;

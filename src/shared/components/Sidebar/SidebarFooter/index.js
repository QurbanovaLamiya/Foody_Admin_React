import EACAMP from "../../../../image/eacampLogo/eacamp.svg";
import SidebarFooterStyle from "./SidebarFooter.module.css";

const SidebarFooter = () => {
  return (
    <div className={SidebarFooterStyle.Content}>
      <img src={EACAMP} alt="EACAMP" />
      <p>Version: 1.0.</p>
      <p>{new Date().getFullYear()}</p>
    </div>
  );
};

export default SidebarFooter;

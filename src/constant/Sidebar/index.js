import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CategoryIcon from "@mui/icons-material/Category";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import DiscountIcon from "@mui/icons-material/Discount";
import LogoutIcon from "@mui/icons-material/Logout";

const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Products",
    icon: <StorefrontIcon />,
    link: "/products",
  },
  {
    title: "Restaurants",
    icon: <AssignmentIcon />,
    link: "/restaurants",
  },
  {
    title: "Category",
    icon: <CategoryIcon />,
    link: "/category",
  },
  {
    title: "Orders",
    icon: <FilterFramesIcon />,
    link: "/orders",
  },
  {
    title: "Offer",
    icon: <DiscountIcon />,
    link: "/offer",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];


export default SidebarData
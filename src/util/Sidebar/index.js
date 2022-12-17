import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import LogoutIcon from "@mui/icons-material/Logout";

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
    icon: <CategoryOutlinedIcon />,
    link: "/category",
  },
  {
    title: "Orders",
    icon: <FilterFramesIcon />,
    link: "/orders",
  },
  {
    title: "Offer",
    icon: <LocalOfferIcon />,
    link: "/offer",
  }
];

export default SidebarData;

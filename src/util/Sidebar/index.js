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
    link: "/panel/dashboard",
  },
  {
    title: "Products",
    icon: <StorefrontIcon />,
    link: "/panel/products",
  },
  {
    title: "Restaurants",
    icon: <AssignmentIcon />,
    link: "/panel/restaurants",
  },
  {
    title: "Category",
    icon: <CategoryOutlinedIcon />,
    link: "/panel/category",
  },
  {
    title: "Orders",
    icon: <FilterFramesIcon />,
    link: "/panel/orders",
  },
  {
    title: "Offer",
    icon: <LocalOfferIcon />,
    link: "/panel/offer",
  }
];

export default SidebarData;

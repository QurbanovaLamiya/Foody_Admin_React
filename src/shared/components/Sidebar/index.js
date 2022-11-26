import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Dashboard from "../../../pages/Dashboard";
import Products from "../../../pages/Products";
import Restaurants from "../../../pages/Restaurants";
import Category from "../../../pages/Category";
import Orders from "../../../pages/Orders";
import Offers from "../../../pages/Offers";
import SidebarList from "./SidebarList";

// Style
// import SidebarStyle from "./Sidebar.module.css"


const Sidebar = () => {
  return (
    <div className="d-flex">
      <SidebarList />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/offer" element={<Offers />} />
      </Routes>
    </div>
  );
};

export default Sidebar;

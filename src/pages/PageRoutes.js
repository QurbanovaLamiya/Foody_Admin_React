// React-Router-Dom
import { Routes, Route } from "react-router-dom";

// Components
import Header from "../shared/components/Header";
import Sidebar from "../shared/components/Sidebar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Restaurants from "./Restaurants";
import Category from "./Category";
import Orders from "./Orders";
import Offers from "./Offers";

const PageRoutes = () => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Routes>
          <Route path="/panel/dashboard" element={<Dashboard />} />
          <Route path="/panel/products" element={<Products />} />
          <Route path="/panel/restaurants" element={<Restaurants />} />
          <Route path="/panel/category" element={<Category />} />
          <Route path="/panel/orders" element={<Orders />} />
          <Route path="/panel/offer" element={<Offers />} />
        </Routes>
      </div>
    </>
  );
};

export default PageRoutes;

// React-Router-Dom
import { Routes, Route, Navigate } from "react-router-dom";

// Components
// import Login from "./Login";
import Header from "../shared/components/Header";
import Sidebar from "../shared/components/Sidebar";
import Dashboard from "../features/Dashboard/DashboardContainer";
import Products from "../features/Products/ProductsContainer";
import Restaurants from "../features/Restaurants/RestaurantsContainer";
import Category from "../features/Category/CategoryContainer";
import Orders from "../features/Orders/OrdersContainer";
import Offers from "../features/Offers/OffersContainer";

const RootPage = () => {
  return (
    <>
      {/* <Login /> */}
      <Header />
      <div className="d-flex">
        <Sidebar />
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
    </>
  );
};

export default RootPage;

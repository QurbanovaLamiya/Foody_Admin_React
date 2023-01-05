// React-Router-Dom
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

// Components
const Header = lazy(() => import("../shared/components/Header"));
const Sidebar = lazy(() => import("../shared/components/Sidebar"));
const Dashboard = lazy(() => import("./Dashboard"));
const Products = lazy(() => import("./Products"));
const Restaurants = lazy(() => import("./Restaurants"));
const Category = lazy(() => import("./Category"));
const Orders = lazy(() => import("./Orders"));
const Offers = lazy(() => import("./Offers"));

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
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/" element={<Navigate replace to="login" />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default PageRoutes;

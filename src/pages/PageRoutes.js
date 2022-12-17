// React-Router-Dom
import { Routes, Route } from "react-router-dom";

// Components
import Header from "../shared/components/Header";
import Sidebar from "../shared/components/Sidebar";
import Dashboard from "../features/Dashboard/DashboardContainer";
import Products from "../features/Products/ProductsContainer";
import Restaurants from "../features/Restaurants/RestaurantsContainer";
import Category from "../features/Category/CategoryContainer";
import Orders from "../features/Orders/OrdersContainer";
import Offers from "../features/Offers/OffersContainer";

const PageRoutes = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/category" element={<Category />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offer" element={<Offers />} />
        </Routes>
      </div>
    </div>
  );
};

export default PageRoutes;

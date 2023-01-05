import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";
import Loading from "./shared/components/Loading";
import { LoginProvider } from "./provider/Login/LoginProvider";
import { ProductProvider } from "./provider/Product/ProductProvider";
import { RestaurantProvider } from "./provider/Restaurant/RestaurantProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RestaurantProvider>
        <ProductProvider>
          <LoginProvider>
            <Router>
              <App />
            </Router>
          </LoginProvider>
        </ProductProvider>
      </RestaurantProvider>
    </Suspense>
  </React.StrictMode>
);

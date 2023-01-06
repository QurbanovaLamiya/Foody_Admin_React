import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./provider/Login/LoginProvider";
import { ProductProvider } from "./provider/Product/ProductProvider";
import { RestaurantProvider } from "./provider/Restaurant/RestaurantProvider";
import App from "./App";
import Loading from "./shared/components/Loading";
import "./i18n";
// import { CategoryProvider } from "./provider/Category/CategoryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RestaurantProvider>
        <ProductProvider>
          {/* <CategoryProvider> */}
            <LoginProvider>
              <Router>
                <App />
              </Router>
            </LoginProvider>
          {/* </CategoryProvider> */}
        </ProductProvider>
      </RestaurantProvider>
    </Suspense>
  </React.StrictMode>
);

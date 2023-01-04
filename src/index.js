import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";
import Loading from "./shared/components/Loading";
import { LoginProvider } from "./provider/Login/LoginProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <LoginProvider>
        <Router>
          <App />
        </Router>
      </LoginProvider>
    </Suspense>
  </React.StrictMode>
);

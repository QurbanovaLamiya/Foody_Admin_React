import { Fragment, lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLoginProvider } from "../provider/Login/LoginProvider";

// Components
const Login = lazy(() => import("./Login"));
const PageRoutes = lazy(() => import("./PageRoutes"));
const AuthError = lazy(() => import("./AuthError"));

const RootPage = () => {
  const [authenticated, setauthenticated] = useState([]);

  const { state } = useLoginProvider();

  useEffect(() => {
    setauthenticated(localStorage.getItem("isLogin"));
  }, []);

  return (
    <Fragment>
      {state.isLogin || authenticated === "true" ? (
        <PageRoutes />
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="*" element={<AuthError />} />
        </Routes>
      )}
    </Fragment>
  );
};

export default RootPage;

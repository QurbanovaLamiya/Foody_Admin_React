import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

// Components
import Login from "./Login";
import PageRoutes from "./PageRoutes";

const RootPage = () => {
  const [authenticated, setauthenticated] = useState([]);
  const state = useSelector((state) => state);

  useEffect(() => {
    setauthenticated(localStorage.getItem("isLogin"));
  }, []);

  return (
    <Fragment>
      {state.loginSlice.isLogin || authenticated === "true" ? (
        <PageRoutes />
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="login" />} />
        </Routes>
      )}
    </Fragment>
  );
};

export default RootPage;

// Components
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
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
      {state.login.isLogin || authenticated === true ? (
        <PageRoutes />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </Fragment>
  );
};

export default RootPage;

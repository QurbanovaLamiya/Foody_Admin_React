import { Fragment, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLoginProvider } from "../provider/Login/LoginProvider";

// Components
import Login from "./Login";
import PageRoutes from "./PageRoutes";

const RootPage = () => {
  const [authenticated, setauthenticated] = useState([]);

  const { state } = useLoginProvider();

  console.log(state);

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
          <Route path="/" element={<Navigate replace to="login" />} />
        </Routes>
      )}
    </Fragment>
  );
};

export default RootPage;

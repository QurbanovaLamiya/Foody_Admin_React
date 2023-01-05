import { NavLink } from "react-router-dom";
import Img404 from "../../image/404/error.jpg";

const inlineStyle = {
  background: "#c035a2",
  color: "#fff",
  width: "100px",
  height: "30px",
  border: "none",
  borderRadius: "14px",
};

const AuthErrorContainer = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <NavLink to="/login">
        <button style={inlineStyle}>back</button>
      </NavLink>
      <img src={Img404} alt="404" width="60%" />
    </div>
  );
};

export default AuthErrorContainer;

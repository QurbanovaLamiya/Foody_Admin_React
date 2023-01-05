import { NavLink } from "react-router-dom";
import Img404 from "../../image/404/404.png";

const inlineStyle = {
  background: "#c035a2",
  color: "#fff",
  width: "100px",
  height: "30px",
  border: "none",
  borderRadius: "14px",
};

const Page404Container = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <NavLink to="/panel/dashboard">
        <button style={inlineStyle}>back</button>
      </NavLink>
      <img src={Img404} alt="404" />
    </div>
  );
};

export default Page404Container;

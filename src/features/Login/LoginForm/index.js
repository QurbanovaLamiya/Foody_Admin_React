import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { setLogin } from "../../../store/slices/loginSlice";
import FormStyle from "./LoginForm.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

let inlineStyle = {
  width: "100%",
  fontFamily: "Roboto",
  fontSize: "25px",
  fontWeight: 500,
  lineHeight: "29px",
  background: "#c035a2",
  borderRadius: "4px",
  border: "none",
  marginTop: "36px",
  marginBottom: "57px",
  padding: "10px 0",
};

const LoginForm = () => {
  const {t}= useTranslation()
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.user_name) {
        errors.user_name = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
    onSubmit: (values, action) => {
      if (
        values.user_name !== state.loginSlice.user.user_name ||
        values.password !== state.loginSlice.user.password
      ) {
        toast.error("Incorrect username or password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        action.resetForm();
      } else {
        localStorage.setItem("isLogin", true);
        dispatch(setLogin(true));
        navigate("/panel/dashboard");
      }
    },
  });

  return (
    <Form className={FormStyle.Form} onSubmit={formik.handleSubmit}>
      <h1 className={FormStyle.formTitle}>{t("welcome")}</h1>
      <Form.Group className="mb-4" controlId="formBasicUserName">
        <input
          type="text"
          name="user_name"
          placeholder="Username"
          className={FormStyle.Input}
          onChange={formik.handleChange}
          value={formik.values.user_name}
        />
        {formik.errors.user_name && (
          <span className={FormStyle.required}>{formik.errors.user_name}</span>
        )}
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={FormStyle.Input}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <span className={FormStyle.required}>{formik.errors.password}</span>
        )}
      </Form.Group>
      <Button type="submit" style={inlineStyle}>
        sign in
      </Button>
      <ToastContainer />
    </Form>
  );
};

export default LoginForm;

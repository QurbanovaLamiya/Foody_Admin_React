import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import FormStyle from "./LoginForm.module.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useLoginProvider } from "../../../provider/Login/LoginProvider";
import { LOGIN } from "../../../provider/types";

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
  const { state, dispatch } = useLoginProvider();
  const { user_name, password } = state.user;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.user_name) {
        errors.user_name = t("required");
      }
      if (!values.password) {
        errors.password = t("required");
      }
      return errors;
    },
    onSubmit: (values, action) => {
      if (values.user_name !== user_name || values.password !== password) {
        toast.error(t("incorrect message"), {
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
        dispatch({ type: LOGIN, payload: true });
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
          placeholder={t("Username")}
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
          placeholder={t("Password")}
          className={FormStyle.Input}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <span className={FormStyle.required}>{formik.errors.password}</span>
        )}
      </Form.Group>
      <Button type="submit" style={inlineStyle}>
        {t("sign in")}
      </Button>
      <ToastContainer />
    </Form>
  );
};

export default LoginForm;

import { Form, Button } from "react-bootstrap";
import FormStyle from "./LoginForm.module.css";
import { useFormik } from "formik";

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
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <Form className={FormStyle.Form} onSubmit={formik.handleSubmit}>
      <h1 className={FormStyle.formTitle}>Welcome Admin</h1>
      <Form.Group className="mb-4" controlId="formBasicUserName">
        <input
          type="text"
          name="user_name"
          placeholder="Username"
          className={FormStyle.Input}
          onChange={formik.handleChange}
          value={formik.values.user_name}
        />
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
      </Form.Group>
      <Button type="submit" style={inlineStyle}>
        sign in
      </Button>
    </Form>
  );
};

export default LoginForm;

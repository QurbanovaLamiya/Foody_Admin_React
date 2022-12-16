import { Form, Button } from "react-bootstrap";
import FormStyle from "./LoginForm.module.css";

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
  return (
    <Form className={FormStyle.Form}>
      <h1 className={FormStyle.formTitle}>Welcome Admin</h1>
      <Form.Group className="mb-4" controlId="formBasicUserName">
        <Form.Control
          type="text"
          placeholder="Username"
          className={FormStyle.Input}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          className={FormStyle.Input}
        />
      </Form.Group>
      <Button style={inlineStyle}>sign in</Button>
    </Form>
  );
};

export default LoginForm;

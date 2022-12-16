import { Form, Button } from "react-bootstrap";
import FormStyle from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <Form className={FormStyle.Form}>
      <h1 className={FormStyle.formTitle}>Welcome Admin</h1>


      {/* <Form.Group className="mb-4" controlId="formBasicUserName">
        <Form.Control
          type="text"
          placeholder="Username"
          className={FormStyle.Input}
        />
      </Form.Group> */}
      {/* <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          className={FormStyle.Input}
        />
      </Form.Group> */}
      {/* <Button className={`${FormStyle.Button} w-100`}>
        sign in
      </Button> */}
    </Form>
  );
};

export default LoginForm;

// React-Bootstrap
import { Container, Col, Row } from "react-bootstrap";

// Images
import FoodyIcon from "../../../image/logo/foodyIcon.svg";
import AdminLoginImg from "../../../image/adminLogin/adminLoginImg.svg";
import flagIcon from "../../../image/flagIcon/en.svg";

// Components
import LoginForm from "../LoginForm";

// Style
import LoginStyle from "./LoginContainer.module.css";

const LoginContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img src={FoodyIcon} alt="foodyIcon" className={LoginStyle.Logo} />
        </Col>
      </Row>
      <Row className={LoginStyle.loginSection}>
        <Col   className={LoginStyle.Form}>
          <LoginForm />
        </Col>
        <Col className={LoginStyle.loginImageSection}>
          <img src={flagIcon} alt="FlagIcon" className={LoginStyle.flagIcon} />
          <img
            src={AdminLoginImg}
            alt="loginImg"
            className={LoginStyle.loginImg}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginContainer;

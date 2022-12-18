// React-Bootstrap
import { Container, Col, Row } from "react-bootstrap";

// Material UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Images
import FoodyIcon from "../../../image/logo/foodyIcon.svg";
import AdminLoginImg from "../../../image/adminLogin/adminLoginImg.svg";
import flagEn from "../../../image/flagIcon/en.svg";
import flagFr from "../../../image/flagIcon/fr.svg";
import flagAz from "../../../image/flagIcon/az.svg";

// Components
import LoginForm from "../LoginForm";

// Style
import LoginStyle from "./LoginContainer.module.css";

import { useState } from "react";

const LoginContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <img src={FoodyIcon} alt="foodyIcon" className={LoginStyle.Logo} />
        </Col>
      </Row>
      <Row className={LoginStyle.loginSection}>
        <Col className={LoginStyle.Form}>
          <LoginForm />
        </Col>
        <Col className={LoginStyle.loginImageSection}>
          <div className={LoginStyle.flagSection}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                src={flagEn}
                alt="FlagIcon"
                className={LoginStyle.flagIcon}
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <img
                  src={flagEn}
                  alt="FlagIcon"
                  className={LoginStyle.flagIcon}
                />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <img
                  src={flagFr}
                  alt="FlagIcon"
                  className={LoginStyle.flagIcon}
                />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <img
                  src={flagAz}
                  alt="FlagIcon"
                  className={LoginStyle.flagIcon}
                />
              </MenuItem>
            </Menu>
          </div>
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

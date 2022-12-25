// React-Bootstrap
import { Container, Col, Row } from "react-bootstrap";

// Material UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Images
import FoodyIcon from "../../../image/logo/foodyIcon.svg";
import AdminLoginImg from "../../../image/adminLogin/adminLoginImg.svg";
import en from "../../../image/flagIcon/en.svg";
import fr from "../../../image/flagIcon/fr.svg";
import az from "../../../image/flagIcon/az.svg";

// Components
import LoginForm from "../LoginForm";

// Style
import LoginStyle from "./LoginContainer.module.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
  az: { nativeName: "Az" },
};

const flags = {
  en,
  fr,
  az,
};

const LoginContainer = () => {
  const { i18n } = useTranslation();

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
                src={flags[i18n.resolvedLanguage]}
                alt=""
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
              {Object.keys(lngs).map((lng) => (
                <MenuItem
                  key={lng}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  <img
                    src={flags[lng]}
                    alt="FlagIcon"
                    className={LoginStyle.flagIcon}
                  />
                </MenuItem>
              ))}
              {/* <MenuItem onClick={handleClose}>
                
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
              </MenuItem> */}
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

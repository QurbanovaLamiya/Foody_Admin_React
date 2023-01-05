import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import { useTranslation } from "react-i18next";

import Button from "../../components/Button";

import ModalStyle from "./Modal.module.css";

import PropTypes from "prop-types";

const Modal = ({ button, title, children, drawer, setDrawer }) => {
  const { t } = useTranslation();

  return (
    <>
      <Button setDrawer={setDrawer} buttonName={button} />
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        <Box role="presentation" className={ModalStyle.Box}>
          <div className={ModalStyle.Title}>
            <button
              className={ModalStyle.X_button}
              onClick={() => setDrawer(false)}
            >
              X
            </button>
            <h4>{t(`modal.${title}`)}</h4>
          </div>
          {children}
        </Box>
      </Drawer>
    </>
  );
};

Modal.propTypes = {
  button: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.object,
  drawer: PropTypes.bool,
  setDrawer: PropTypes.func,
};

export default Modal;

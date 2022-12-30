// Material Ui
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useState } from "react";
import ModalStyle from "./Modal.module.css";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";

const Modal = ({ button, title, children }) => {
  const [isDrawer, setIsDrawer] = useState(false);

  // console.log("(title-in icinde olan)",title);

  const { t } = useTranslation();

  return (
    <>
      <Button drawer={setIsDrawer} buttonName={button} />
      <Drawer anchor="right" open={isDrawer} onClose={() => setIsDrawer(false)}>
        <Box role="presentation" className={ModalStyle.Box}>
          <div className={ModalStyle.Title}>
            <button
              className={ModalStyle.X_button}
              onClick={() => setIsDrawer(false)}
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

export default Modal;

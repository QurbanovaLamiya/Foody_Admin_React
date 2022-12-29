// Material Ui
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import ModalStyle from "./Modal.module.css";

// import { useEffect, useState } from "react";
import { useState } from "react";
// import { restaurantsAPI } from "../../../api/restaurant";

// import Form from "../Form";
import Button from "../../components/Button";

// const Modal = ({ form: { button, title, formInfo } }) => {
const Modal = ({button,title, children }) => {
  const [isDrawer, setIsDrawer] = useState(false);
  // const [restaurant, setRestaurant] = useState(null);

  // useEffect(() => {
  //   getRestaurant();
  // }, []);

  // const getRestaurant = () => {
  //   restaurantsAPI
  //     .then((res) => {
  //       setRestaurant(res.data.restaurant.restaurants);
  //     })
  //     .catch((err) => {
  //       // console.log("err", err);
  //     });
  // };

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
            <h4>{title}</h4>
          </div>
          {children}
          {/* <Form restaurant={restaurant} formInfo={formInfo} /> */}
        </Box>
      </Drawer>
    </>
  );
};

export default Modal;

// Material Ui
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import ModalStyle from "./Modal.module.css";

import { useEffect, useState } from "react";
import { restaurantsAPI } from "../../../api/restaurant";

import Form from "../Form";
import Button from "../../components/Button";

const Modal = ({buttonName}) => {
  const [isDrawer, setIsDrawer] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  
  // console.log(props);
  
  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    restaurantsAPI
      .then((res) => {
        setRestaurant(res.data.restaurant.restaurants);
      })
      .catch((err) => {
        // console.log("err", err);
      });
    };
    
    return (
    <>
      <Button drawer={setIsDrawer}  />
      <Drawer anchor="right" open={isDrawer} onClose={() => setIsDrawer(false)}>
        <Box role="presentation" className={ModalStyle.Box}>
          <div className={ModalStyle.Title}>
            <button
              className={ModalStyle.X_button}
              onClick={() => setIsDrawer(false)}
            >
              X
            </button>
            <h4></h4>
          </div>
          <Form restaurant={restaurant} buttonName={buttonName}/>
        </Box>
      </Drawer>
    </>
  );
};

export default Modal;

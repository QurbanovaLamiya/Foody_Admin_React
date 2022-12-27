// Material Ui
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

import AddProduct from "./Modal.module.css";

import { useEffect, useState } from "react";
import { restaurantsAPI } from "../../../api/restaurant";

import Form from "../Form";

const Modal = () => {
  const [isDrawer, setIsDrawer] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

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
      <button
        className={AddProduct.Add_Product}
        onClick={() => setIsDrawer(true)}
      >
        <AddIcon
          sx={{ fontSize: 20 }}
          style={{ marginRight: "5px" }}
          edge="start"
          aria-label="logo"
        />
        ADD PRODUCT
      </button>
      <Drawer anchor="right" open={isDrawer} onClose={() => setIsDrawer(false)}>
        <Box role="presentation" className={AddProduct.Box}>
          <div className={AddProduct.Title}>
            <button
              className={AddProduct.X_button}
              onClick={() => setIsDrawer(false)}
            >
              X
            </button>
            <h4>Add product</h4>
          </div>
          <Form restaurant={restaurant}/>
        </Box>
      </Drawer>
    </>
  );
};

export default Modal;

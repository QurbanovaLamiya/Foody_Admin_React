// Material Ui
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import AddProduct from "./addModal.module.css";

import { useState } from "react";

const AddModal = () => {
  const [isDrawer, setIsDrawer] = useState(false);
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
          <div className={AddProduct.ImageSection}>
            <p>Upload your product image</p>
            <div>
              <CloudUploadIcon
                style={{ color: "#EC5CF8", width: "60px", height: "40px" }}
              />
              <span>upload</span>
            </div>
          </div>
          <div className={AddProduct.FormSection}>
            <p>Add your Product description and necessary information</p>
            <form></form>
          </div>
          <div className={AddProduct.Buttons}>
            <button style={{background:"#43445A"}}>Cancel</button>
            <button style={{background:"#C035A2"}}>Create Product</button>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default AddModal;

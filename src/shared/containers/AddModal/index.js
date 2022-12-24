// Material Ui
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import AddProduct from "./addModal.module.css";

import { useState } from "react";
import { useFormik } from "formik";

const AddModal = () => {
  const [isDrawer, setIsDrawer] = useState(false);

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      description: "",
      price: "",
      restaurants: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.image) {
        errors.image = "Required";
      }
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.description) {
        errors.description = "Required";
      }
      if (!values.price) {
        errors.price = "Required";
      }
      if (!values.restaurants) {
        errors.restaurants = "Required";
      }

      return errors;
    },
    onSubmit: (values, action) => {
      console.log("values", values);
    },
  });

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
          <form
            onSubmit={formik.handleSubmit}
            className={AddProduct.FormSection}
          >
            <div className={AddProduct.ImageSection}>
              <p>Upload your product image</p>
              <div>
                <CloudUploadIcon
                  style={{ color: "#EC5CF8", width: "60px", height: "40px" }}
                />
                <span>upload</span>
              </div>
            </div>
            <div className={AddProduct.DataInfoSection}>
              <p>Add your Product description and necessary information</p>

              <div className={AddProduct.DataFormSection}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  style={{marginBottom:"26px"}}
                />
                {formik.errors.name && <span>{formik.errors.name}</span>}
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  style={{marginBottom:"9px",height:"133px"}}
                />
                {formik.errors.description && (
                  <span>{formik.errors.description}</span>
                )}

                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  style={{marginBottom:"28px"}}
                />
                {formik.errors.price && <span>{formik.errors.price}</span>}

                <label htmlFor="restaurants">Restaurants</label>
                <select name="restaurants" id="restaurants">
                  <option value="Papa Jhon’s">Papa Jhon’s</option>
                  <option value="Pizza Hut">Pizza Hut</option>
                  <option value="Burger King">Burger King</option>
                  <option value="McDonald’s">McDonald’s</option>
                  <option value="KFC">KFC</option>
                </select>
                {formik.errors.restaurants && (
                  <span>{formik.errors.restaurants}</span>
                )}
              </div>
            </div>

            <div className={AddProduct.Buttons}>
              <button style={{ background: "#43445A" }}>Cancel</button>
              <button type="submit" style={{ background: "#C035A2" }}>
                Create Product
              </button>
            </div>
          </form>
        </Box>
      </Drawer>
    </>
  );
};

export default AddModal;

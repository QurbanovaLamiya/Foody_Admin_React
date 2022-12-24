// Material Ui
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Form, Button } from "react-bootstrap";

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
      // restaurants: "",
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
      // if (!values.restaurants) {
      //   errors.restaurants = "Required";
      // }

      return errors;
    },
    onSubmit: (values, action) => {
      console.log("values", values);
      console.log("action", action);
      action.resetForm();
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
          <Form
            onSubmit={formik.handleSubmit}
            className={AddProduct.FormSection}
          >
            <div className={AddProduct.ImageSection}>
              <p>Upload your product image</p>
              <label htmlFor="image">
                <CloudUploadIcon
                  style={{ color: "#EC5CF8", width: "60px", height: "40px" }}
                />
                upload
                <input
                  id="image"
                  name="image"
                  type="file"
                  style={{ display: "none" }}
                />
              </label>
            </div>
            <div className={AddProduct.DataInfoSection}>
              <p>Add your Product description and necessary information</p>
              <div className={AddProduct.DataFormSection}>
                <Form.Group
                  controlId="formBasicName"
                  className={AddProduct.FormGroup}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name && <span>{formik.errors.name}</span>}
                </Form.Group>
                <Form.Group
                  controlId="formBasicDescription"
                  className={AddProduct.FormGroup}
                >
                  <label htmlFor="description">Description</label>
                  <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                  {formik.errors.description && (
                    <span>{formik.errors.description}</span>
                  )}
                </Form.Group>
                <Form.Group
                  controlId="formBasicPrice"
                  className={AddProduct.FormGroup}
                >
                  <label htmlFor="price">Price</label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  />
                  {formik.errors.price && <span>{formik.errors.price}</span>}
                </Form.Group>
                <Form.Group
                  controlId="formBasicRestaurant"
                  className={AddProduct.FormGroup}
                >
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
                </Form.Group>
              </div>
            </div>
            <div className={AddProduct.Buttons}>
              <Button style={{ background: "#43445A" }}>Cancel</Button>
              <Button type="submit" style={{ background: "#C035A2" }}>
                Create Product
              </Button>
            </div>
          </Form>
        </Box>
      </Drawer>
    </>
  );
};

export default AddModal;

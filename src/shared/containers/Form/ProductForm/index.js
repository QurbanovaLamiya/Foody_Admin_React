import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { useEffect, useId, useState } from "react";

import { Form, Button } from "react-bootstrap";

import { useTranslation } from "react-i18next";

import { useFormik } from "formik";

import { restaurantsAPI } from "../../../../api/restaurant";

import FormStyle from "../Form.module.css";

import { productCreateAPI } from "../../../../api/product";
import { useProductProvider } from "../../../../provider/Product/ProductProvider";
import { PRODUCT_DATA, RESTAURANT_DATA } from "../../../../provider/types";
import { useRestaurantProvider } from "../../../../provider/Restaurant/RestaurantProvider";

const ProductForm = ({ setDrawer }) => {
  const { t } = useTranslation();
  const { resState, resDispatch } = useRestaurantProvider();
  const { restaurant } = resState;
  let id = useId();

  const { state, dispatch } = useProductProvider();
  const { product } = state;


  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    restaurantsAPI
      .then((res) => {
        resDispatch({
          type: RESTAURANT_DATA,
          payload: res.data.restaurant.restaurants,
        });
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

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
        errors.image = t("required");
      }

      if (!values.name) {
        errors.name = t("required");
      }

      if (!values.description) {
        errors.description = t("required");
      }

      if (!values.price) {
        errors.price = t("required");
      }

      if (!values.restaurants) {
        errors.restaurants = t("required");
      }

      return errors;
    },
    onSubmit: (values, action) => {
      let item = {
        id,
        image_url: values.image,
        product_name: values.name,
        product_price: values.price,
        restaurant_name: values.restaurants,
        description: values.description,
      };

      productCreateAPI(item)
        .then((res) => {
          let newArray = [...product, item];
          dispatch({ type: PRODUCT_DATA, payload: newArray });
        })
        .catch(() => {});

      action.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className={FormStyle.FormSection}>
      <div className={FormStyle.ImageSection}>
        <div>
          <p>{t("modal.upload_image")}</p>
          {formik.values.image && (
            <img
              src={formik.values.image}
              alt={formik.values.name}
              width={70}
              height={70}
            />
          )}
        </div>
        <label htmlFor="image" style={{ position: "relative" }}>
          <CloudUploadIcon
            style={{ color: "#EC5CF8", width: "60px", height: "40px" }}
          />
          {t("modal.upload")}
          <input
            id="image"
            name="image"
            type="file"
            style={{ display: "none" }}
            onChange={(e) =>
              formik.setFieldValue(
                "image",
                URL.createObjectURL(e.target.files[0])
              )
            }
          />
          {formik.errors.image && (
            <span style={{ position: "absolute", left: "3%", top: "10px" }}>
              {formik.errors.image}
            </span>
          )}
        </label>
      </div>

      <div className={FormStyle.DataInfoSection}>
        <p>{t("modal.product_information")}</p>
        <div className={FormStyle.DataFormSection}>
          <Form.Group controlId="formBasicName" className={FormStyle.FormGroup}>
            <label htmlFor="name">{t("modal.name")}</label>
            <input
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && <span>{formik.errors.name}</span>}
          </Form.Group>

          <Form.Group
            controlId="formBasicDescription"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="description">{t("modal.description")}</label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
            {formik.errors.description && (
              <span>{formik.errors.description}</span>
            )}
          </Form.Group>

          <Form.Group
            controlId="formBasicPrice"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="">{t("modal.price")}</label>
            <input
              id=""
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            {formik.errors.price && <span>{formik.errors.price}</span>}
          </Form.Group>

          <Form.Group
            controlId="formBasicRestaurant"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="restaurants">{t("modal.restaurants")}</label>
            <select
              name="restaurants"
              id="restaurants"
              onChange={formik.handleChange}
              value={formik.values.restaurants}
            >
              {restaurant?.map((restaurant) => (
                <option key={restaurant.id} value={restaurant.restaurant_name}>
                  {restaurant.restaurant_name}
                </option>
              ))}
            </select>
            {formik.errors.restaurants && (
              <span>{formik.errors.restaurants}</span>
            )}
          </Form.Group>
        </div>
      </div>

      <div className={FormStyle.Buttons}>
        <Button
          style={{ background: "#43445A" }}
          onClick={() => setDrawer(false)}
        >
          {t("modal.cancel")}
        </Button>
        <Button type="submit" style={{ background: "#C035A2" }}>
          {t("modal.create")}
        </Button>
      </div>
    </Form>
  );
};

export default ProductForm;

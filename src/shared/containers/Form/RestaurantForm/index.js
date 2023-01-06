import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useEffect, useId } from "react";

import { useFormik } from "formik";

import FormStyle from "../Form.module.css";

import { categoryAPI } from "../../../../api/category";
import { restaurantCreateAPI } from "../../../../api/restaurant";

import { useRestaurantProvider } from "../../../../provider/Restaurant/RestaurantProvider";
import { useCategoryProvider } from "../../../../provider/Category/CategoryProvider";
import { CATEGORY_DATA, RESTAURANT_DATA } from "../../../../provider/types";

import PropTypes from "prop-types";

const RestaurantForm = ({ setDrawer }) => {
  const { t } = useTranslation();

  const { state, dispatch } = useCategoryProvider();
  const { category } = state;

  const { resState, resDispatch } = useRestaurantProvider();
  const { restaurant } = resState;

  const id = useId();
  let newId = id.slice(1, -1);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        dispatch({
          type: CATEGORY_DATA,
          payload: [
            ...new Set(
              res.data.category.categories.map((item) => item.category_slug)
            ),
          ],
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
      cuisine: "",
      delivery_price: "",
      delivery_minute: "",
      address: "",
      category: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.image) {
        errors.image = t("required");
      }

      if (!values.name) {
        errors.name = t("required");
      }

      if (!values.cuisine) {
        errors.cuisine = t("required");
      }

      if (!values.delivery_price) {
        errors.delivery_price = t("required");
      }

      if (!values.delivery_minute) {
        errors.delivery_minute = t("required");
      }

      if (!values.address) {
        errors.address = t("required");
      }

      if (!values.category) {
        errors.category = t("required");
      }

      return errors;
    },
    onSubmit: (values, action) => {
      let item = {
        id: newId,
        image_url: values.image,
        restaurant_name: values.name,
        cuisine: values.cuisine,
        delivery_price: values.delivery_price,
        delivery_minute: values.delivery_minute,
        address: values.address,
        category_name: values.category,
      };

      restaurantCreateAPI(item)
        .then((res) => {
          let newArray = [...restaurant, item];
          resDispatch({ type: RESTAURANT_DATA, payload: newArray });
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
        <p>{t("modal.restaurant_information")}</p>
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
            controlId="formBasicCuisine"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="cuisine">{t("modal.cuisine")}</label>
            <textarea
              id="cuisine"
              name="cuisine"
              onChange={formik.handleChange}
              value={formik.values.cuisine}
            ></textarea>
            {formik.errors.cuisine && <span>{formik.errors.cuisine}</span>}
          </Form.Group>

          <Form.Group
            controlId="formBasicPrice"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="delivery_price">{t("modal.delivery_price")}</label>
            <input
              id="delivery_price"
              name="delivery_price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.delivery_price}
            />
            {formik.errors.delivery_price && (
              <span>{formik.errors.delivery_price}</span>
            )}
          </Form.Group>

          <Form.Group
            controlId="formBasicDeliveryMin"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="delivery_minute">{t("modal.delivery_min")}</label>
            <input
              id="delivery_minute"
              name="delivery_minute"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.delivery_minute}
            />
            {formik.errors.delivery_minute && (
              <span>{formik.errors.delivery_minute}</span>
            )}
          </Form.Group>

          <Form.Group
            controlId="formBasicAddress"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="address">{t("modal.address")}</label>
            <input
              id="address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.errors.address && <span>{formik.errors.address}</span>}
          </Form.Group>

          <Form.Group
            controlId="formBasicCategory"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="category">{t("modal.category")}</label>
            <select
              name="category"
              id="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            >
              {category?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {formik.errors.category && <span>{formik.errors.category}</span>}
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

RestaurantForm.propTypes = {
  setDrawer: PropTypes.func,
};

export default RestaurantForm;

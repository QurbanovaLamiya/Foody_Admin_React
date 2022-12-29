import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

// import { useEffect, useState } from "react";
// import { restaurantsAPI } from "../../../../api/restaurant";
import FormStyle from "../Form.module.css";

const RestaurantForm = () => {
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
        errors.image = "Required";
      }

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.cuisine) {
        errors.cuisine = "Required";
      }

      if (!values.delivery_price) {
        errors.delivery_price = "Required";
      }

      if (!values.delivery_minute) {
        errors.delivery_minute = "Required";
      }

      if (!values.address) {
        errors.address = "Required";
      }

      if (!values.category) {
        errors.category = "Required";
      }

      return errors;
    },
    onSubmit: (values, action) => {
      console.log("values", values);
      console.log("action", action);

      action.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className={FormStyle.FormSection}>
      <div className={FormStyle.ImageSection}>
        <div>
          <p>Upload image</p>
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
          upload
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
        <p>Add your Restuarants information</p>
        <div className={FormStyle.DataFormSection}>
          <Form.Group controlId="formBasicName" className={FormStyle.FormGroup}>
            <label htmlFor="name">Name</label>
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
            <label htmlFor="cuisine">Cuisine</label>
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
            <label htmlFor="delivery_price">Delivery Price</label>
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
            <label htmlFor="delivery_minute">Delivery Min</label>
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
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.errors.address && <span>{formik.errors.address}</span>}
          </Form.Group>

          {/* <Form.Group
            controlId="formBasicRestaurant"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="restaurants">Restaurants</label>
            <select name="restaurants" id="restaurants">
              {restaurant?.map((restaurant) => (
                <option key={restaurant.id} value={restaurant.restaurant_name}>
                  {restaurant.restaurant_name}
                </option>
              ))}
            </select>
            {formik.errors.category && (
              <span>{formik.errors.category}</span>
            )}
          </Form.Group> */}
        </div>
      </div>

      <div className={FormStyle.Buttons}>
        <Button style={{ background: "#43445A" }}>Cancel</Button>
        <Button type="submit" style={{ background: "#C035A2" }}>
          Create
        </Button>
      </div>
    </Form>
  );
};

export default RestaurantForm;

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Form, Button } from "react-bootstrap";

import { useFormik } from "formik";

import FormStyle from "./Form.module.css";

const ModalForm = () => {
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      description: "",
      price: "",
      restaurant: "",
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
      // if (!values.restaurant) {
      //   errors.restaurant = "Required";
      // }

      return errors;
    },
    onSubmit: (values, action) => {
      // console.log("values", values);
      // console.log("action", action);
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
        <p></p>
        <div className={FormStyle.DataFormSection}>
          {/* {FormData.PRODUCTS.inputs?.map((field) => {
            switch (field.type) {
              case "text":
                return (
                  <Form.Group
                    controlId="formBasicName"
                    className={FormStyle.FormGroup}
                    key={field.id}
                  >
                    <label htmlFor="name">{field.label}</label>
                    <input
                      id="name"
                      name={field.name}
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.errors.name && <span>{formik.errors.name}</span>}
                  </Form.Group>
                );
              case "textarea":
                return (
                  <Form.Group
                    controlId="formBasicDescription"
                    className={FormStyle.FormGroup}
                    key={field.id}
                  >
                    <label htmlFor="description">{field.label}</label>
                    <textarea
                      id="description"
                      name={field.name}
                      onChange={formik.handleChange}
                      value={formik.values.description}
                    ></textarea>
                    {formik.errors.description && (
                      <span>{formik.errors.description}</span>
                    )}
                  </Form.Group>
                );
              case "number":
                return (
                  <Form.Group
                    controlId="formBasicPrice"
                    className={FormStyle.FormGroup}
                    key={field.id}
                  >
                    <label htmlFor="price">{field.label}</label>
                    <input
                      id="price"
                      name={field.name}
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                    />
                    {formik.errors.price && <span>{formik.errors.price}</span>}
                  </Form.Group>
                );

              case "select":
                return (
                  <Form.Group
                    controlId="formBasicRestaurant"
                    className={FormStyle.FormGroup}
                    key={field.id}
                  >
                    <label htmlFor="restaurant">{field.label}</label>
                    <select name={field.name} id="restaurant">
                      {restaurant?.map((restaurant) => (
                        <option
                          key={restaurant.id}
                          value={restaurant.restaurant_name}
                        >
                          {restaurant.restaurant_name}
                        </option>
                      ))}
                    </select>
                    {formik.errors.restaurant && (
                      <span>{formik.errors.restaurant}</span>
                    )}
                  </Form.Group>
                );
              default:
                return null;
            }
          })} */}
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

export default ModalForm;

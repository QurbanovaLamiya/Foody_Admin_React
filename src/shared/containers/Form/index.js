import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Form, Button } from "react-bootstrap";

import { useFormik } from "formik";

import FormStyle from "./Form.module.css";

const ModalForm = ({ restaurant, formInfo: { formTitle, labels, inputs } }) => {
  const formik = useFormik({
    initialValues: {
      image: "",
      // labels,
      // name: "",
      // description: "",
      // price: "",
      // restaurant: "",
      // cuisine:"",
      // delivery_price:"",
      // delivery_minute:"",
      // address:"",
      // category:""
    },
    validate: (values) => {
      // console.log("values", values);
      const errors = {};

      if (!values.image) {
        errors.image = "Required";
      }
      if (!values.name) {
        errors.labels = "Required";
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
      // action.resetForm();
    },
  });

  // console.log("labels",labels);
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
        <p>{formTitle}</p>
        <div className={FormStyle.DataFormSection}>
          {inputs?.map((field) => {
            // console.log("field", field);
            switch (field.type) {
              case "text":
                return (
                  <Form.Group
                    controlId="formBasicName"
                    className={FormStyle.FormGroup}
                    key={field.id}
                  >
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      id={field.id}
                      name={field.name}
                      onChange={formik.handleChange}
                      // value={formik.values.field.name}
                    />
                    {/* {formik.errors.name && <span>{formik.errors.name}</span>} */}
                  </Form.Group>
                );
              case "textarea":
                return (
                  <Form.Group
                    controlId="formBasicDescription"
                    className={FormStyle.FormGroup}
                    key={field.id}
                  >
                    <label htmlFor={field.id}>{field.label}</label>
                    <textarea
                      id={field.id}
                      name={field.name}
                      onChange={formik.handleChange}
                      // value={formik.values.field.name}
                    ></textarea>
                    {/* {formik.errors.description && (
                      <span>{formik.errors.description}</span>
                    )} */}
                  </Form.Group>
                );
              case "number":
                return (
                  <Form.Group
                    controlId="formBasicPrice"
                    className={FormStyle.FormGroup}
                    key={field.id}
                  >
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      id={field.id}
                      name={field.name}
                      type="number"
                      onChange={formik.handleChange}
                      // value={formik.values.field.name}
                    />
                    {/* {formik.errors.price && <span>{formik.errors.price}</span>} */}
                  </Form.Group>
                );

              case "select":
                return (
                  <Form.Group
                    controlId="formBasicRestaurant"
                    className={FormStyle.FormGroup}
                    key={field.id}
                  >
                    <label htmlFor={field.id}>{field.label}</label>
                    <select name={field.name} id={field.id}>
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
          })}
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

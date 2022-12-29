import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

import FormStyle from "../Form.module.css";

const OfferForm = () => {
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.image) {
        errors.image = "Required";
      }

      if (!values.title) {
        errors.title = "Required";
      }

      if (!values.description) {
        errors.description = "Required";
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
        <p>Add your Offer information</p>
        <div className={FormStyle.DataFormSection}>
          <Form.Group controlId="formBasicName" className={FormStyle.FormGroup}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title && <span>{formik.errors.title}</span>}
          </Form.Group>

          <Form.Group
            controlId="formBasicDescription"
            className={FormStyle.FormGroup}
          >
            <label htmlFor="description">Description</label>
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

export default OfferForm;

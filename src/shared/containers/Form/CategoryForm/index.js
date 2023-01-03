import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Form, Button } from "react-bootstrap";

import { useTranslation } from "react-i18next";

import { useFormik } from "formik";

import FormStyle from "../Form.module.css";
import { useCategoryProvider } from "../../../../provider/Category/CategoryProvider";
import { useId } from "react";
import { CATEGORY_DATA } from "../../../../provider/types";
import { categoryCreateAPI } from "../../../../api/category";

const CategoryForm = () => {
  const { t } = useTranslation();
  const id = useId();
  const { state, dispatch } = useCategoryProvider();
  const { category } = state;

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      slug: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.image) {
        errors.image = t("required");
      }

      if (!values.name) {
        errors.name = t("required");
      }

      if (!values.slug) {
        errors.slug = t("required");
      }

      return errors;
    },
    onSubmit: (values, action) => {
      let item = {
        id,
        image_url: values.image,
        category_name: values.name,
        category_slug: values.slug,
      };

      categoryCreateAPI(item)
        .then((res) => {
          let newArray = [...category, item];
          dispatch({ type: CATEGORY_DATA, payload: newArray });
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
        <p>{t("modal.category_information")}</p>
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

          <Form.Group controlId="formBasicName" className={FormStyle.FormGroup}>
            <label htmlFor="slug">{t("modal.slug")}</label>
            <input
              id="slug"
              name="slug"
              onChange={formik.handleChange}
              value={formik.values.slug}
            />
            {formik.errors.slug && <span>{formik.errors.slug}</span>}
          </Form.Group>
        </div>
      </div>

      <div className={FormStyle.Buttons}>
        <Button style={{ background: "#43445A" }}>{t("modal.cancel")}</Button>
        <Button type="submit" style={{ background: "#C035A2" }}>
          {t("modal.create")}
        </Button>
      </div>
    </Form>
  );
};

export default CategoryForm;

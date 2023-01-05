import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { useId } from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useFormik } from "formik";

import { offersCreateAPI } from "../../../../api/offers";

import FormStyle from "../Form.module.css";

import { useOfferProvider } from "../../../../provider/Offer/OfferProvider";
import { OFFER_DATA } from "../../../../provider/types";

import PropTypes from "prop-types";

const OfferForm = ({ setDrawer }) => {
  const { t } = useTranslation();

  const { state, dispatch } = useOfferProvider();
  const { offer } = state;

  const id = useId();
  let newId = id.slice(1, -1);

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.image) {
        errors.image = t("required");
      }

      if (!values.title) {
        errors.title = t("required");
      }

      if (!values.description) {
        errors.description = t("required");
      }

      return errors;
    },
    onSubmit: (values, action) => {
      let item = {
        id: newId,
        image_url: values.image,
        title: values.title,
        desc: values.description,
      };

      offersCreateAPI(item)
        .then((res) => {
          let newArray = [...offer, item];
          dispatch({ type: OFFER_DATA, payload: newArray });
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
        <p>{t("modal.offer_information")}</p>
        <div className={FormStyle.DataFormSection}>
          <Form.Group controlId="formBasicName" className={FormStyle.FormGroup}>
            <label htmlFor="title">{t("modal.title")}</label>
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

OfferForm.propTypes = {
  setDrawer: PropTypes.func,
};

export default OfferForm;

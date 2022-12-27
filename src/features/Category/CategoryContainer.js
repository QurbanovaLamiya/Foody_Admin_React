import CategoryStyle from "./Category.module.css";

import CategoryTable from "./CategoryTable";
import Modal from "../../shared/containers/Modal";
import FormData from "../../util/Form";

import { useTranslation } from "react-i18next";

const CategoryContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={CategoryStyle.Container}>
      <div className={CategoryStyle.Caption}>
        <h1>{t("menu.Category")}</h1>
        <Modal form={FormData.CATEGORY} />
      </div>
      <div>
        <CategoryTable />
      </div>
    </div>
  );
};

export default CategoryContainer;

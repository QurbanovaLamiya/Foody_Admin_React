import CategoryStyle from "./Category.module.css";

import CategoryTable from "./CategoryTable";
import Modal from "../../shared/containers/Modal";

import { useTranslation } from "react-i18next";
import CategoryForm from "../../shared/containers/Form/CategoryForm";

const CategoryContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={CategoryStyle.Container}>
      <div className={CategoryStyle.Caption}>
        <h1>{t("menu.Category")}</h1>
        <Modal button="ADD CATEGORY" title="Add Category">
          <CategoryForm />
        </Modal>
      </div>
      <div>
        <CategoryTable />
      </div>
    </div>
  );
};

export default CategoryContainer;

import CategoryStyle from "./Category.module.css";

import CategoryTable from "./CategoryTable";
import Modal from "../../shared/containers/Modal";

import { useTranslation } from "react-i18next";
import CategoryForm from "../../shared/containers/Form/CategoryForm";
import { useState } from "react";

const CategoryContainer = () => {
  const { t } = useTranslation();

  const [isDrawer, setIsDrawer] = useState(false);

  return (
    <div className={CategoryStyle.Container}>
      <div className={CategoryStyle.Caption}>
        <h1>{t("menu.Category")}</h1>
        <Modal
          button="ADD CATEGORY"
          title="Add Category"
          drawer={isDrawer}
          setDrawer={setIsDrawer}
        >
          <CategoryForm setDrawer={setIsDrawer} />
        </Modal>
      </div>
      <div>
        <CategoryTable />
      </div>
    </div>
  );
};

export default CategoryContainer;

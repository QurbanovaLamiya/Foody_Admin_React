import CategoryStyle from "./Category.module.css";
import CategoryTable from "./CategoryTable";

import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

const CategoryContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={CategoryStyle.Container}>
      <div className={CategoryStyle.Caption}>
        <h1>{t("menu.Category")}</h1>
        <button>
          <AddIcon />
          {t("add category")}
        </button>
      </div>
      <div>
        <CategoryTable />
      </div>
    </div>
  );
};

export default CategoryContainer;

import { useTranslation } from "react-i18next";
import ActionItemsStyle from "./ActionItems.module.css";

const ActionItems = () => {
  const { t } = useTranslation();
  return (
    <div className={ActionItemsStyle.Container}>
      <h1 className={ActionItemsStyle.Title}>
        {t("dashboard.assigned-action-items")}
      </h1>
      <div className={ActionItemsStyle.Content}>
        <p>{t("dashboard.no-items")}</p>
      </div>
    </div>
  );
};

export default ActionItems;

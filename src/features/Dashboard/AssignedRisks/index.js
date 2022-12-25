import { useTranslation } from "react-i18next";
import AssignedRisksStyle from "./AssignedRisks.module.css";

const AssignedRisks = () => {
  const { t } = useTranslation();
  return (
    <div className={AssignedRisksStyle.Container}>
      <h1 className={AssignedRisksStyle.Title}>
        {t("dashboard.assigned-risks")}
      </h1>
      <div className={AssignedRisksStyle.Content}>
        <p>{t("dashboard.no-risks")}</p>
      </div>
    </div>
  );
};

export default AssignedRisks;

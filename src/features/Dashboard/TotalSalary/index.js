import TotalSalaryStyle from "./TotalSalary.module.css";
import Area from "../Charts/Area";
import { useTranslation } from "react-i18next";

const TotalSalary = () => {
  const { t } = useTranslation();
  return (
    <div className={TotalSalaryStyle.Container}>
      <h1 className={TotalSalaryStyle.Title}>{t("dashboard.area-title")}</h1>
      <Area />
    </div>
  );
};

export default TotalSalary;

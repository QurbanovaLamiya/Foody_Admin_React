import { useTranslation } from "react-i18next";
import Donut from "../Charts/Donut";
import OrdersStyle from "./Orders.module.css";

const Orders = () => {
  const { t } = useTranslation();
  return (
    <div className={OrdersStyle.Container}>
      <h1 className={OrdersStyle.Title}>{t("dashboard.donut-title")}</h1>
      <div className={OrdersStyle.Donut}>
        <p className={OrdersStyle.DonutText}>
          {t("dashboard.donut-description")}
        </p>
        <Donut />
      </div>
    </div>
  );
};

export default Orders;

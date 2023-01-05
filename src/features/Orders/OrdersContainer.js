import { useTranslation } from "react-i18next";
import OrdersTable from "./OrdersTable";
import OrderStyle from "./Order.module.css";

const OrdersContainer = () => {
  const { t } = useTranslation();
  return (
    <div className={OrderStyle.Container}>
      <div className={OrderStyle.Caption}>
        <h1>{t("menu.Orders")}</h1>
      </div>
      <div className={OrderStyle.Table}>
        <OrdersTable />
      </div>
    </div>
  );
};

export default OrdersContainer;

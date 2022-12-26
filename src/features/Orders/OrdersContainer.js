import { useTranslation } from "react-i18next";
import OrderStyle from "./Order.module.css";
import OrdersTable from "./OrdersTable";

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

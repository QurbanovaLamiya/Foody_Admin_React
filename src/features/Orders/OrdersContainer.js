import OrderStyle from "./Order.module.css";
import OrdersTable from "./OrdersTable";

const OrdersContainer = () => {
  return (
    <div className={OrderStyle.Container}>
      <div className={OrderStyle.Caption}>
        <h1>Orders</h1>
      </div>
      <div className={OrderStyle.Table}>
        <OrdersTable />
      </div>
    </div>
  );
};

export default OrdersContainer;

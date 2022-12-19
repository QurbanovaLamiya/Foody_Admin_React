import Donut from "../Charts/Donut";
import OrdersStyle from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={OrdersStyle.Container}>
      <h1 className={OrdersStyle.Title}>Orders</h1>
      <Donut/>
    </div>
  );
};

export default Orders;

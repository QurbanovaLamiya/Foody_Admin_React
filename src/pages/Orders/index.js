import OrdersContainer from "../../features/Orders/OrdersContainer";
import { OrderProvider } from "../../provider/Order/OrderProvider";

const Orders = () => (
  <OrderProvider>
    <OrdersContainer />
  </OrderProvider>
);

export default Orders;

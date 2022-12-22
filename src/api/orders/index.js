import { Axios, AxiosMockCreate } from "../../mocks";
import ordersData from "../../mocks/orders/orders.json";

AxiosMockCreate.onGet("/orders").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { orders: ordersData }]);
    }, 1500);
  });
});

AxiosMockCreate.onDelete(/\/orders\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2500);
  });
});

export const ordersAPI = Axios.get("/orders");
export const ordersDeleteAPI = (id) => Axios.delete(`/orders/${id}`);

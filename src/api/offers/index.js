import { Axios, AxiosMockCreate } from "../../mocks";
import offersData from "../../mocks/offers/offers.json";

AxiosMockCreate.onGet("/offers").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { offers: offersData }]);
    }, 1500);
  });
});

AxiosMockCreate.onPost("/offers").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 1500);
  });
});

AxiosMockCreate.onDelete(/\/offers\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2500);
  });
});

export const offersAPI = Axios.get("/offers");
export const offersCreateAPI = (item) => Axios.post(`/offers`, item);
export const offersDeleteAPI = (id) => Axios.delete(`/offers/${id}`);

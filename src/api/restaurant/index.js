import { Axios, AxiosMockCreate } from "../../mocks";
import restaurantData from "../../mocks/restaurant/restaurant.json";

AxiosMockCreate.onGet("/restaurants").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { restaurant: restaurantData }]);
    }, 1500);
  });
});

export const restaurantsApi = Axios.get("/restaurants");

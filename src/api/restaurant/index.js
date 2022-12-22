import { Axios, AxiosMockCreate } from "../../mocks";
import restaurantData from "../../mocks/restaurant/restaurant.json";

AxiosMockCreate.onGet("/restaurants").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { restaurant: restaurantData }]);
    }, 1500);
  });
});

AxiosMockCreate.onDelete(/\/restaurants\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2500);
  });
});

export const restaurantsApi = Axios.get("/restaurants");
export const restaurantDeleteAPI = (id) => Axios.delete(`/restaurants/${id}`);

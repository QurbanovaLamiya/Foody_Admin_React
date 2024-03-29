import { Axios, AxiosMockCreate } from "../../mocks";
import categoryData from "../../mocks/category/category.json";

AxiosMockCreate.onGet("/category").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { category: categoryData }]);
    }, 1500);
  });
});

AxiosMockCreate.onPost("/category").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([201, { message: "Created", result: JSON.parse(config.data) }]);
    }, 1500);
  });
});

AxiosMockCreate.onDelete(/\/category\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2500);
  });
});

export const categoryAPI = Axios.get("/category");
export const categoryCreateAPI = (item) => Axios.post(`/category`, item);
export const categoryDeleteAPI = (id) => Axios.delete(`/category/${id}`);

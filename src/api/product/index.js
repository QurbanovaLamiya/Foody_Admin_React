import { Axios, AxiosMockCreate } from "../../mocks";
import productData from "../../mocks/product/product.json";

AxiosMockCreate.onGet("/products").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { products: productData }]);
    }, 1500);
  });
});

// AxiosMockCreate.onGet("/products").reply(200, {
//   products: productData,
// });

AxiosMockCreate.onDelete(/\/products\/\d+/).reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { message: "Success" }]);
    }, 2500);
  });
});

export const productAPI = Axios.get("/products");
export const productDeleteAPI = (id) => Axios.delete(`/products/${id}`);

import { Axios, AxiosMockCreate } from "../../mocks";
import productData from "../../mocks/product/product.json";

AxiosMockCreate.onGet("/products").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { products: productData }]);
    }, 5000);
  });
});

// AxiosMockCreate.onGet("/products").reply(200, {
//   products: productData,
// });

export const productApi = Axios.get("/products");

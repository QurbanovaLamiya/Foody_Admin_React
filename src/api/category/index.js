import { Axios, AxiosMockCreate } from "../../mocks";
import categoryData from "../../mocks/category/category.json";

AxiosMockCreate.onGet("/category").reply((config) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, { category: categoryData }]);
    }, 1500);
  });
});

// AxiosMockCreate.onDelete(/\/restaurants\/\d+/).reply((config) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([200, { message: "Success" }]);
//     }, 2500);
//   });
// });

export const categoryAPI = Axios.get("/category");
// export const restaurantDeleteAPI = (id) => Axios.delete(`/restaurants/${id}`);

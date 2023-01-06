import RestaurantsContainer from "../../features/Restaurants/RestaurantsContainer";
// import { CategoryProvider } from "../../provider/Category/CategoryProvider";
import { RestaurantProvider } from "../../provider/Restaurant/RestaurantProvider";

const Restaurants = () => (
  <RestaurantProvider>
    {/* <CategoryProvider> */}
      <RestaurantsContainer />;
    {/* </CategoryProvider> */}
  </RestaurantProvider>
);

export default Restaurants;

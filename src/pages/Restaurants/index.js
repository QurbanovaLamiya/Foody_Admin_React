import RestaurantsContainer from "../../features/Restaurants/RestaurantsContainer";
import { RestaurantProvider } from "../../provider/Restaurant/RestaurantProvider";

const Restaurants = () => (
  <RestaurantProvider>
    <RestaurantsContainer />;
  </RestaurantProvider>
);

export default Restaurants;

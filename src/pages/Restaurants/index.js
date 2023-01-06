import RestaurantsContainer from "../../features/Restaurants/RestaurantsContainer";
import { CategoryProvider } from "../../provider/Category/CategoryProvider";
import { RestaurantProvider } from "../../provider/Restaurant/RestaurantProvider";

const Restaurants = () => (
  <CategoryProvider>
    <RestaurantProvider>
      <RestaurantsContainer />;
    </RestaurantProvider>
  </CategoryProvider>
);

export default Restaurants;

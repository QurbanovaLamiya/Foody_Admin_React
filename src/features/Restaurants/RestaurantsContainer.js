// Material-UI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";

// Components
import RestaurantsCard from "./RestaurantsCard";

// Style
import RestaurantsStyle from "./Restaurants.module.css";

import { restaurantsApi } from "../../api/restaurant";
import { useEffect, useState } from "react";

const RestaurantsContainer = () => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    restaurantsApi
      .then((res) => {
        setRestaurant(res.data.restaurant.restaurants);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  return (
    <div className={RestaurantsStyle.Container}>
      <div className={RestaurantsStyle.Caption}>
        <h1>Restaurants</h1>
        <div className={RestaurantsStyle.Button_Section}>
          <div className={RestaurantsStyle.Select_Section}>
            <select className={RestaurantsStyle.Select}>
              <option>Catagory type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <KeyboardArrowDownIcon className={RestaurantsStyle.Icon} />
          </div>
          <button className={RestaurantsStyle.Add_Button}>
            <AddIcon />
            ADD RESTAURANTS
          </button>
        </div>
      </div>
      <div className={RestaurantsStyle.Content}>
        {restaurant?.map((restaurant) => (
          <RestaurantsCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
      <ul className={RestaurantsStyle.Pagination}>
        <li>
          <KeyboardArrowLeftIcon />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>
          <KeyboardArrowRightIcon />
        </li>
      </ul>
    </div>
  );
};

export default RestaurantsContainer;

import { Card } from "react-bootstrap";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import RestaurantCardStyle from "./RestaurantsCard.module.css";

import PropTypes from "prop-types";

const RestaurantsCard = ({
  id,
  restaurant_name,
  category_name,
  image_url,
  deleteRestaurant,
}) => {
  return (
    <Card className={RestaurantCardStyle.Card}>
      <Card.Body className={RestaurantCardStyle.Content}>
        <img
          className={RestaurantCardStyle.Image}
          src={image_url}
          alt={restaurant_name}
        />
        <Card.Text className={RestaurantCardStyle.Text}>
          <span className={RestaurantCardStyle.Restaurant}>
            {restaurant_name}
          </span>
          <span className={RestaurantCardStyle.Product}>{category_name}</span>
        </Card.Text>
        <DeleteForeverIcon
          className={RestaurantCardStyle.Delete}
          onClick={() => deleteRestaurant(id)}
        />
      </Card.Body>
    </Card>
  );
};

RestaurantsCard.propTypes = {
  id: PropTypes.number,
  restaurant_name: PropTypes.string,
  category_name: PropTypes.string,
  deleteRestaurant: PropTypes.func,
  image_url: PropTypes.string,
};

export default RestaurantsCard;

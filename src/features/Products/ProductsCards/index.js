import { Card } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProductsCardsStyle from "./ProductsCard.module.css";

import PropTypes from "prop-types";

const ProductsCards = ({
  deleteProducts,
  id,
  product_name,
  restaurant_name,
  product_price,
  image_url,
}) => {
  return (
    <Card className={ProductsCardsStyle.Card}>
      <Card.Img
        className={ProductsCardsStyle.Image}
        variant="top"
        src={image_url}
        alt={product_name}
      />
      <Card.Body>
        <Card.Title className={ProductsCardsStyle.Title}>
          {product_name}
        </Card.Title>
        <Card.Text className={ProductsCardsStyle.Text}>
          {restaurant_name}
        </Card.Text>
        <Card.Text className={ProductsCardsStyle.Price_Text}>
          <span className={ProductsCardsStyle.Price}>${product_price}</span>
          <DeleteForeverIcon
            className={ProductsCardsStyle.Delete}
            onClick={() => deleteProducts(id)}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

ProductsCards.propTypes = {
  deleteProducts: PropTypes.func,
  id: PropTypes.number,
  product_name: PropTypes.string,
  restaurant_name: PropTypes.string,
  product_price: PropTypes.string,
  image_url: PropTypes.string,
};

export default ProductsCards;

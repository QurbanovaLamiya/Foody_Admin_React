import { Card } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProductsCardsStyle from "./ProductsCard.module.css";

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
      />
      <Card.Body>
        <Card.Title className={ProductsCardsStyle.Title}>
          {product_name}
        </Card.Title>
        <Card.Text className={ProductsCardsStyle.Text}>
          {restaurant_name}
        </Card.Text>
        <Card.Text className={ProductsCardsStyle.Price_Text}>
          <span className={ProductsCardsStyle.Price}>{product_price}</span>
          <span
            className={ProductsCardsStyle.Delete}
            onClick={() => deleteProducts(id)}
          >
            <DeleteForeverIcon />
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductsCards;

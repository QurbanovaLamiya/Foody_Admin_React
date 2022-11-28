import { Card } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProductsCardsStyle from "./ProductsCard.module.css";

const ProductsCards = () => {
  return (
    <Card className={ProductsCardsStyle.Card}>
      <Card.Img
        className={ProductsCardsStyle.Image}
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMmXvQkSuPUPzXTc5ByuRQo4YSuFFE1sBMg&usqp=CAU"
      />
      <Card.Body>
        <Card.Title className={ProductsCardsStyle.Title}>Marqarita</Card.Title>
        <Card.Text className={ProductsCardsStyle.Text}>Papa John’s</Card.Text>
        <Card.Text className={ProductsCardsStyle.Price_Text}>
          <span className={ProductsCardsStyle.Price}>$16</span>
          <span className={ProductsCardsStyle.Delete}>
            <DeleteForeverIcon />
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductsCards;

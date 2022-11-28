// Material-UI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Components
import ProductsCards from "./ProductsCards";

// Style
import ProductsStyle from "./Products.module.css";

const ProductsContainer = () => {
  return (
    <div className={ProductsStyle.Container}>
      <div className={ProductsStyle.Caption}>
        <h1>Products</h1>
        <div className={ProductsStyle.Select_Section}>
          <select className={ProductsStyle.Select}>
            <option>Catagory type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <KeyboardArrowDownIcon className={ProductsStyle.Icon} />
        </div>
      </div>
      <div className={ProductsStyle.Content}>
        <ProductsCards />
        <ProductsCards />
        <ProductsCards />
        <ProductsCards />
        <ProductsCards />
        <ProductsCards />
        <ProductsCards />
        <ProductsCards />
        <ProductsCards />
        <ProductsCards />
      </div>
      <ul className={ProductsStyle.Pagination}>
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

export default ProductsContainer;

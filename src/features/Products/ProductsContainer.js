import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductsCards from "./ProductsCards";
import ProductsContainerStyle from "./ProductsContainer.module.css";

const ProductsContainer = () => {
  return (
    <div className={ProductsContainerStyle.Container}>
      <div className={ProductsContainerStyle.Caption}>
        <h1>Products</h1>
        <div className={ProductsContainerStyle.Select_Section}>
          <select className={ProductsContainerStyle.Select}>
            <option>Catagory type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <KeyboardArrowDownIcon className={ProductsContainerStyle.Icon} />
        </div>
      </div>
      <div className={ProductsContainerStyle.Content}>
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
      <div className={ProductsContainerStyle.Pagination}>Pagination</div>
    </div>
  );
};

export default ProductsContainer;

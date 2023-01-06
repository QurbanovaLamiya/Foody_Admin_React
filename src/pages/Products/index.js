import ProductsContainer from "../../features/Products/ProductsContainer";
import { CategoryProvider } from "../../provider/Category/CategoryProvider";

const Products = () => (
  <CategoryProvider>
    <ProductsContainer />;
  </CategoryProvider>
);

export default Products;

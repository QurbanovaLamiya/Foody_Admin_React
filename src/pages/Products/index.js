import ProductsContainer from "../../features/Products/ProductsContainer";
import { ProductProvider } from "../../provider/Product/ProductProvider";

const Products = () => (
  <ProductProvider>
    <ProductsContainer />
  </ProductProvider>
);

export default Products;

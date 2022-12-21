// Material-UI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Components
import ProductsCards from "./ProductsCards";

// Style
import ProductsStyle from "./Products.module.css";

//Api
import { productApi, productDeleteAPI } from "../../api/product";

// React
import { useEffect, useState } from "react";

// Image
import Loading from "../../image/loading/loading.gif";

const ProductsContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    productApi
      .then((res) => {
        setProduct(res.data.products.products);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const deleteProducts = () => {
    productDeleteAPI()
    .then((res) => {
      console.log("res", res);
      

      // let newArray = [...products].filter((actor) => actor.id !== id);

      // setActors(newArray);
    })
    .catch(() => {});
  };


  if (!product) {
    return (
      <img src={Loading} className={ProductsStyle.Loading} alt="loading...." />
    );
  }

  return (
    <div className={ProductsStyle.Container}>
      <div className={ProductsStyle.Caption}>
        <h1>Products</h1>
        <button onClick={()=>deleteProducts()}>delete</button>
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
        {product?.map((product) => (
          <ProductsCards key={`products-id-${product.id}`} {...product}/>
        ))}
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

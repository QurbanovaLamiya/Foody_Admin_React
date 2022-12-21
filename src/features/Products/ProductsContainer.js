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

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

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

  const deleteProducts = (id) => {
    Swal.fire({
      title: "Are you sure it’s deleted ?",
      text: "Attention! If you delete this product, it will not come back...",
      showCancelButton: true,
      cancelButtonColor: "",
      cancelButtonText: "cancel",
      confirmButtonColor: "#D63626",
      confirmButtonText: "delete",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        productDeleteAPI(id)
          .then((res) => {
            let newArray = [...product].filter((product) => product.id !== id);
            setProduct(newArray);
          })
          .catch(() => {});
        toast.success("Product deleted successfully!", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
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
          <ProductsCards
            key={`products-id-${product.id}`}
            {...product}
            deleteProducts={deleteProducts}
          />
        ))}
      </div>
      <ul className={ProductsStyle.Pagination}>
        <li>
          <KeyboardArrowLeftIcon />
        </li>
        <li>1</li>
        {/* <li>2</li> */}
        {/* <li>3</li> */}
        <li>
          <KeyboardArrowRightIcon />
        </li>
      </ul>
      <ToastContainer />
    </div>
  );
};

export default ProductsContainer;

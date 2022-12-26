// Material-UI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Components
import ProductsCards from "./ProductsCards";
import Loading from "../../shared/components/Loading";

// Style
import ProductsStyle from "./Products.module.css";

//Api
import { productAPI, productDeleteAPI } from "../../api/product";

// React
import { useEffect, useState } from "react";

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

import { useTranslation } from "react-i18next";

const ProductsContainer = () => {
  const { t } = useTranslation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    productAPI
      .then((res) => {
        setProduct(res.data.products.products);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const deleteProducts = (id) => {
    Swal.fire({
      title: t("alert title"),
      text: t("alert product subTitle"),
      showCancelButton: true,
      cancelButtonColor: "",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        productDeleteAPI(id)
          .then((res) => {
            let newArray = [...product].filter((product) => product.id !== id);
            setProduct(newArray);
          })
          .catch(() => {});
        toast.success(t("success product"), {
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
    return <Loading />;
  }

  return (
    <div className={ProductsStyle.Container}>
      <div className={ProductsStyle.Caption}>
        <h1>{t("menu.Products")}</h1>
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

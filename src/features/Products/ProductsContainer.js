// Components
import ProductsCards from "./ProductsCards";
import Loading from "../../shared/components/Loading";

// Style
import ProductsStyle from "./Products.module.css";

//Api
import { productAPI, productDeleteAPI } from "../../api/product";
import { categoryAPI } from "../../api/category";

// React
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useProductProvider } from "../../provider/Product/ProductProvider";
import { useCategoryProvider } from "../../provider/Category/CategoryProvider";
import { CATEGORY_DATA, PRODUCT_DATA } from "../../provider/types";

const ProductsContainer = () => {
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const { state, dispatch } = useCategoryProvider();
  const { category } = state;

  const { proState, proDispatch } = useProductProvider();
  const { product } = proState;

  console.log(product);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  useEffect(() => {
    !product.length && getProducts();
  }, [product]);

  useEffect(() => {
    !category.length && getCategory();
  }, [category]);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        dispatch({
          type: CATEGORY_DATA,
          payload: [
            ...new Set(
              res.data.category.categories.map((item) => item.category_slug)
            ),
          ],
        });
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const getProducts = () => {
    productAPI
      .then((res) => {
        proDispatch({
          type: PRODUCT_DATA,
          payload: res.data.products.products,
        });
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
            proDispatch({ type: PRODUCT_DATA, payload: newArray });
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

  if (!product.length) {
    return <Loading />;
  }

  return (
    <div className={ProductsStyle.Container}>
      <div className={ProductsStyle.Caption}>
        <h1>{t("menu.Products")}</h1>0
        <div className={ProductsStyle.Select_Section}>
          <select
            className={ProductsStyle.Select}
            onChange={handleCategoryChange}
          >
            <option value="All">Category type</option>
            {category?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <KeyboardArrowDownIcon className={ProductsStyle.Icon} />
        </div>
      </div>
      <div className={ProductsStyle.Content}>
        {product
          .filter(
            selectedCategory !== "All"
              ? (item) => item.category_name === selectedCategory
              : (item) => item
          )
          ?.map((product) => (
            <ProductsCards
              key={`products-id-${product.id}`}
              {...product}
              deleteProducts={deleteProducts}
            />
          ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductsContainer;

// Components
import RestaurantsCard from "./RestaurantsCard";
import Loading from "../../shared/components/Loading";
import Modal from "../../shared/containers/Modal";
import RestaurantForm from "../../shared/containers/Form/RestaurantForm";

// Style
import RestaurantsStyle from "./Restaurants.module.css";

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { restaurantDeleteAPI, restaurantsAPI } from "../../api/restaurant";
import { categoryAPI } from "../../api/category";

import { useRestaurantProvider } from "../../provider/Restaurant/RestaurantProvider";
import { useCategoryProvider } from "../../provider/Category/CategoryProvider";

import { CATEGORY_DATA, RESTAURANT_DATA } from "../../provider/types";

const RestaurantsContainer = () => {
  const { t } = useTranslation();

  const { resState, resDispatch } = useRestaurantProvider();
  const { restaurant } = resState;

  const { state, dispatch } = useCategoryProvider();
  const { category } = state;

  console.log(category);

  const [isDrawer, setIsDrawer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  useEffect(() => {
    !restaurant.length && getRestaurant();
  }, [restaurant]);

  useEffect(() => {
    !category.length && getCategory();
  }, [category]);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        console.log("salma", [
          ...new Set(
            res.data.category.categories.map((item) => item.category_slug)
          ),
        ]);
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

  const getRestaurant = () => {
    restaurantsAPI
      .then((res) => {
        resDispatch({
          type: RESTAURANT_DATA,
          payload: res.data.restaurant.restaurants,
        });
      })
      .catch((err) => {
        // console.log("err", err);
      });
  };

  const deleteRestaurant = (id) => {
    Swal.fire({
      title: t("alert title"),
      text: t("alert restaurant subTitle"),
      showCancelButton: true,
      cancelButtonColor: "",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        restaurantDeleteAPI(id)
          .then((res) => {
            let newArray = [...restaurant].filter(
              (restaurant) => restaurant.id !== id
            );
            resDispatch({ type: RESTAURANT_DATA, payload: newArray });
          })
          .catch(() => {});
        toast.success(t("success restaurant"), {
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

  if (!restaurant.length) {
    return <Loading />;
  }

  return (
    <div className={RestaurantsStyle.Container}>
      <div className={RestaurantsStyle.Caption}>
        <h1>{t("menu.Restaurants")}</h1>
        <div className={RestaurantsStyle.Button_Section}>
          <div className={RestaurantsStyle.Select_Section}>
            <select
              className={RestaurantsStyle.Select}
              onChange={handleCategoryChange}
            >
              <option value="All">Category type</option>
              {category?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <KeyboardArrowDownIcon className={RestaurantsStyle.Icon} />
          </div>
          <Modal
            button="ADD RESTAURANTS"
            title="Add Restuarant"
            drawer={isDrawer}
            setDrawer={setIsDrawer}
          >
            <RestaurantForm setDrawer={setIsDrawer} />
          </Modal>
        </div>
      </div>
      <div className={RestaurantsStyle.Content}>
        {restaurant
          .filter(
            selectedCategory !== "All"
              ? (item) => item.category_name === selectedCategory
              : (item) => item
          )
          ?.map((restaurant) => (
            <RestaurantsCard
              key={restaurant.id}
              {...restaurant}
              deleteRestaurant={deleteRestaurant}
            />
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default RestaurantsContainer;

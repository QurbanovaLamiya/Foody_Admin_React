// Material-UI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Components
import RestaurantsCard from "./RestaurantsCard";
import Loading from "../../shared/components/Loading";
import Modal from "../../shared/containers/Modal";
// import FormData from "../../util/Form";

// Style
import RestaurantsStyle from "./Restaurants.module.css";

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

import { restaurantDeleteAPI, restaurantsAPI } from "../../api/restaurant";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RestaurantForm from "../../shared/containers/Form/RestaurantForm";

const RestaurantsContainer = () => {
  const { t } = useTranslation();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = () => {
    restaurantsAPI
      .then((res) => {
        setRestaurant(res.data.restaurant.restaurants);
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
            setRestaurant(newArray);
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

  if (!restaurant) {
    return <Loading />;
  }

  return (
    <div className={RestaurantsStyle.Container}>
      <div className={RestaurantsStyle.Caption}>
        <h1>{t("menu.Restaurants")}</h1>
        <div className={RestaurantsStyle.Button_Section}>
          <div className={RestaurantsStyle.Select_Section}>
            <select className={RestaurantsStyle.Select}>
              <option>Catagory type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <KeyboardArrowDownIcon className={RestaurantsStyle.Icon} />
          </div>
          {/* <Modal form={FormData.RESTAURANT} /> */}
          <Modal button="ADD RESTAURANTS" title="Add Restuarant">
            <RestaurantForm />
          </Modal>
        </div>
      </div>
      <div className={RestaurantsStyle.Content}>
        {restaurant?.map((restaurant) => (
          <RestaurantsCard
            key={restaurant.id}
            {...restaurant}
            deleteRestaurant={deleteRestaurant}
          />
        ))}
      </div>
      {/* <ul className={RestaurantsStyle.Pagination}>
        <li>
          <KeyboardArrowLeftIcon />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>
          <KeyboardArrowRightIcon />
        </li>
      </ul> */}
      <ToastContainer />
    </div>
  );
};

export default RestaurantsContainer;

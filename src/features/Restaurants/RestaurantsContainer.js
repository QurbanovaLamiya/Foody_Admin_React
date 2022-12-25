// Material-UI
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";

// Image
import Loading from "../../image/loading/loading.gif";

// Components
import RestaurantsCard from "./RestaurantsCard";

// Style
import RestaurantsStyle from "./Restaurants.module.css";

// Sweet Alert
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

import { restaurantDeleteAPI, restaurantsAPI } from "../../api/restaurant";
import { useEffect, useState } from "react";

const RestaurantsContainer = () => {

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
        restaurantDeleteAPI(id)
          .then((res) => {
            let newArray = [...restaurant].filter(
              (restaurant) => restaurant.id !== id
            );
            setRestaurant(newArray);
          })
          .catch(() => {});
        toast.success("Restaurant deleted successfully!", {
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
    return (
      <img
        src={Loading}
        className={RestaurantsStyle.Loading}
        alt="loading...."
      />
    );
  }

  return (
    <div className={RestaurantsStyle.Container}>
      <div className={RestaurantsStyle.Caption}>
        <h1>Restaurants</h1>
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
          <button className={RestaurantsStyle.Add_Button}>
            <AddIcon />
            ADD RESTAURANTS
          </button>
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
      <ul className={RestaurantsStyle.Pagination}>
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
      <ToastContainer />
    </div>
  );
};

export default RestaurantsContainer;

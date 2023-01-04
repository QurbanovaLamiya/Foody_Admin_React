import { useContext, useReducer, createContext } from "react";
import { RESTAURANT_DATA } from "../types";

const restaurantContext = createContext({});

const initialState = {
  restaurant: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case RESTAURANT_DATA:
      return { ...state, restaurant: action.payload };

    default:
      return state;
  }
};

export const RestaurantProvider = ({ children }) => {
  const [resState, resDispatch] = useReducer(reducer, initialState);

  return (
    <restaurantContext.Provider value={{ resState, resDispatch }}>
      {children}
    </restaurantContext.Provider>
  );
};

export const useRestaurantProvider = () => {
  const data = useContext(restaurantContext);
  return data;
};

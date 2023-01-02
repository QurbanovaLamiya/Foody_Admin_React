import { useContext, useReducer, createContext } from "react";
import { ORDER_DATA } from "../types";

const orderContext = createContext({});

const initialState = {
  orders: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ORDER_DATA:
      return { ...state, orders: action.payload };

    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <orderContext.Provider value={{ state, dispatch }}>
      {children}
    </orderContext.Provider>
  );
};

export const useOrderProvider = () => {
  const data = useContext(orderContext);
  return data;
};

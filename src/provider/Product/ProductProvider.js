import { useContext, useReducer, createContext } from "react";
import { PRODUCT_DATA } from "../types";

const productContext = createContext({});

const initialState = {
  product: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_DATA:
      return { ...state, product: action.payload };

    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductProvider = () => {
  const data = useContext(productContext);
  return data;
};

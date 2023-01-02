import { useContext, useReducer, createContext } from "react";
import { CATEGORY_DATA } from "../types";

const categoryContext = createContext({});

const initialState = {
  category: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case CATEGORY_DATA:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <categoryContext.Provider value={{ state, dispatch }}>
      {children}
    </categoryContext.Provider>
  );
};

export const useCategoryProvider = () => {
  const data = useContext(categoryContext);
  return data;
};

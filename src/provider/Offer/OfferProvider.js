import { useContext, useReducer, createContext } from "react";
import { OFFER_DATA } from "../types";

const offerContext = createContext({});

const initialState = {
  offer: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case OFFER_DATA:
      return { ...state, offer: action.payload };

    default:
      return state;
  }
};

export const OfferProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <offerContext.Provider value={{ state, dispatch }}>
      {children}
    </offerContext.Provider>
  );
};

export const useOfferProvider = () => {
  const data = useContext(offerContext);
  return data;
};

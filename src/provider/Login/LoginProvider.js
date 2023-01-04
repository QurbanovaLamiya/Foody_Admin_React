import { useContext, useReducer, createContext } from "react";
import { LOGIN } from "../types";

const loginContext = createContext({});

const initialState = {
  user: {
    user_name: "admin",
    password: "1225",
  },
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    // case "LOGIN":
    case LOGIN:
      return { ...state, isLogin: action.payload };

    default:
      return state;
  }
};

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <loginContext.Provider value={{ state, dispatch }}>
      {children}
    </loginContext.Provider>
  );
};

export const useLoginProvider = () => {
  const data = useContext(loginContext);
  return data;
};

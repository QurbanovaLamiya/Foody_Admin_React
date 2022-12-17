import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    user_name: "admin",
    password: "1225",
  },
  isLogin: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;

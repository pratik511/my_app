import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../Component/Home/HomeSlice";
import LoginSlice from "../Component/Login/LoginSlice";

export const Store = configureStore({
  reducer: {
    home: HomeSlice,
    login:LoginSlice
  },
});

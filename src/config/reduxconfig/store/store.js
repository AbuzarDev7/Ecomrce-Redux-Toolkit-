import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
});
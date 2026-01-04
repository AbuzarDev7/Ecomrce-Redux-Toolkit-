import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload.item;

      const existingItem = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.qty += 1;   
      } else {
        state.cart.push({
          ...product,
          qty: 1             
        });
      }
    }
  }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;

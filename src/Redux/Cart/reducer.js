import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0, //total number
    cartTotalAmount: 0, //total price
    status: null,
  },
  reducers: {
    addToCartSuccess: (state, action) => {
      state.cartItems.push(action.payload)
    //   const itemIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemIndex >= 0) {
    //     state.cartItems[itemIndex].cartQuantity += 1;
    //   } else {
    //     const tempProduct = { ...action.payload, cartQuantity: 1 };
    //     state.cartItems.push(tempProduct);
    //   }

      state.status = "success";
    },
    addToCartFailed: (state) => {
      state.status = "rejected";
    },
  },
});
export const { addToCartSuccess, addToCartFailed } = cartSlice.actions;
export default cartSlice.reducer;

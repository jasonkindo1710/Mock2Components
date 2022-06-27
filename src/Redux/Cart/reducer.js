import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0, //total number
    cartTotalAmount: 0, //total price
    status: null,
    newCart: [],
  },
  reducers: {
    createNewCartSuccess: (state, action) => {
      state.status = "success";
      state.cartItems.push(action.payload);
    },
    createNewCartFailed: (state) => {
      state.status = "rejected";
    },
    addToCartSuccess: (state, action) => {
      state.cartItems.push(action.payload);
      console.log(current(state.newCart));
      // state.cartItems = [...state.newCart, state.cartItems.push(action.payload) ]
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
    getCartByIDSuccess: (state, action) => {
      state.newCart = action.payload;
      state.status = "success";
    },
    getCartByIDFailed: (state) => {
      state.status = "rejected";
    },
    deleteItemSuccess: (state, action) => {
      const nextCartItems = state.newCart.data.items.filter(
        (newCartItem) => newCartItem.id !== action.payload.id
      );
      state.newCart = nextCartItems;
      console.log(current(state.newCart));
      state.status = "success";
    },
    deleteItemFailed: (state, action) => {
      state.status = "rejected";
    },
    decreaseCart: (state, action) => {

      const itemIndex = state.newCart.data.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.newCart.data.items[itemIndex].quantity > 1) {
        state.newCart.data.items[itemIndex].quantity -= 1;
      } 
    },
    increaseCart: (state, action) => {
      const itemIndex = state.newCart.data.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.newCart.data.items[itemIndex].quantity >= 1) {
        state.newCart.data.items[itemIndex].quantity += 1;
      }
    },
   
    deleteCartSuccess: (state, action) => {
      state.newCart = [];
      state.status = "success";
    },
    deleteCartFailed: (state) => {
      state.status = "rejected";
    },
  },
});
export const {
  addToCartSuccess,
  addToCartFailed,
  deleteCartSuccess,
  deleteCartFailed,
  createNewCartSuccess,
  createNewCartFailed,
  getCartByIDFailed,
  getCartByIDSuccess,
  deleteItemFailed,
  deleteItemSuccess,
  decreaseCart,
  increaseCart,

} = cartSlice.actions;
export default cartSlice.reducer;

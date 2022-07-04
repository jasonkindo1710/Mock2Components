import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    status: null,
    product: [],
    reviews: [],
    allCategories: [],
    isFetching: false
  },
  reducers: {
    getProductsStart: (state) => {
      state.status = "pending";
    },
    getProductsSuccess: (state, action) => {
      state.allProducts = action.payload;
      state.status = "success";
    },
    getProductsFailed: (state) => {
      state.status = "rejected";
    },
    getSingleProductSuccess: (state, action) => {
      state.product = action.payload;
      state.status = "success";
    },
    getSingleProductFailed: (state) => {
      state.status = "rejected";
    },
    createReview: (state, action) => {
      state.status = "success";
      state.reviews = action.payload
    },
    getCategoriesSuccess: (state, action) => {
      state.isFetching = false;
      state.allCategories = action.payload
  },
  searchProductSuccess: (state,action) => {
    state.allProducts = action.payload;
    state.status = "success"
  }
  },
});
export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailed,
  getSingleProductSuccess,
  getSingleProductFailed,
  createReview,
  getCategoriesSuccess,
  searchProductSuccess
} = productSlice.actions;
export default productSlice.reducer;

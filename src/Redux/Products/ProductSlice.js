import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        allProducts: [],
        status: null
    },
    reducers: {
        getProductsStart: (state) => {
            state.status = 'pending'
        },
        getProductsSuccess: (state, action) => {
            state.allProducts = action.payload;
            state.status = 'success'
        },
        getProductsFailed: (state) => {
            state.status = 'rejected'
        }

    }
})
export const {getProductsStart, getProductsSuccess, getProductsFailed} = productSlice.actions
export default productSlice.reducer
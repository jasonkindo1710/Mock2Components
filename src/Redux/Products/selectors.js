import { createSelector } from "@reduxjs/toolkit";

//trỏ đến state của reducer product
const selectProduct = (state) => state.product;

//trỏ đến item allProducts của ProductSlice
export const selectAllProducts = createSelector(
    [selectProduct], (productSlice) => productSlice?.allProducts.data.result
)
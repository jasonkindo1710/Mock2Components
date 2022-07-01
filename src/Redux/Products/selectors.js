import { createSelector } from "@reduxjs/toolkit";

//trỏ đến state của reducer product
const selectProduct = (state) => state.product;

//trỏ đến item allProducts của ProductSlice
export const selectAllProducts = createSelector(
    [selectProduct], (productSlice) => productSlice?.allProducts?.data?.result
)

//product 
export const selectSingleProduct = createSelector(
    [selectProduct], (productSlice) => productSlice?.product?.data?.product
)
export const selectSingleProductReview = createSelector(
    [selectProduct], (productSlice) => productSlice?.product?.data?.reviews?.result
)

export const selectImage = createSelector(
    [selectProduct], (productSlice) => productSlice?.product?.data?.product.images[0]
)

export const selectRating = createSelector(
    [selectProduct], (productSlice) => productSlice?.product?.data?.product.rating
)
export const selectReviews = createSelector(
    [selectProduct], (productSlice) => productSlice?.product?.data?.reviews.total
)

export const selectAllCategories = (state) => state.product?.allCategories?.data

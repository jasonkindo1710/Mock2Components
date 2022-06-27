import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state) => state.cart;


export const selectAllCart = createSelector(
    [selectCart], (cartSlice) => cartSlice?.cartItems
)

export const selectNewCart = createSelector(
    [selectCart], (cartSlice) => cartSlice?.newCart
)


import { createSelector } from "@reduxjs/toolkit";

const selectCategory = (state) => state.category;

export const selectAllCategories = createSelector(
    [selectCategory], (CategorySlice) => CategorySlice?.allCategories?.data
)
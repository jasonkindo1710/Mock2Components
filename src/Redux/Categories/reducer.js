import { createSlice } from "@reduxjs/toolkit";


const CategorySlice = createSlice({
    name: "category",
    initialState: {
            allCategories: [],
            isFetching: false
        
    },
    reducers: {
        getCategoriesSuccess: (state, action) => {
            state.isFetching = false;
            state.allCategories = action.payload
        }
    }
})

export const { getCategoriesSuccess } = CategorySlice.actions;

export default CategorySlice.reducer;
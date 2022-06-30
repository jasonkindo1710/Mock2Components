import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user", 
    initialState: {
        user: [],
    },
    reducers: {
        getUserByIdSuccess: (state, action) => {
            state.user = action.payload;
        }
    }
})
export const {getUserByIdSuccess} = userSlice.actions;
export default userSlice.reducer;
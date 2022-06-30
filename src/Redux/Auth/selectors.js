import { createSelector } from "@reduxjs/toolkit";

//state cua reducer auth
export const selectAuth = (state) => state.auth;

//access token
export const selectAccessToken = createSelector(
    [selectAuth], (authSlice) => authSlice?.auth?.data?.tokens.access.token
)
export const selectUserID = createSelector(
    [selectAuth], (authSlice) => authSlice?.auth?.data?.user.id
)
export const selectUserRole = createSelector(
    [selectAuth], (authSlice) => authSlice?.auth?.data?.user.role
)
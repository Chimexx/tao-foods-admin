import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		//Login
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			localStorage.setItem("taoToken", JSON.stringify(action.payload.accessToken));
			state.currentUser = action.payload;
			state.isFetching = false;
			state.error = false;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//Logout
		logout: (state) => {
			state.currentUser = null;
			localStorage.setItem("taoToken", null);
		},
	},
});
export const getUser = (state) => state.auth;

export default authSlice.reducer;
export const { logout, loginStart, loginSuccess, loginFailure } = authSlice.actions;

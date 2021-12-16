import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
	name: "orders",
	initialState: {
		orders: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		orderFetchStart: (state) => {
			state.isFetching = true;
		},
		orderFetchSuccess: (state, action) => {
			state.isFetching = false;
			state.orders = action.payload;
		},
		orderFetchFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const { orderFetchStart, orderFetchSuccess, orderFetchFailure } = orderSlice.actions;
export default orderSlice.reducer;

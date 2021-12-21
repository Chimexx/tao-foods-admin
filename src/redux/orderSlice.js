import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
	name: "orders",
	initialState: {
		orders: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//Get Orders
		ordersFetchStart: (state) => {
			state.isFetching = true;
		},
		ordersFetchSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.orders = action.payload;
		},
		ordersFetchFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//Update Order
		updateOrderStart: (state) => {
			state.isFetching = true;
		},
		updateOrderSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.orders[state.orders.findIndex((item) => item._id) === action.payload.id] =
				action.payload.res;
		},
		updateOrderFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//Update Order
		deleteOrderStart: (state) => {
			state.isFetching = true;
		},
		deleteOrderSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.orders.splice([state.orders.findIndex((item) => item._id) === action.payload.id], 1);
		},
		deleteOrderFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	ordersFetchStart,
	ordersFetchSuccess,
	ordersFetchFailure,
	updateOrderStart,
	updateOrderSuccess,
	updateOrderFailure,
	deleteOrderStart,
	deleteOrderSuccess,
	deleteOrderFailure,
} = orderSlice.actions;
export default orderSlice.reducer;

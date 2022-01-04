import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
	name: "orders",
	initialState: {
		orderList: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//Fetch Orders
		fetchOrderStart: (state) => {
			state.isFetching = true;
		},
		fetchOrderSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.orderList = action.payload;
		},
		fetchOrderFailure: (state) => {
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
			state.orderList[state.orderList.findIndex((item) => item._id === action.payload.id)] =
				action.payload.data;
		},
		updateOrderFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//Delete Order
		deleteOrderStart: (state) => {
			state.isFetching = true;
		},
		deleteOrderSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.orderList.splice([state.orderList.findIndex((item) => item._id) === action.payload.id], 1);
		},
		deleteOrderFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export default orderSlice.reducer;
export const getOrders = (state) => state.orders;
export const {
	fetchOrderStart,
	fetchOrderSuccess,
	fetchOrderFailure,
	updateOrderStart,
	updateOrderSuccess,
	updateOrderFailure,
	deleteOrderStart,
	deleteOrderSuccess,
	deleteOrderFailure,
} = orderSlice.actions;

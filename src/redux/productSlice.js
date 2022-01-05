import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "products",
	initialState: {
		productsList: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//Fetch Products
		fetchProductStart: (state) => {
			state.isFetching = true;
		},
		fetchProductSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.productsList = action.payload;
		},
		fetchProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//Update Product
		updateProductStart: (state) => {
			state.isFetching = true;
		},
		updateProductSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.productsList[state.productsList.findIndex((item) => item._id === action.payload.id)] =
				action.payload.data;
		},
		updateProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		//Create Product
		createProductStart: (state) => {
			state.isFetching = true;
		},
		createProductSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.productsList.push(action.payload);
		},
		createProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Delete Product
		deleteProductStart: (state) => {
			state.isFetching = true;
		},
		deleteProductSuccess: (state, action) => {
			state.isFetching = false;
			state.productsList.splice(
				state.productsList.findIndex((item) => item._id === action.payload.id),
				1
			);
		},
		deleteProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const getProducts = (state) => state.products;
export const {
	fetchProductStart,
	fetchProductSuccess,
	fetchProductFailure,
	createProductStart,
	createProductSuccess,
	createProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
	updateProductStart,
	updateProductSuccess,
	updateProductFailure,
} = productSlice.actions;
export default productSlice.reducer;

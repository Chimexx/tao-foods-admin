import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//Get Products
		productsFetchStart: (state) => {
			state.isFetching = true;
		},
		productsFetchSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.products = action.payload;
		},
		productsFetchFailure: (state) => {
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
			state.products[state.products.findIndex((item) => item._id === action.payload.id)] =
				action.payload.res;
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
			state.products.push(action.payload);
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
			state.products.splice(
				state.products.findIndex((item) => item._id === action.payload.id),
				1
			);
		},
		deleteProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	productsFetchStart,
	productsFetchSuccess,
	productsFetchFailure,
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

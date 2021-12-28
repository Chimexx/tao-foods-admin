import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const productSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
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
			state.products = action.payload;
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
			state.products[state.products.findIndex((item) => item._id === action.payload.id)] =
				action.payload.data;
			toast.success(`${action.payload.data.title} was updated!`, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 3000,
			});
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
			state.products.push(action.payload);
			toast.success(`${action.payload.title} was added!`, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 3000,
			});
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
			toast.warn("Item deleted!", {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 3000,
			});
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

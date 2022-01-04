import {
	fetchProductStart,
	fetchProductSuccess,
	fetchProductFailure,
	createProductStart,
	createProductSuccess,
	createProductFailure,
	updateProductStart,
	updateProductSuccess,
	updateProductFailure,
	deleteProductStart,
	deleteProductSuccess,
	deleteProductFailure,
} from "./productSlice";
import {
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
	createUserStart,
	createUserSuccess,
	createUserFailure,
	fetchUsersStart,
	fetchUsersSuccess,
	fetchUsersFailure,
	deleteUserStart,
	deleteUserSuccess,
	deleteUserFailure,
} from "./userSlice";
import { authRequest, publicRequest } from "./requestMethods";
import { loginFailure, loginStart, loginSuccess, logout } from "./authSlice";
import {
	fetchOrderStart,
	fetchOrderFailure,
	fetchOrderSuccess,
	deleteOrderFailure,
	deleteOrderStart,
	deleteOrderSuccess,
	updateOrderFailure,
	updateOrderStart,
	updateOrderSuccess,
} from "./orderSlice";
import { setSnackbar } from "./snackbarSlice";

//Login request
export const login = async (dispatch, data) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("auth/login", data);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
		console.log(error);
	}
};

//Logout request
export const userLogout = async (dispatch) => {
	try {
		dispatch(logout());
	} catch (error) {
		console.log(error);
	}
};
//Fetch Users
export const fetchUsers = async (dispatch) => {
	dispatch(fetchUsersStart());
	try {
		const res = await authRequest.get("users");
		await dispatch(fetchUsersSuccess(res.data));
	} catch (error) {
		dispatch(fetchUsersFailure());
		console.log(error);
	}
};

//Create User
export const createUser = async (dispatch, data) => {
	dispatch(createUserStart());
	try {
		const res = await authRequest.post("auth/register", data);
		await dispatch(createUserSuccess(res.data));
	} catch (error) {
		dispatch(createUserFailure());
		console.log(error);
	}
};

//Update User
export const updateUser = async (id, data, dispatch) => {
	dispatch(updateUserStart());
	try {
		const res = await authRequest.put(`users/${id}`, data);
		console.log(data);
		await dispatch(updateUserSuccess({ id, data: res.data }));
	} catch (error) {
		dispatch(updateUserFailure());
		console.log(error);
	}
};

//Delete User
export const deleteUser = async (dispatch, id) => {
	dispatch(deleteUserStart());
	try {
		await authRequest.delete(`users/${id}`);
		await dispatch(deleteUserSuccess(id));
	} catch (error) {
		dispatch(deleteUserFailure());

		console.log(error);
	}
};

//Fetch Orders
export const fetchOrders = async (dispatch) => {
	dispatch(fetchOrderStart());
	try {
		const res = await authRequest.get("orders");
		await dispatch(fetchOrderSuccess(res.data));
	} catch (error) {
		dispatch(fetchOrderFailure());
		console.log(error);
	}
};

//Update Orders
export const updateOrder = async (id, data, dispatch) => {
	dispatch(updateOrderStart());

	try {
		const res = await authRequest.put(`orders/${id}`, data);
		await dispatch(updateOrderSuccess({ id, data: res.data }));
		dispatch(
			setSnackbar({
				snackbarOpen: true,
				snackbarType: "success",
				snackbarMessage: `${res.data.title} has been updated!`,
			})
		);
	} catch (error) {
		dispatch(updateOrderFailure());
		dispatch(
			setSnackbar({
				snackbarOpen: true,
				snackbarType: "error",
				snackbarMessage: "Update failed",
			})
		);
		console.log(error);
	}
};

//Delete Orders
export const deleteOrder = async (id, dispatch) => {
	dispatch(deleteOrderStart());
	try {
		await authRequest.delete(`orders/${id}`);
		await dispatch(deleteOrderSuccess({ id }));
	} catch (error) {
		dispatch(deleteOrderFailure());
		console.log(error);
	}
};

//Fetch Products
export const fetchProducts = async (dispatch) => {
	dispatch(fetchProductStart());
	try {
		const res = await authRequest.get("dishes");
		await dispatch(fetchProductSuccess(res.data));
	} catch (error) {
		dispatch(fetchProductFailure());
		console.log(error);
	}
};

//Create Products
export const createProduct = async (data, dispatch) => {
	dispatch(createProductStart());
	try {
		const res = await authRequest.post("dishes/new", data);
		await dispatch(createProductSuccess(res.data));
	} catch (error) {
		dispatch(createProductFailure());
		console.log(error);
	}
};

//Update Products
export const updateProduct = async (id, data, dispatch) => {
	dispatch(updateProductStart());
	try {
		const res = await authRequest.put(`dishes/${id}`, data);
		await dispatch(updateProductSuccess({ id, data: res.data }));
	} catch (error) {
		dispatch(updateProductFailure());
		console.log(error);
	}
};

//Delete Products
export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart());
	try {
		await authRequest.delete(`dishes/${id}`);

		await dispatch(deleteProductSuccess({ id }));
	} catch (error) {
		dispatch(deleteProductFailure());
		console.log(error);
	}
};

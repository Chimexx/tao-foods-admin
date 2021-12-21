import { loginStart, loginSuccess, loginFailure, userLogout } from "./userSlice";
import {
	ordersFetchStart,
	ordersFetchSuccess,
	ordersFetchFailure,
	updateOrderStart,
	updateOrderFailure,
	updateOrderSuccess,
	deleteOrderStart,
	deleteOrderSuccess,
	deleteOrderFailure,
} from "./orderSlice";
import {
	productsFetchStart,
	productsFetchSuccess,
	productsFetchFailure,
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

const TOKEN = localStorage.getItem("persist:root")
	? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accessToken
	: "";

export const login = async (dispatch, data) => {
	dispatch(loginStart());
	try {
		const endpoint = "https://tao-foods.herokuapp.com/api/auth/login";

		const res = await (
			await fetch(endpoint, {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-type": "application/json" },
			})
		)?.json();
		dispatch(loginSuccess(res));
		console.log(res);
	} catch (error) {
		dispatch(loginFailure());
		console.log(error);
	}
};

export const logout = async (dispatch) => {
	dispatch(userLogout());
};

export const ordersFetch = async (dispatch) => {
	dispatch(ordersFetchStart());
	try {
		const endpoint = "https://tao-foods.herokuapp.com/api/orders";

		const res = await (
			await fetch(endpoint, {
				method: "GET",
				headers: { "Content-type": "application/json", TOKEN: `Bearer ${TOKEN}` },
			})
		)?.json();
		dispatch(ordersFetchSuccess(res));
	} catch (error) {
		console.log(error);
		dispatch(ordersFetchFailure());
	}
};

export const updateOrder = async (id, data, dispatch) => {
	dispatch(updateOrderStart());

	try {
		const endpoint = `https://tao-foods.herokuapp.com/api/orders/${id}`;

		const res = await (
			await fetch(endpoint, {
				method: "PUT",
				body: JSON.stringify(data),
				headers: { "Content-type": "application/json", TOKEN: `Bearer ${TOKEN}` },
			})
		)?.json();
		dispatch(updateOrderSuccess({ id, res }));
	} catch (error) {
		dispatch(updateOrderFailure());
		console.log(error);
	}
};
export const deleteOrder = async (id, dispatch) => {
	dispatch(deleteOrderStart());

	try {
		const endpoint = `https://tao-foods.herokuapp.com/api/orders/${id}`;

		await fetch(endpoint, {
			method: "DELETE",
			headers: { "Content-type": "application/json", TOKEN: `Bearer ${TOKEN}` },
		});
		dispatch(deleteOrderSuccess({ id }));
	} catch (error) {
		dispatch(deleteOrderFailure());
		console.log(error);
	}
};

export const productsFetch = async (dispatch) => {
	dispatch(productsFetchStart());
	try {
		const endpoint = "https://tao-foods.herokuapp.com/api/dishes";

		const res = await (await fetch(endpoint))?.json();
		dispatch(productsFetchSuccess(res));
	} catch (error) {
		console.log(error);
		dispatch(productsFetchFailure());
	}
};

export const createProduct = async (dispatch, data) => {
	dispatch(createProductStart());
	try {
		const endpoint = "https://tao-foods.herokuapp.com/api/dishes/new";

		const res = await (
			await fetch(endpoint, {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-type": "application/json", TOKEN: `Bearer ${TOKEN}` },
			})
		)?.json();
		dispatch(createProductSuccess(res));
	} catch (error) {
		dispatch(createProductFailure());
		console.log(error);
	}
};
export const updateProduct = async (id, data, dispatch) => {
	dispatch(updateProductStart());

	try {
		const endpoint = `https://tao-foods.herokuapp.com/api/dishes/update/${id}`;

		const res = await (
			await fetch(endpoint, {
				method: "PUT",
				body: JSON.stringify(data),
				headers: { "Content-type": "application/json", TOKEN: `Bearer ${TOKEN}` },
			})
		)?.json();
		dispatch(updateProductSuccess({ id, res }));
	} catch (error) {
		dispatch(updateProductFailure());
		console.log(error);
	}
};
export const deleteProduct = async (id, dispatch) => {
	dispatch(deleteProductStart());

	try {
		const endpoint = `https://tao-foods.herokuapp.com/api/dishes/${id}`;

		await fetch(endpoint, {
			method: "DELETE",
			headers: { "Content-type": "application/json", TOKEN: `Bearer ${TOKEN}` },
		});
		dispatch(deleteProductSuccess({ id }));
	} catch (error) {
		dispatch(deleteProductFailure());
		console.log(error);
	}
};

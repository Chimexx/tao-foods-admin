import { loginStart, loginSuccess, loginFailure, userLogout } from "./userSlice";
import { orderFetchStart, orderFetchSuccess, orderFetchFailure } from "./orderSlice";
import { productFetchStart, productFetchSuccess, productFetchFailure } from "./productSlice";

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
	dispatch(orderFetchStart());
	try {
		const endpoint = "https://tao-foods.herokuapp.com/api/orders";

		const res = await (await fetch(endpoint))?.json();
		dispatch(orderFetchSuccess(res));
	} catch (error) {
		console.log(error);
		dispatch(orderFetchFailure());
	}
};

export const productsFetch = async (dispatch) => {
	dispatch(productFetchStart());
	try {
		const endpoint = "https://tao-foods.herokuapp.com/api/dishes";

		const res = await (await fetch(endpoint))?.json();
		dispatch(productFetchSuccess(res));
	} catch (error) {
		console.log(error);
		dispatch(productFetchFailure());
	}
};

// export const itemFetch = createAsyncThunk("items/itemFetch", async (id) => {
// 	try {
// 		const endpoint = `https://tao-foods.herokuapp.com/api/dishes/find/${id}`;
// 		return await (await fetch(endpoint))?.json();
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

// export const meatFetch = createAsyncThunk("items/meatFetch", async () => {
// 	try {
// 		const endpoint = "https://tao-foods.herokuapp.com/api/meat";
// 		return await (await fetch(endpoint))?.json();
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

// export const sauceFetch = createAsyncThunk("items/sauceFetch", async () => {
// 	try {
// 		const endpoint = "https://tao-foods.herokuapp.com/api/sauce";
// 		return await (await fetch(endpoint))?.json();
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

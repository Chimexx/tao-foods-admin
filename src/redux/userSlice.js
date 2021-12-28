import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchUsers, createUsers, deleteUsers, updateUsers } from "./apiRequests";

const userSlice = createSlice({
	name: "users",
	initialState: {
		usersList: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//Fetch Users
		fetchUsersStart: (state) => {
			state.isFetching = true;
		},
		fetchUsersSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.usersList = action.payload;
		},
		fetchUsersFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Create User
		createUserStart: (state) => {
			state.isFetching = true;
		},
		createUserSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.usersList.push(action.payload);
			toast.success(`${action.payload.username} was added!`, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 3000,
			});
		},
		createUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Update User
		updateUserStart: (state) => {
			state.isFetching = true;
		},
		updateUserSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.usersList[state.usersList.findIndex((item) => item._id === action.payload.id)] =
				action.payload.data;
			toast.success(`${action.payload.data.username} was updated!`, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 3000,
			});
		},
		updateUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Delete User
		deleteUserStart: (state) => {
			state.isFetching = true;
		},
		deleteUserSuccess: (state, action) => {
			state.usersList.splice([state.usersList.findIndex((user) => user._id) === action.payload.id], 1);
			state.isFetching = false;
			state.error = false;
			toast.success("User deleted", {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 3000,
			});
		},
		deleteUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const getUsers = (state) => state.users;
export const {
	fetchUsersStart,
	fetchUsersSuccess,
	fetchUsersFailure,
	createUserStart,
	createUserSuccess,
	createUserFailure,
	deleteUserStart,
	deleteUserSuccess,
	deleteUserFailure,
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
} = userSlice.actions;

export default userSlice.reducer;

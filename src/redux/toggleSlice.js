import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
	name: "toggle",
	initialState: {
		toggle: "false",
	},
	reducers: {
		//Menu toggle
		menuToggle: (state, action) => {
			if (state.toggle === "false") {
				state.toggle = "true";
			} else {
				state.toggle = "false";
			}
		},
	},
});
export const getToggle = (state) => state.toggle;

export default toggleSlice.reducer;
export const { menuToggle } = toggleSlice.actions;

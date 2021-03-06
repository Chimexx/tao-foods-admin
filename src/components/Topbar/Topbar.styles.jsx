import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
	topbar: {
		position: "fixed",
		top: 0,
		backgroundColor: "#f3f3f3",
		height: 50,
		width: "100%",
		zIndex: 300,
		boxShadow: "0 0px 3px rgb(0 0 0 / 0.2)",
	},
	wrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
		padding: "0px 40px",

		[theme.breakpoints.down("sm")]: {
			padding: "0px 15px",
		},
	},
	logo: {
		width: "100px",
		cursor: "pointer",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	right: {
		display: "flex",
	},
	user: {
		marginRight: "10px",
		fontWeight: 500,
	},
	account: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginRight: "10px",
	},

	icon: {
		color: "#555555",
	},
	menu: {
		display: "none",
		cursor: "pointer",

		[theme.breakpoints.down("xs")]: {
			display: "block",
		},
	},
	button: {
		height: "30px",
		padding: "2px 5px",

		[theme.breakpoints.down("xs")]: {
			height: "25px",
			padding: "2px 5px",
		},
	},
}));

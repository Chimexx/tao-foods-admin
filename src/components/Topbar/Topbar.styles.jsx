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
	button: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		height: "30px",
		padding: "2px 5px",
		borderTopRightRadius: "10px",
		borderBottomRightRadius: "10px",
	},
}));

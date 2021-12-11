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
	},

	icon: {
		color: "#555555",
	},
}));

import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
	sidebar: {
		flex: 1,
		position: "sticky",
		top: 50,
		minHeight: "calc(100vh - 50px)",
		backgroundColor: "#f3f3f3",
	},
	listItem: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		listStyle: "none",
		padding: "3px 10px",
		cursor: "pointer",
		margin: "5px 0",

		"&:hover": {
			backgroundColor: "#ffffff",
			color: "#ff8400",
			borderRadius: "20px",
		},
	},
	listItemActive: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		listStyle: "none",
		padding: "3px 10px",
		backgroundColor: "#ffffff",
		color: "#ff8400",
		borderRadius: "20px",
	},

	wrapper: {
		padding: "20px 40px",
		color: "#555",
	},
	list: {
		paddingTop: 0,
		paddingLeft: 0,
	},
	menu: {
		marginBottom: "10px",
	},
	title: {
		fontSize: 14,
		fontWeight: 600,
	},
	typography: {
		marginLeft: "10px",
		fontSize: 12,
	},
	icon: {
		fontSize: 16,
		marginRight: 10,
		paddingLeft: 10,
	},
}));

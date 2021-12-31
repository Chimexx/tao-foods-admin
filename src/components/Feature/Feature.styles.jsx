import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
	featured: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",

		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	featuredItem: {
		flex: theme.spacing(1),
		display: "flex",
		flexDirection: "column",
		padding: theme.spacing(3),
		margin: theme.spacing(1),
		borderRadius: theme.spacing(1),
		backgroundColor: "#f3f3f3",
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(1),
		},
	},
	title: {
		fontSize: 20,
		fontWeight: "300",

		[theme.breakpoints.down("sm")]: {
			fontSize: 16,
			fontWeight: "300",
		},
	},
	moneyContainer: {
		marginTop: "10px",
		display: "flex",
		alignItems: "center",
	},
	money: {
		fontSize: 30,
		fontWeight: 600,

		[theme.breakpoints.down("sm")]: {
			fontSize: 24,
			fontWeight: "600",
		},
	},
	rate: {
		display: "flex",
		alignItems: "center",
		marginLeft: "20px",
	},
	up: {
		color: "green",
	},
	down: {
		color: "red",
	},
	sub: {
		color: "grey",
	},
}));

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
		padding: theme.spacing(3),
		margin: theme.spacing(1),
		borderRadius: theme.spacing(1),
		cursor: "pointer",
		boxShadow: "1px 1px 1px rgb(0 0 0 / 0.2)",

		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(1),
		},
	},
	title: {
		fontSize: 20,

		[theme.breakpoints.down("sm")]: {
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
			fontWeight: "500",
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

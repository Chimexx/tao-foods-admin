import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
	container: {
		flex: 4,
		margin: theme.spacing(1),

		[theme.breakpoints.down("xs")]: {
			margin: theme.spacing(0.1),
		},
	},
	widgets: {
		display: "flex",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
}));

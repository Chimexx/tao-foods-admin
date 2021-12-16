import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
	container: {
		flex: 4,
		margin: theme.spacing(2),
	},
	widgets: {
		display: "flex",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
}));

import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
	container: {
		flex: theme.spacing(4),
		margin: theme.spacing(2),
	},
	widgets: {
		display: "flex",
	},
}));

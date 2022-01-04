import React from "react";
import Feature from "../../components/Feature";
import WidgetLg from "../../components/WidgetLg";
import WidgetSm from "../../components/WidgetSm";
import { setSnackbar } from "../../redux/snackbarSlice";
import { useDispatch } from "react-redux";
import { useStyles } from "./Home.styles";
import { Button } from "@material-ui/core";

const Home = () => {
	const dispatch = useDispatch();
	const classes = useStyles({});
	return (
		<div className={classes.container}>
			<Feature />
			<div className={classes.widgets}>
				<WidgetLg />
				<WidgetSm />
			</div>
			<Button
				onClick={() =>
					dispatch(
						setSnackbar({
							snackbarOpen: true,
							snackbarType: "success",
							snackbarMessage: "snackbar message",
						})
					)
				}
			>
				click me
			</Button>
		</div>
	);
};

export default Home;

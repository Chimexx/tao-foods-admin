import React from "react";
import Feature from "../../components/Feature";
import WidgetLg from "../../components/WidgetLg";
import WidgetSm from "../../components/WidgetSm";

import { useStyles } from "./Home.styles";
const Home = () => {
	const classes = useStyles({});
	return (
		<div className={classes.container}>
			<Feature />
			<div className={classes.widgets}>
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;

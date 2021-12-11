import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";

import { useStyles } from "./Feature.styles";
const Feature = () => {
	const classes = useStyles({});
	return (
		<div className={classes.featured}>
			<div className={classes.featuredItem}>
				<span className={classes.title}>Revenue</span>
				<div className={classes.moneyContainer}>
					<span className={classes.money}>2,000</span>
					<span className={classes.rate}>
						<ArrowDownward className={classes.down} /> -11
					</span>
				</div>
				<span className={classes.sub}>Compared to last month</span>
			</div>
			<div className={classes.featuredItem}>
				<span className={classes.title}>Sales</span>
				<div className={classes.moneyContainer}>
					<span className={classes.money}>3,600</span>
					<span className={classes.rate}>
						<ArrowDownward className={classes.down} /> -19
					</span>
				</div>
				<span className={classes.sub}>Compared to last month</span>
			</div>
			<div className={classes.featuredItem}>
				<span className={classes.title}>Cost</span>
				<div className={classes.moneyContainer}>
					<span className={classes.money}>500</span>
					<span className={classes.rate}>
						<ArrowUpward className={classes.up} /> +5
					</span>
				</div>
				<span className={classes.sub}>Compared to last month</span>
			</div>
		</div>
	);
};

export default Feature;

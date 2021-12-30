import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../redux/requestMethods";

import { useStyles } from "./Feature.styles";
const Feature = () => {
	const classes = useStyles({});
	const [income, setIncome] = useState([]);

	useEffect(() => {
		const getStats = async () => {
			const res = await publicRequest.get("orders/stats");
			setIncome(res.data);
		};
		getStats();
	}, []);

	console.log(income);
	return (
		<div className={classes.featured}>
			<div className={classes.featuredItem}>
				<span className={classes.title}>Revenue</span>
				<div className={classes.moneyContainer}>
					<span className={classes.money}>{income[1]?.total}</span>
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

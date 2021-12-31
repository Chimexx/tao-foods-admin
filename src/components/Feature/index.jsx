import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../redux/requestMethods";
import OrderChart from "../OrderChart";

import { useStyles } from "./Feature.styles";
const Feature = () => {
	const classes = useStyles({});
	const [incomes, setIncomes] = useState([]);

	useEffect(() => {
		const getStats = async () => {
			const res = await publicRequest.get("orders/income-stats");
			setIncomes(res.data);
		};
		getStats();
	}, []);

	const thisMonth = new Date().getMonth() + 1;
	const prevMonth = new Date().getMonth();
	const currentIncome = incomes.find((income) => income._id === thisMonth);
	const prevIncome = incomes.find((income) => income._id === prevMonth);

	const percentage = (currentIncome?.total * 100) / prevIncome?.total - 100;

	return (
		<div className={classes.featured}>
			<div className={classes.featuredItem}>
				<span className={classes.title}>Revenue</span>
				{currentIncome ? (
					<>
						<div className={classes.moneyContainer}>
							<span className={classes.money}>₦ {currentIncome?.total}</span>
							<span className={classes.rate}></span>
							{percentage > 0 ? (
								<ArrowUpward className={classes.up} />
							) : (
								<ArrowDownward className={classes.down} />
							)}
							{Math.floor(percentage)}%
						</div>
					</>
				) : (
					"--"
				)}
				<span className={classes.sub}>Compared to last month</span>
			</div>
			<div className={classes.featuredItem}>
				<OrderChart />
			</div>
		</div>
	);
};

export default Feature;

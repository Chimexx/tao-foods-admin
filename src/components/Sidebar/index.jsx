import { Typography } from "@material-ui/core";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import React from "react";
import { useStyles } from "./Sidebar.styles";

const Sidebar = () => {
	const classes = useStyles({});

	return (
		<div className={classes.sidebar}>
			<div className={classes.wrapper}>
				<div className={classes.menu}>
					<Typography variant="h6" className={classes.title}>
						Orders
					</Typography>
					<ul className={classes.list}>
						<li className={(classes.listItem, classes.listItemActive)}>
							<LineStyle className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								All Orders
							</Typography>
						</li>

						<li className={classes.listItem}>
							<TrendingUp className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								Pending
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Timeline className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								Fullfilled
							</Typography>
						</li>
					</ul>
				</div>
				<div className={classes.menu}>
					<Typography variant="h6" className={classes.title}>
						Products
					</Typography>
					<ul className={classes.list}>
						<li className={classes.listItem}>
							<LineStyle className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								All Products
							</Typography>
						</li>

						<li className={classes.listItem}>
							<TrendingUp className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								New
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Timeline className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								Analytics
							</Typography>
						</li>
					</ul>
				</div>
				<div className={classes.menu}>
					<Typography variant="h6" className={classes.title}>
						Customers
					</Typography>
					<ul className={classes.list}>
						<li className={classes.listItem}>
							<LineStyle className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								All Customers
							</Typography>
						</li>

						<li className={classes.listItem}>
							<TrendingUp className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								New
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Timeline className={classes.icon} />
							<Typography variant="h6" className={classes.typography}>
								Analytics
							</Typography>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

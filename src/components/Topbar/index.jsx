import React from "react";
import { useStyles } from "./Topbar.styles";
import logo from "../../images/tao.svg";
import { Badge } from "@material-ui/core";
import { NotificationsNone } from "@material-ui/icons";

const Topbar = () => {
	const classes = useStyles();

	return (
		<div className={classes.topbar}>
			<div className={classes.wrapper}>
				<div className="left">
					<img src={logo} alt="" className={classes.logo} />
				</div>
				<div className={classes.right}>
					<div className={classes.user}>user</div>
					<div className="icons">
						<Badge badgeContent={4} color="error">
							<NotificationsNone className={classes.icon} />
						</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;

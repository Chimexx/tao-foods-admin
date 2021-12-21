import React from "react";
import { useStyles } from "./Topbar.styles";
import logo from "../../images/tao.svg";
import { Badge, Button } from "@material-ui/core";
import { NotificationsNone } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { logout, ordersFetch } from "../../redux/apiRequests";
import { useEffect } from "react";

const Topbar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { currentUser } = useSelector((state) => state.user);

	const handleLogout = () => {
		logout(dispatch);
	};

	const orders = useSelector((state) => state.orders.orders.filter((items) => items.status === "pending"));

	return (
		<div className={classes.topbar}>
			<div className={classes.wrapper}>
				<div className="left">
					<img src={logo} alt="" className={classes.logo} />
				</div>
				<div className={classes.right}>
					{currentUser && (
						<div className={classes.account}>
							<div className={classes.user}>{currentUser.username}</div>
							<Button size="small" className={classes.button} onClick={handleLogout}>
								Logout
							</Button>
						</div>
					)}
					<div className="icons">
						<Badge badgeContent={orders.length} color="error">
							<NotificationsNone className={classes.icon} />
						</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;

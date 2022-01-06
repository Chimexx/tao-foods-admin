import React, { useEffect } from "react";
import { useStyles } from "./Topbar.styles";
import logo from "../../images/tao.svg";
import { Badge, Button } from "@material-ui/core";
import { Clear, NotificationsNone } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../../redux/authSlice";
import { getToggle, menuToggle } from "../../redux/toggleSlice";
import { fetchOrders, userLogout } from "../../redux/apiRequests";
import { getOrders } from "../../redux/orderSlice";
import MenuIcon from "@material-ui/icons/Menu";

const Topbar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const { currentUser } = useSelector(getUser);
	const { toggle } = useSelector(getToggle);

	const handleLogout = () => {
		userLogout(dispatch);
		history.push("/");
	};
	const handleToggle = (state) => {
		state === "open" && dispatch(menuToggle("true"));
		state === "close" && dispatch(menuToggle("false"));
	};

	useEffect(() => {
		fetchOrders(dispatch);
	}, [dispatch]);

	const { orderList } = useSelector(getOrders);
	const orders = orderList.filter((order) => order.status === "pending");

	return (
		<div className={classes.topbar}>
			<div className={classes.wrapper}>
				{toggle === "true" ? (
					<div className={classes.menu} onClick={() => handleToggle("close")}>
						<Clear />
					</div>
				) : (
					<div className={classes.menu} onClick={() => handleToggle("open")}>
						<MenuIcon />
					</div>
				)}
				<div className="left">
					<img src={logo} alt="" className={classes.logo} />
				</div>
				<div className={classes.right}>
					{currentUser && (
						<div className={classes.account}>
							<div className={classes.user}>{currentUser.username}</div>
							<Button
								variant="outlined"
								size="small"
								className={classes.button}
								onClick={handleLogout}
							>
								Logout
							</Button>
						</div>
					)}
					<div className="icons">
						<Badge badgeContent={orders?.length} color="error">
							<NotificationsNone className={classes.icon} />
						</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topbar;

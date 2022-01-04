import React, { useEffect } from "react";
import { Container, Title, Span } from "./Orders.styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/apiRequests";
import Alert from "../../components/Alert";
import Loading from "../../components/Loading";
import { getOrders } from "../../redux/orderSlice";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const Orders = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	useEffect(() => {
		fetchOrders(dispatch);
	}, [dispatch]);

	const { orderList, error, isFetching } = useSelector(getOrders);

	if (isFetching) {
		return (
			<Container>
				<Loading />
			</Container>
		);
	}
	if (error) {
		return (
			<Container>
				<Alert type="error" text="There was a problem, Try Again" />
			</Container>
		);
	}
	return (
		<Container>
			<Title>All Orders</Title>
			<TableContainer component={Paper}>
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>First Name</TableCell>
							<TableCell align="right">Last Name</TableCell>
							<TableCell align="right">Phone</TableCell>
							<TableCell align="right">Qty</TableCell>
							<TableCell align="right">Amount </TableCell>
							<TableCell align="right">Status </TableCell>
							<TableCell align="center">Action </TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{[...orderList].reverse().map((row) => (
							<TableRow key={row._id}>
								<TableCell component="th" scope="row">
									{row.shipping.firstName}
								</TableCell>
								<TableCell align="right">{row.shipping.lastName}</TableCell>
								<TableCell align="right">{row.shipping.phoneNumber}</TableCell>
								<TableCell align="right">{row.totalQty}</TableCell>
								<TableCell align="right">{row.amount}</TableCell>
								<TableCell align="right">{row.status}</TableCell>
								<Link to={"/order/" + row._id}>
									<TableCell align="right">
										<Button variant="default">Edit</Button>
									</TableCell>
								</Link>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default Orders;

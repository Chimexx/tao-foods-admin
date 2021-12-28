import React, { useEffect } from "react";
import { Container, Title, Span } from "./Orders.styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/apiRequests";
import Alert from "../../components/Alert";
import Loading from "../../components/Loading";
import { getOrders } from "../../redux/orderSlice";

const columns = [
	{ field: "_id", headerName: "ID", width: 100, hide: true },
	{
		field: "firstName",
		headerName: "First name",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <span>{params.row.shipping.firstName}</span>;
		},
	},
	{
		field: "lastName",
		headerName: "Last name",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <span>{params.row.shipping.lastName}</span>;
		},
	},
	{
		field: "phoneNumber",
		headerName: "Phone",
		type: "number",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <span>{params.row.shipping.phoneNumber}</span>;
		},
	},
	{
		field: "cartTotalQty",
		headerName: "Qty",
		type: "number",
		width: 100,
		editable: false,
	},
	{
		field: "amount",
		headerName: "Amount",
		type: "number",
		width: 150,
		editable: false,
	},
	{
		field: "status",
		headerName: "Status",
		width: 110,
		editable: false,
		renderCell: (params) => {
			return <Span value={params.row.status}>{params.row.status}</Span>;
		},
	},
	{
		field: "action",
		headerName: "Action",
		width: 140,
		editable: false,
		renderCell: (params) => {
			return (
				<>
					<Link to={"/order/" + params.row._id}>
						<Button size="small" variant="outlined" className="button">
							Details
						</Button>
					</Link>
				</>
			);
		},
	},
];

const Orders = () => {
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
			<div style={{ height: 550, width: "100%" }}>
				<DataGrid
					rows={orderList}
					columns={columns}
					getRowId={(row) => row._id}
					pageSize={10}
					// checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</Container>
	);
};

export default Orders;

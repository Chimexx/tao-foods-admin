import React from "react";
import { Container, Title } from "./Delivered.styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
		field: "totalQty",
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
		renderCell: (params) => {
			return <span>₦{params.row.amount}</span>;
		},
	},
	{
		field: "status",
		headerName: "Status",
		width: 110,
		editable: false,
		renderCell: (params) => {
			return <span className="status">{params.row.status}</span>;
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

const Delivered = () => {
	const { orderList } = useSelector(getOrders);
	const orders = orderList.filter((order) => order.status === "delivered");

	if (!orders) {
		return <Container>There was an error</Container>;
	}
	return (
		<Container>
			<Title>Delivered Orders</Title>
			<div style={{ height: 550, width: "100%" }}>
				<DataGrid
					rows={orders}
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

export default Delivered;

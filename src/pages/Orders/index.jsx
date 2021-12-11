import React from "react";
import { Container, Title } from "./Orders.styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const columns = [
	{ field: "id", headerName: "ID", width: 100 },
	{
		field: "firstName",
		headerName: "First name",
		width: 150,
		editable: false,
	},
	{
		field: "lastName",
		headerName: "Last name",
		width: 150,
		editable: false,
	},
	{
		field: "phone",
		headerName: "Phone",
		type: "number",
		width: 150,
		editable: false,
	},
	{
		field: "qty",
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
	},
	{
		field: "action",
		headerName: "Action",
		width: 140,
		editable: false,
		renderCell: (params) => {
			return (
				<>
					<Link to={"/order/" + params.row.id}>
						<Button size="small" variant="outlined" className="button">
							Details
						</Button>
					</Link>
				</>
			);
		},
	},

	// {
	// 	field: "fullName",
	// 	headerName: "Full name",
	// 	description: "This column has a value getter and is not sortable.",
	// 	sortable: false,
	// 	width: 160,
	// },
];

const rows = [
	{
		id: 1,
		firstName: "Snow",
		lastName: "Jon",
		phone: "08039484748",
		qty: 2,
		amount: 2000,
		status: "pending",
	},
	{
		id: 2,
		firstName: "Mike",
		lastName: "Suquo",
		phone: "08039647748",
		qty: 3,
		amount: 3500,
		status: "approved",
	},
	{
		id: 3,
		firstName: "Snow",
		lastName: "Jon",
		phone: "08039484748",
		qty: 5,
		amount: 5000,
		status: "pending",
	},
	{
		id: 4,
		firstName: "Snow",
		lastName: "Jon",
		phone: "08039484748",
		qty: 2,
		amount: 2000,
		status: "pending",
	},
	{
		id: 5,
		firstName: "Mike",
		lastName: "Suquo",
		phone: "08039647748",
		qty: 3,
		amount: 3500,
		status: "approved",
	},
	{
		id: 6,
		firstName: "Snow",
		lastName: "Jon",
		phone: "08039484748",
		qty: 5,
		amount: 5000,
		status: "pending",
	},
];

const Orders = () => {
	return (
		<Container>
			<Title>All Orders</Title>
			<div style={{ height: 550, width: "100%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={10}
					checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</Container>
	);
};

export default Orders;

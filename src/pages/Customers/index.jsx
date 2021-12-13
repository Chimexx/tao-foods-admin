import React from "react";
import { Container, Title } from "./Customers.styles";
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
		width: 150,
		editable: false,
	},
	{
		field: "email",
		headerName: "E mail",
		width: 150,
		editable: false,
	},

	{
		field: "address",
		headerName: "Address",
		width: 300,
		editable: false,
	},
	// {
	// 	field: "action",
	// 	headerName: "Action",
	// 	width: 140,
	// 	editable: false,
	// 	renderCell: (params) => {
	// 		return (
	// 			<>
	// 				<Link to={"/order/" + params.row.id}>
	// 					<Button size="small" variant="outlined" className="button">
	// 						Details
	// 					</Button>
	// 				</Link>
	// 			</>
	// 		);
	// 	},
	// },
];

const rows = [
	{
		id: 1,
		firstName: "Snow",
		lastName: "Jon",
		phone: "08039484748",
		email: "jon.snow@gmail.com",
		address: "first bank, Bosso rd, minna",
	},
];

const Customers = () => {
	return (
		<Container>
			<Title>Customers List</Title>
			<div style={{ height: 550, width: "100%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={10}
					// checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</Container>
	);
};

export default Customers;

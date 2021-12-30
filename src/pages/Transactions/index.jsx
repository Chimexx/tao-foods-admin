import React, { useEffect } from "react";
import { Container, Title } from "./Transactions.styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/apiRequests";
import { getOrders } from "../../redux/orderSlice";

const columns = [
	{ field: "id", headerName: "ID", width: 100, hide: true },
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
		field: "phone",
		headerName: "Phone",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <span>{params.row.shipping.phoneNumber}</span>;
		},
	},
	{
		field: "ref",
		headerName: "Reference",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <span value={params.row.reference}>{params.row.reference}</span>;
		},
	},

	{
		field: "address",
		headerName: "Address",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <span>{params.row.shipping.address}</span>;
		},
	},
	{
		field: "payment",
		headerName: "Payment",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <span>{params.row.paymentMethod}</span>;
		},
	},
	{
		field: "amount",
		headerName: "Amount",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <span>₦{params.row.amount}</span>;
		},
	},
	{
		field: "details",
		headerName: "Details",
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

const Transactions = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		fetchOrders(dispatch);
	}, [dispatch]);

	const { orderList, error, isFetching } = useSelector(getOrders);

	return (
		<Container>
			<Title>Transactions List</Title>
			<div style={{ height: 550, width: "100%" }}>
				<DataGrid
					rows={orderList}
					columns={columns}
					pageSize={10}
					getRowId={(row) => row._id}
					// checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</Container>
	);
};

export default Transactions;

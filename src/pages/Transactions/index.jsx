import React, { useEffect } from "react";
import { Container, Title, Payment, PaymentIcon, PaymentType } from "./Transactions.styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/apiRequests";
import { getOrders } from "../../redux/orderSlice";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import { CloudDone, LocalShipping } from "@material-ui/icons";

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
			return (
				<Payment>
					<PaymentIcon>
						{params.row.paymentMethod === "online" ? <CloudDone /> : <LocalShipping />}
					</PaymentIcon>
					<PaymentType>{params.row.paymentMethod}</PaymentType>
				</Payment>
			);
		},
	},
	{
		field: "amount",
		headerName: "Amount",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return <h4>₦{params.row.amount}</h4>;
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

const Transactions = () => {
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
			<Title>Transactions List</Title>
			<div style={{ height: 550, width: "100%" }}>
				<DataGrid
					rows={[...orderList].reverse()}
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

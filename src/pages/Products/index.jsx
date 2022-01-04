import React, { useEffect } from "react";
import { Container, Title, Item, CreateBtn, Head } from "./Products.styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiRequests";
import { getProducts } from "../../redux/productSlice";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

const columns = [
	{ field: "_id", headerName: "ID", width: 100, hide: true },

	{
		field: "item",
		headerName: "Item",
		width: 200,
		editable: false,
		renderCell: (params) => {
			return (
				<Item>
					<img src={params.row.img} alt="" />
					<span>{params.row.title}</span>
				</Item>
			);
		},
	},
	{
		field: "desc",
		headerName: "Description",
		width: 250,
		editable: false,
	},
	{
		field: "price",
		headerName: "Price",
		type: "number",
		width: 120,
		editable: false,
	},
	{
		field: "inStock",
		headerName: "In Stock",
		width: 120,
		editable: false,
		renderCell: (params) => {
			return <span>{params.row.inStock ? "Yes" : "No"}</span>;
		},
	},
	{
		field: "cat",
		headerName: "Categories",
		width: 150,
		editable: false,
		renderCell: (params) => {
			return (
				<Item>
					{params.row.category.map((cat, index) => {
						return <span key={index}>{cat}</span>;
					})}
				</Item>
			);
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
					<Link to={"/product/" + params.row._id}>
						<Button size="small" variant="outlined" className="button">
							Edit
						</Button>
					</Link>
				</>
			);
		},
	},
];

const Products = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchProducts(dispatch);
	}, [dispatch]);

	const { productsList, error, isFetching } = useSelector(getProducts);

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
			<Head>
				<Title>All Products</Title>
				<Link to="/newproduct">
					<CreateBtn>CREATE NEW</CreateBtn>
				</Link>
			</Head>
			<div style={{ height: 550, width: "100%" }}>
				<DataGrid
					rows={[...productsList].reverse()}
					getRowId={(row) => row._id}
					columns={columns}
					pageSize={10}
					size="small"
					// checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</Container>
	);
};

export default Products;

import React, { useEffect } from "react";
import { Container, Title, Item, CreateBtn, Head } from "./Products.styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../../redux/apiRequests";

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
		productsFetch(dispatch);
	}, [dispatch]);

	const { products } = useSelector((state) => state.products);

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
					rows={products}
					getRowId={(row) => row._id}
					columns={columns}
					pageSize={10}
					// checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</Container>
	);
};

export default Products;

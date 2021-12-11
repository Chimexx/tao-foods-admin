import React from "react";
import { Container, Title, Item, New, Head } from "./Products.styles";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const columns = [
	{ field: "id", headerName: "ID", width: 100 },

	{
		field: "item",
		headerName: "Item",
		width: 200,
		editable: false,
		renderCell: (params) => {
			return (
				<Item>
					<img src={params.row.image} alt="" />
					<span>{params.row.item}</span>
				</Item>
			);
		},
	},
	{
		field: "desc",
		headerName: "Description",
		width: 120,
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
	},
	{
		field: "cat",
		headerName: "Categories",
		width: 150,
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
					<Link to={"/product/" + params.row.id}>
						<Button size="small" variant="outlined" className="button">
							Edit
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
		item: "Jollof Rice",
		image: "https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-cooking.jpg",
		desc: "Jollof rice",
		price: 400,
		inStock: true,
		cat: "Rice",
	},
];

const Products = () => {
	return (
		<Container>
			<Head>
				<Title>All Products</Title>
				<New>New</New>
			</Head>

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

export default Products;

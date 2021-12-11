import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Container,
	Wrapper,
	Head,
	ProductDetails,
	Image,
	Description,
	Price,
	Label,
	Details,
	Hr,
	Item,
	Stock,
	Cat,
	EditProduct,
	InputGroup,
} from "./Product.styles";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			padding: "5px 5px",
		},
	},
	input: {
		display: "none",
	},
}));

const Product = () => {
	const classes = useStyles();

	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<Container>
			<Head>Edit Product</Head>
			<Wrapper>
				<ProductDetails>
					<Image src="https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-cooking.jpg" />
					<Details>
						<Item>
							<Label>Jollof Rice</Label>
							<Description>Description</Description>
						</Item>
						<Price>NGN 2000</Price>
					</Details>
					<Hr />
					<Cat>
						<Label>Category</Label>
						<em>
							<Description>Rice, rice</Description>
						</em>
					</Cat>
					<Hr />
					<Cat>
						<Label>In Stock</Label>
						<em>
							<Stock value="true">Yes</Stock>
						</em>
					</Cat>
					<Hr />
					<Cat>
						<Label>Require Sauce</Label>
						<em>
							<Stock value="false">No</Stock>
						</em>
					</Cat>
				</ProductDetails>
				<EditProduct>
					<InputGroup>
						<TextField
							className="input"
							label="Item Name"
							id="filled-size-small"
							defaultValue=""
							variant="filled"
							size="small"
						/>
						<TextField
							className="input"
							label="Item Description"
							id="filled-size-small"
							defaultValue=""
							variant="filled"
							size="small"
						/>
						<TextField
							className="input"
							label="Item Price"
							id="filled-size-small"
							type="number"
							defaultValue=""
							variant="filled"
							size="small"
						/>
						<TextField
							className="input"
							label="Item Categories"
							id="filled-size-small"
							defaultValue=""
							variant="filled"
							size="small"
						/>
						<div className={classes.root}>
							<input
								accept="image/*"
								className={classes.input}
								id="contained-button-file"
								type="file"
							/>
							<label htmlFor="contained-button-file">
								<Button variant="contained" color="default" component="span">
									Upload
								</Button>
							</label>
						</div>
						<FormControlLabel
							control={
								<Switch
									checked={state.checkedB}
									onChange={handleChange}
									name="checkedB"
									color="Primary"
								/>
							}
							label="In Stock"
						/>
					</InputGroup>
				</EditProduct>
			</Wrapper>
		</Container>
	);
};

export default Product;

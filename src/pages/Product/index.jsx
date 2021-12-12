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
	RadioDiv,
	Update,
	InputGroup,
	SwitchGroup,
	UpdateBtn,
} from "./Product.styles";
import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			padding: "5px 5px",
			height: "50px",
		},
	},
	input: {
		display: "none",
	},
}));

const Product = () => {
	const classes = useStyles();

	const [requireSauce, setRequireStock] = React.useState("false");
	const [inStock, setInStock] = React.useState("true");
	const [title, setTitle] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [description, setDescription] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	const [image, setImage] = React.useState();

	const handleInStock = (event) => {
		setInStock(event.target.value);
	};
	const handleReqSauce = (event) => {
		setRequireStock(event.target.value);
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
							// className="input"
							label="Item Name"
							id="filled-size-small"
							defaultValue={title}
							variant="filled"
							size="small"
							className={classes.root}
						/>
						<TextField
							// className="input"
							label="Item Description"
							id="filled-size-small"
							defaultValue={description}
							variant="filled"
							size="small"
							className={classes.root}
						/>
						<TextField
							// className="input"
							label="Item Price"
							id="filled-size-small"
							type="number"
							defaultValue=""
							variant="filled"
							size="small"
							className={classes.root}
						/>
						<TextField
							// className="input"
							label="Item Categories"
							id="filled-size-small"
							defaultValue=""
							variant="filled"
							size="small"
							className={classes.root}
						/>
						<div className={classes.root} style={{ marginTop: "10px", padding: 0 }}>
							<input
								accept="image/*"
								className={classes.input}
								id="contained-button-file"
								type="file"
							/>
							<label htmlFor="contained-button-file" style={{ margin: "5px" }}>
								<Button variant="contained" color="default" component="span">
									Update Image
								</Button>
							</label>
						</div>
					</InputGroup>
					<Hr />
					<SwitchGroup>
						<FormControl component="fieldset" className="formControl">
							<RadioDiv>
								<FormLabel component="legend" className="radioText">
									In Stock
								</FormLabel>
								<RadioGroup
									aria-label="instock"
									name="instock"
									value={inStock}
									onChange={handleInStock}
								>
									<FormControlLabel
										value="true"
										control={<Radio className="radio" />}
										label="Yes"
									/>
									<FormControlLabel
										value="false"
										control={<Radio className="radio" />}
										label="No"
									/>
								</RadioGroup>
							</RadioDiv>
							<RadioDiv>
								<FormLabel component="legend" className="radioText">
									Require Sauce
								</FormLabel>
								<RadioGroup
									aria-label="reqSauce"
									name="reqSauce"
									value={requireSauce}
									onChange={handleReqSauce}
								>
									<FormControlLabel
										value="true"
										control={<Radio className="radio" />}
										label="Yes"
									/>
									<FormControlLabel
										value="false"
										control={<Radio className="radio" />}
										label="No"
									/>
								</RadioGroup>
							</RadioDiv>
						</FormControl>
					</SwitchGroup>
					<Hr />
					<Update>
						<UpdateBtn>UPDATE</UpdateBtn>
					</Update>
				</EditProduct>
			</Wrapper>
		</Container>
	);
};

export default Product;

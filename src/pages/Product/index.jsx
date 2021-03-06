import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ref, deleteObject, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

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
	ActionBtn,
} from "./Product.styles";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteProduct, updateProduct } from "../../redux/apiRequests";
import { CheckCircleOutlined, DeleteOutlined } from "@material-ui/icons";
import { ClassicSpinner } from "react-spinners-kit";
import { useHistory } from "react-router-dom";
import { getProducts } from "../../redux/productSlice";
import { setSnackbar } from "../../redux/snackbarSlice";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			padding: "5px 5px",
			height: "50px",
		},

		[theme.breakpoints.down("sm")]: {
			width: "100%",
			padding: 0,
			margin: theme.spacing(0),
		},
	},
	input: {
		display: "none",
	},
}));

const Product = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const id = location.pathname.split("/")[2];

	const [requireSauce, setRequireStock] = React.useState("");
	const [inStock, setInStock] = React.useState("");
	const [title, setTitle] = React.useState("");
	const [price, setPrice] = React.useState(null);
	const [desc, setDesc] = React.useState("");
	const [category, setCategory] = React.useState(undefined);
	const [file, setFile] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	const { productsList } = useSelector(getProducts);
	const product = productsList.find((product) => product._id === id);

	const handleInStock = (event) => {
		setInStock(event.target.value);
	};
	const handleReqSauce = (event) => {
		setRequireStock(event.target.value);
	};
	const handleDelete = async () => {
		setLoading(true);
		const imageRef = ref(storage, `images/${product.imgName}`);
		// Delete the file
		await deleteObject(imageRef);
		deleteProduct(id, dispatch);
		setLoading(false);
		history.push("/products");
	};
	const handleUpdate = async () => {
		setLoading(true);
		// I need to delete this file first so as to replace it with a new one
		// Create a reference to the file to delete
		if (file?.name) {
			//If there is a file
			const imageRef = ref(storage, `images/${product.imgName}`);
			// Delete the file
			await deleteObject(imageRef)
				.then(() => {})
				.catch((error) => {
					dispatch(
						setSnackbar({
							snackbarOpen: true,
							snackbarType: "error",
							snackbarMessage: `Image does not exist!`,
						})
					);
					setLoading(false);
				});
			// File deleted successfully
			const storageRef = ref(storage, "images/" + file.name);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				"state_changed",
				(snapshot) => {},
				(error) => {
					dispatch(
						setSnackbar({
							snackbarOpen: true,
							snackbarType: "error",
							snackbarMessage: `There was a problem, try again`,
						})
					);
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						updateProduct(
							id,
							{
								title: title ? title : product.title,
								price: price ? price : product.price,
								category: category ? category : product.category,
								desc: desc ? desc : product.desc,
								inStock: inStock ? inStock : product.inStock,
								requireSauce: requireSauce ? requireSauce : product.requireSauce,
								img: downloadURL,
								imgName: file.name,
							},
							dispatch
						);
						setLoading(false);
					});
				}
			);
		} else {
			//if there is no file
			updateProduct(
				id,
				{
					title: title ? title : product.title,
					price: price ? price : product.price,
					category: category ? category : product.category,
					desc: desc ? desc : product.desc,
					inStock: inStock ? inStock : product.inStock,
					requireSauce: requireSauce ? requireSauce : product.requireSauce,
					img: product.img,
					imgName: product.imgName,
				},
				dispatch
			);
			setLoading(false);
		}
	};
	if (!product) {
		return <Container>There was an error</Container>;
	}
	return (
		<Container>
			<Head>Edit Product</Head>
			<Wrapper>
				<ProductDetails>
					<Image src={product.img} />
					<Details>
						<Item>
							<Label>{product.title}</Label>
							<Description>{product.desc}</Description>
						</Item>
						<Price>???{product.price} </Price>
					</Details>
					<Hr />
					<Cat>
						<Label>Category</Label>
						{product.category?.map((cat, index) => (
							<Description key={index}>
								<em>{cat} </em>
							</Description>
						))}
					</Cat>
					<Hr />
					<Cat>
						<Label>In Stock</Label>

						<Stock value={product.inStock}>
							<em>{product.inStock === true ? "Yes" : "No"} </em>
						</Stock>
					</Cat>
					<Hr />
					<Cat>
						<Label>Require Sauce</Label>

						<Stock value={product.requireSauce}>
							<em>{product.requireSauce === true ? "Yes" : "No"} </em>
						</Stock>
					</Cat>
				</ProductDetails>
				<EditProduct>
					<InputGroup>
						<TextField
							label="Item Name"
							variant="filled"
							size="small"
							defaultValue={product.title}
							className={classes.root}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<TextField
							label="Item Description"
							defaultValue={product.desc}
							variant="filled"
							size="small"
							className={classes.root}
							onChange={(e) => setDesc(e.target.value)}
						/>
						<TextField
							label="Item Price"
							type="number"
							defaultValue={product.price}
							variant="filled"
							size="small"
							width="100%"
							className={classes.root}
							onChange={(e) => setPrice(e.target.value)}
						/>
						<TextField
							label="Item Category"
							defaultValue={product.category}
							variant="filled"
							size="small"
							className={classes.root}
							onChange={(e) => setCategory(e.target.value.split(","))}
						/>

						<div className={classes.root} style={{ marginTop: "10px", padding: 0 }}>
							<input
								accept="image/*"
								className={classes.input}
								type="file"
								id="contained-button-file"
								onChange={(e) => setFile(e.target.files[0])}
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
								<span className="radioText">In Stock</span>
								<RadioGroup
									aria-label="instock"
									name="instock"
									defaultValue={`${product.inStock}`}
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
								<span className="radioText">Require Sauce</span>
								<RadioGroup
									aria-label="reqSauce"
									name="reqSauce"
									defaultValue={`${product.requireSauce}`}
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
						<ActionBtn disabled={loading} onClick={handleUpdate}>
							{loading ? (
								<div className="spinner">
									<ClassicSpinner size={15} color="#06af00" />
								</div>
							) : (
								<CheckCircleOutlined className="icon" />
							)}
							<span className="text">Update</span>
						</ActionBtn>
						<ActionBtn status="delete" disabled={loading} onClick={handleDelete}>
							<DeleteOutlined className="icon" />
							<span className="text">Delete Product</span>
						</ActionBtn>
					</Update>
				</EditProduct>
			</Wrapper>
		</Container>
	);
};

export default Product;

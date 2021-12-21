import {
	Button,
	FormControl,
	FormControlLabel,
	makeStyles,
	Radio,
	RadioGroup,
	TextField,
} from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import { useState } from "react";
import {
	Container,
	Hr,
	Wrapper,
	RadioDiv,
	Update,
	InputGroup,
	SwitchGroup,
	PostBtn,
} from "./NewProduct.styles";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/apiRequests";
import { toast } from "react-toastify";
import { PulseSpinner } from "react-spinners-kit";

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

const NewProduct = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [requireSauce, setRequireSauce] = useState("false");
	const [inStock, setInStock] = useState("true");
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [desc, setDesc] = useState("");
	const [category, setCategory] = useState([]);
	const [file, setFile] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleInStock = (event) => {
		setInStock(event.target.value);
	};
	const handleReqSauce = (event) => {
		setRequireSauce(event.target.value);
	};

	const handleSubmit = () => {
		setLoading(true);
		const storageRef = ref(storage, "images/" + file.name);
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on(
			"state_changed",
			(snapshot) => {},
			(error) => {
				toast.error(`There was a problem, try again`, {
					position: toast.POSITION.BOTTOM_RIGHT,
					autoClose: 3000,
				});
				console.log(error);
				setLoading(false);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					createProduct(dispatch, {
						title,
						price,
						desc,
						inStock,
						requireSauce,
						category,
						img: downloadURL,
						imgName: file.name,
					});
					setTitle("");
					setPrice("");
					setDesc("");
					setInStock("");
					setRequireSauce("");
					setCategory("");
					setFile(null);

					toast.success(`${title} was added!`, {
						position: toast.POSITION.BOTTOM_RIGHT,
						autoClose: 3000,
					});
					setLoading(false);
				});
			}
		);
	};

	return (
		<Container>
			<Wrapper>
				<InputGroup>
					<TextField
						label="Item Name"
						id="filled-size-small"
						variant="filled"
						size="small"
						className="input"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<TextField
						label="Item Description"
						id="filled-size-small"
						variant="filled"
						size="small"
						className="input"
						onChange={(e) => setDesc(e.target.value)}
					/>
					<TextField
						label="Item Price"
						id="filled-size-small"
						type="number"
						defaultValue=""
						variant="filled"
						size="small"
						className="input"
						onChange={(e) => setPrice(e.target.value)}
					/>
					<TextField
						label="Item Categories"
						id="filled-size-small"
						defaultValue=""
						variant="filled"
						size="small"
						className="input"
						onChange={(e) => setCategory(e.target.value.split(","))}
					/>
					<div style={{ margin: "10px" }}>
						<input
							accept="image/*"
							className={classes.input}
							id="contained-button-file"
							type="file"
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<label htmlFor="contained-button-file">
							<Button variant="contained" color="default" component="span">
								Select Image
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
								defaultValue="true"
								onChange={handleInStock}
							>
								<FormControlLabel
									value="true"
									control={<Radio className="radio" />}
									label="Yes"
									color="default"
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
								defaultValue="false"
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
					<PostBtn onClick={handleSubmit}>
						{loading ? <PulseSpinner size={25} color="#00b600" /> : <CheckCircle />}
						SUBMIT
					</PostBtn>
				</Update>
			</Wrapper>
		</Container>
	);
};

export default NewProduct;

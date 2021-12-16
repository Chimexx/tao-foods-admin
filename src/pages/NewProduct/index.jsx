import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
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
	EditProduct,
	RadioDiv,
	Update,
	InputGroup,
	SwitchGroup,
	UpdateBtn,
} from "./NewProduct.styles";

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

	const [requireSauce, setRequireStock] = useState("false");
	const [inStock, setInStock] = useState("true");
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState([]);
	const [categories, setCategories] = useState([]);
	const [image, setImage] = useState();

	const handleInStock = (event) => {
		setInStock(event.target.value);
	};
	const handleReqSauce = (event) => {
		setRequireStock(event.target.value);
	};

	return (
		<Container>
			<EditProduct>
				<InputGroup>
					<TextField
						// className="input"
						label="Item Name"
						id="filled-size-small"
						variant="filled"
						size="small"
						className={classes.root}
					/>
					<TextField
						// className="input"
						label="Item Description"
						id="filled-size-small"
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
					<div style={{ margin: "10px" }}>
						<input
							accept="image/*"
							className={classes.input}
							id="contained-button-file"
							type="file"
						/>
						<label htmlFor="contained-button-file">
							<Button variant="contained" color="default" component="span">
								Upload Image
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
					<UpdateBtn>
						<CheckCircle className="check" /> SUBMIT
					</UpdateBtn>
				</Update>
			</EditProduct>
		</Container>
	);
};

export default NewProduct;

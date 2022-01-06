import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Title, Item, CreateBtn, Head, Button, ItemTitle } from "./Products.styles";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import { fetchProducts } from "../../redux/apiRequests";
import { getProducts } from "../../redux/productSlice";

const headCells = [
	{ id: "item", numeric: false, disablePadding: false, label: "Item" },
	{ id: "desc", numeric: false, disablePadding: false, label: "Description" },
	{ id: "price", numeric: false, disablePadding: false, label: "Price" },
	{ id: "inStock", numeric: false, disablePadding: false, label: "In Stock" },
	{ id: "cat", numeric: false, disablePadding: false, label: "Categories" },
	{ id: "action", numeric: false, disablePadding: false, label: "Action" },
];

function EnhancedTableHead(props) {
	const { classes, order, orderBy } = props;
	const createSortHandler = (property) => (event) => {};

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? "right" : "left"}
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</span>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	paper: {
		width: "100%",
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: "rect(0 0 0 0)",
		height: 1,
		margin: -1,
		overflow: "hidden",
		padding: 0,
		position: "absolute",
		top: 20,
		width: 1,
	},
}));

export default function EnhancedTable() {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(true); // hard coded this after disabling the toggle
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const dispatch = useDispatch();
	useEffect(() => {
		fetchProducts(dispatch);
	}, [dispatch]);

	const { productsList, error, isFetching } = useSelector(getProducts);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, productsList.length - page * rowsPerPage);

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
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Head>
					<Title>All Products</Title>
					<Link to="/newproduct">
						<CreateBtn>CREATE NEW</CreateBtn>
					</Link>
				</Head>
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size={dense ? "small" : "medium"}
						aria-label="enhanced table"
					>
						<EnhancedTableHead classes={classes} rowCount={productsList.length} />
						<TableBody>
							{[...productsList]
								.reverse()
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									return (
										<TableRow hover tabIndex={-1} key={row._id}>
											<TableCell align="left">
												<Item>
													<img src={row.img} alt="" />
													<ItemTitle>{row.title}</ItemTitle>
												</Item>
											</TableCell>
											<TableCell align="left">{row.desc.slice(0, 15)}...</TableCell>
											<TableCell align="left">₦{row.price}</TableCell>
											<TableCell align="left">{row.inStock ? "Yes" : "No"}</TableCell>
											<TableCell align="left">
												<Item>
													{row.category.map((cat, index) => {
														return <span key={index}>{cat}</span>;
													})}
												</Item>
											</TableCell>

											<TableCell align="left">
												<Link to={"/product/" + row._id}>
													<Button>Edit</Button>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={productsList.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
}

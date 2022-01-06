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
import { fetchOrders } from "../../redux/apiRequests";
import { getOrders } from "../../redux/orderSlice";
import { Link } from "react-router-dom";
import { Button, Span, Title, Container } from "./Orders.styles";
import dayjs from "dayjs";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

const headCells = [
	{ id: "firstName", numeric: false, disablePadding: false, label: "First Name" },
	{ id: "lastName", numeric: false, disablePadding: false, label: "Last Name" },
	{ id: "phoneNumber", numeric: false, disablePadding: false, label: "Phone" },
	{ id: "totalQty", numeric: false, disablePadding: false, label: "Quantity" },
	{ id: "amount", numeric: false, disablePadding: false, label: "Amount" },
	{ id: "createdAt", numeric: false, disablePadding: false, label: "Date" },
	{ id: "status", numeric: false, disablePadding: false, label: "Status" },
	{ id: "action", numeric: false, disablePadding: false, label: "Action" },
];

function EnhancedTableHead(props) {
	const { classes, order, orderBy, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

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
		fetchOrders(dispatch);
	}, [dispatch]);

	const { orderList, error, isFetching } = useSelector(getOrders);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, orderList.length - page * rowsPerPage);

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
				<Title>All Orders</Title>
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size={dense ? "small" : "medium"}
						aria-label="enhanced table"
					>
						<EnhancedTableHead rowCount={orderList.length} />
						<TableBody>
							{[...orderList]
								.reverse()
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									return (
										<TableRow hover tabIndex={-1} key={row._id}>
											<TableCell align="left">{row.shipping.firstName}</TableCell>
											<TableCell align="left">{row.shipping.lastName}</TableCell>
											<TableCell align="left">{row.shipping.phoneNumber}</TableCell>
											<TableCell align="left">{row.totalQty}</TableCell>
											<TableCell align="left">₦{row.amount}</TableCell>
											<TableCell align="left">
												{dayjs(row.createdAt).format("MMM-DD-YYYY")}
											</TableCell>
											<TableCell align="left">
												<Span value={row.status}>{row.status}</Span>
											</TableCell>
											<TableCell align="left">
												<Link to={"/order/" + row._id}>
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
					count={orderList.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
}

import {
	AddBox,
	DoneAll,
	HourglassEmpty,
	LineStyle,
	Storefront,
	AccountBalanceWallet,
	ListAlt,
	AccountCircle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Container, ListItem, Menu, Title, Wrapper, List, Subtitle, DashTitle } from "./Sidebar.styles";
import { getUser } from "../../redux/authSlice";
import { getToggle, menuToggle } from "../../redux/toggleSlice";

const Sidebar = () => {
	const dispatch = useDispatch();

	const handleToggle = () => {
		const width = window.innerWidth;
		width <= 768 && dispatch(menuToggle("false"));
	};

	const { currentUser } = useSelector(getUser);
	const { toggle } = useSelector(getToggle);
	return (
		<Container active={toggle}>
			<Wrapper id="wrapper">
				<Menu>
					<DashTitle>Dashboard</DashTitle>
					<List>
						<Link to="/">
							<ListItem className="btn" id="home" onClick={handleToggle}>
								<Storefront className="icon" />
								<Subtitle>Home</Subtitle>
							</ListItem>
						</Link>
					</List>
				</Menu>
				<Menu>
					<Title>Orders</Title>
					<List>
						<Link to="/orders">
							<ListItem className="btn" id="allOrders" onClick={handleToggle}>
								<LineStyle className="icon" />
								<Subtitle>All Orders</Subtitle>
							</ListItem>
						</Link>
						<Link to="/pending-orders">
							<ListItem id="pending" className="btn" onClick={handleToggle}>
								<HourglassEmpty className="icon" />
								<Subtitle>Pending</Subtitle>
							</ListItem>
						</Link>
						<Link to="/delivered-orders">
							<ListItem className="btn " onClick={handleToggle}>
								<DoneAll className="icon" />
								<Subtitle>Delivered</Subtitle>
							</ListItem>
						</Link>
					</List>
				</Menu>
				<Menu>
					<Title>Menu</Title>
					<List>
						<Link to="/products">
							<ListItem className="btn " onClick={handleToggle}>
								<ListAlt className="icon" />
								<Subtitle>Products</Subtitle>
							</ListItem>
						</Link>
						<Link to="/newproduct">
							<ListItem onClick={handleToggle}>
								<AddBox className="icon" />
								<Subtitle>Create New</Subtitle>
							</ListItem>
						</Link>
						<Link to="/transactions">
							<ListItem onClick={handleToggle}>
								<AccountBalanceWallet className="icon" />
								<Subtitle>Transactions</Subtitle>
							</ListItem>
						</Link>
						{(currentUser.role === "admin" || currentUser.role === "manager") && (
							<Link to="/accounts">
								<ListItem onClick={handleToggle}>
									<AccountCircle className="icon" />
									<Subtitle>Accounts</Subtitle>
								</ListItem>
							</Link>
						)}
					</List>
				</Menu>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;

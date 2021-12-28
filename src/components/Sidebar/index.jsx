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

import { Container, ListItem, Menu, Title, Wrapper, List, Subtitle, DashTitle } from "./Sidebar.styles";
import { getUser } from "../../redux/authSlice";

const Sidebar = () => {
	const { currentUser } = useSelector(getUser);

	return (
		<Container>
			<Wrapper>
				<Menu>
					<DashTitle>Dashboard</DashTitle>
					<List>
						<Link to="/">
							<ListItem>
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
							<ListItem id="allOrders">
								<LineStyle className="icon" />
								<Subtitle>All Orders</Subtitle>
							</ListItem>
						</Link>
						<Link to="/pending-orders">
							<ListItem className="item">
								<HourglassEmpty className="icon" />
								<Subtitle>Pending</Subtitle>
							</ListItem>
						</Link>
						<Link to="/delivered-orders">
							<ListItem className="item">
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
							<ListItem>
								<ListAlt className="icon" />
								<Subtitle>Products</Subtitle>
							</ListItem>
						</Link>
						<Link to="/newproduct">
							<ListItem>
								<AddBox className="icon" />
								<Subtitle>Create New</Subtitle>
							</ListItem>
						</Link>
						<Link to="/transactions">
							<ListItem>
								<AccountBalanceWallet className="icon" />
								<Subtitle>Transactions</Subtitle>
							</ListItem>
						</Link>
						{(currentUser.role === "admin" || currentUser.role === "manager") && (
							<Link to="/accounts">
								<ListItem>
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

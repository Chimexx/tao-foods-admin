import {
	AddBox,
	DoneAll,
	HourglassEmpty,
	LineStyle,
	People,
	Storefront,
	AccountBalanceWallet,
	ListAlt,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, ListItem, Menu, Title, Wrapper, List, Subtitle, DashTitle } from "./Sidebar.styles";

const Sidebar = () => {
	const [active, setActive] = useState(true);

	const handleActive = (id) => {
		const myDiv = document.getElementById(`${id}`);
		console.log(myDiv);

		myDiv.classList.add("active");
	};

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
							<ListItem id="allOrders" onClick={() => handleActive("allOrders")}>
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
						<Link to="/customers">
							<ListItem>
								<People className="icon" />
								<Subtitle>Customers</Subtitle>
							</ListItem>
						</Link>
						<Link to="/transactions">
							<ListItem>
								<AccountBalanceWallet className="icon" />
								<Subtitle>Transactions</Subtitle>
							</ListItem>
						</Link>
					</List>
				</Menu>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;

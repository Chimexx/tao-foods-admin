import React from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../../redux/orderSlice";
import { Container, List, ListItem, SubTitle, Name, Phone, Amount } from "./WidgetSm.styles";
const WidgetSm = () => {
	const { orderList } = useSelector(getOrders);
	const orders = [...orderList].reverse().slice(0, 5);

	return (
		<Container>
			<SubTitle>Latest Customers</SubTitle>
			<List>
				{orders.map((order) => {
					return (
						<ListItem key={order._id}>
							<Name>{order.shipping.firstName}</Name>
							<Phone>{order.shipping.phoneNumber}</Phone>
							<Amount>₦{order.amount}</Amount>
						</ListItem>
					);
				})}
			</List>
		</Container>
	);
};

export default WidgetSm;

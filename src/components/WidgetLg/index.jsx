import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../redux/orderSlice";
import { Container, Table, Tr, Th, Td, SubTitle, ActionButton } from "./WidgetLg.styles";
const WidgetLg = () => {
	const { orderList } = useSelector(getOrders);
	const orders = [...orderList]
		.reverse()
		.filter((order) => order.status === "delivered")
		.slice(0, 5);

	return (
		<Container>
			<SubTitle>Recent Deliveries</SubTitle>
			<Table>
				<thead>
					<Tr>
						<Th>Customer</Th>
						<Th>Date</Th>
						<Th className="tablehead">Amount</Th>
						<Th>Action</Th>
					</Tr>
				</thead>
				<tbody>
					{orders.map((order) => {
						return (
							<Tr key={order._id} className="tablerow">
								<Td className="name">{order.shipping.firstName}</Td>
								<Td id="date"> {dayjs(order.createdAt).format("MMM-DD-YYYY")}</Td>
								<Td>₦{order.amount}</Td>
								<Td>
									<Link to={"/order/" + order._id}>
										<ActionButton>view</ActionButton>
									</Link>
								</Td>
							</Tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
};

export default WidgetLg;

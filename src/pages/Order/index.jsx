import { MenuItem, TextField } from "@material-ui/core";
import { DeleteOutlined, CheckCircleOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { ClassicSpinner } from "react-spinners-kit";
import { deleteOrder, updateOrder } from "../../redux/apiRequests";
import { getOrders } from "../../redux/orderSlice";
// import { deleteOrder, updateOrder } from "../../redux/apiRequests";
// import { getOrders } from "../../redux/orderSlice";
import {
	Container,
	Details,
	Image,
	Id,
	Shipping,
	Edit,
	ActionButton,
	OrderItem,
	ShippingInfo,
	Value,
	Wrapper,
	OrderId,
	OrderDetails,
	OrderTotals,
	OrderInfo,
	OrderIdTitle,
	OrderStatus,
	Caption,
	OrderAmount,
	Title,
	Buttongrp,
} from "./Order.styles";

const Order = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();
	const [status, setStatus] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const id = location.pathname.split("/")[2];

	const { orders } = useSelector(getOrders);
	const order = orders.find((order) => order._id === id);

	if (!order) {
		return <Container>There was an error</Container>;
	}
	const handleStatus = () => {
		setLoading(true);
		updateOrder(id, { ...order, status }, dispatch);
		setLoading(false);
	};
	const handleDelete = () => {
		deleteOrder(id, dispatch);
		history.push("/orders");
		setLoading(false);
	};
	return (
		<Container>
			<Details>
				<OrderId>
					<div>
						<OrderIdTitle>Order Id</OrderIdTitle> {order?._id}
					</div>
				</OrderId>
				{order?.items.map((item) => {
					return (
						<OrderItem>
							<Image src={item.img} />
							<OrderInfo>
								<Wrapper>
									<Caption>Item</Caption>
									<Value>{item.title}</Value>
								</Wrapper>
								<Wrapper>
									<Caption>Plates</Caption>
									<Value>{item.quantity}</Value>
								</Wrapper>
								<Wrapper>
									<Caption>Meat</Caption>
									<Value>{item.meat}</Value>
								</Wrapper>
								<Wrapper>
									<Caption>Sauce</Caption>
									<Value>{item.sauce}</Value>
								</Wrapper>
							</OrderInfo>
						</OrderItem>
					);
				})}
				<OrderDetails>
					<Shipping>
						<Title>Shipping Details</Title>
						<div>
							<ShippingInfo>
								<Id>Name</Id>
								{order.shipping.firstName}
							</ShippingInfo>
							<ShippingInfo>
								<Id>Phone</Id>
								{order.shipping.phoneNumber}
							</ShippingInfo>
							<ShippingInfo>
								<Id>Email</Id>
								{order.shipping.email}
							</ShippingInfo>
							<ShippingInfo>
								<Id>Address</Id>
								{order.shipping.address}
							</ShippingInfo>
							<ShippingInfo>
								<Id>Instructions</Id>
								{order.instructions}
							</ShippingInfo>
						</div>
					</Shipping>
					<OrderTotals>
						<div>
							<Title>Order Summary</Title>
							<div className="totals">
								<OrderAmount>
									<Id>Order Amount</Id> ₦{order.amount}
								</OrderAmount>
								<OrderAmount>
									<Id>Order Quantity</Id> {order.totalQty} Plates
								</OrderAmount>
								<OrderAmount>
									<Id>Order Status</Id>
									<OrderStatus value={order?.status}>{order.status}</OrderStatus>
								</OrderAmount>
							</div>
						</div>
						<Edit>
							<TextField
								select
								className="select"
								label="Status"
								size="small"
								variant="filled"
								onChange={(e) => setStatus(e.target.value)}
								helperText="Change the status of this order"
							>
								<MenuItem value="delivered">Delivered</MenuItem>
								<MenuItem value="pending">Pending</MenuItem>
								<MenuItem value="declined">Declined</MenuItem>
							</TextField>
							<Buttongrp>
								<ActionButton disabled={loading} status="approve" onClick={handleStatus}>
									{loading ? (
										<div className="spinner">
											<ClassicSpinner size={15} color="#06af00" />
										</div>
									) : (
										<CheckCircleOutlined className="icon" />
									)}
									<span className="text">Confirm</span>
								</ActionButton>
								<ActionButton status="delete" onClick={handleDelete}>
									<DeleteOutlined className="icon" />
									<span className="text">Delete Order</span>
								</ActionButton>
							</Buttongrp>
						</Edit>
					</OrderTotals>
				</OrderDetails>
			</Details>
		</Container>
	);
};

export default Order;

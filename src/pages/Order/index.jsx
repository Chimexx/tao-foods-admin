import {
	DeleteOutlined,
	Restaurant,
	FormatListNumbered,
	Info,
	AccountCircle,
	PhoneAndroid,
	Drafts,
	Home,
	CheckCircleOutlined,
} from "@material-ui/icons";
import React from "react";
import {
	Container,
	Details,
	Icon,
	Image,
	Id,
	Shipping,
	Edit,
	ActionButton,
	OrderItem,
	ShippingInfo,
	Value,
	Span,
	OrderId,
	OrderDetails,
	OrderTotals,
	OrderQuantity,
	OrderAmount,
	Title,
} from "./Order.styles";

const Order = () => {
	return (
		<Container>
			<Details>
				<OrderId>
					<Id>Order Id</Id> 8484409404
				</OrderId>
				<OrderItem>
					<Image src="https://elleyajoku.com/wp-content/uploads/2017/10/jollof-rice-cooking.jpg" />
					<Span>
						<Value>
							<Restaurant className="menuIcon" /> Item
						</Value>
						Jollof rice
					</Span>
					<Span>
						<Value>
							<FormatListNumbered className="menuIcon" /> Plates
						</Value>
						2
					</Span>
					<Span>
						<Value>
							<Restaurant className="menuIcon" />
							Meat
						</Value>
						Chicken
					</Span>
					<Span>
						<Value>
							<Restaurant className="menuIcon" />
							Sauce
						</Value>
						None
					</Span>

					<Span>
						<Value>
							<Info className="menuIcon" /> Instructions
						</Value>
						Nothing
					</Span>
				</OrderItem>
				<OrderDetails>
					<Shipping>
						<Title>Shipping Details</Title>
						<ShippingInfo>
							<Icon>
								<AccountCircle />
							</Icon>
							Jon Snow
						</ShippingInfo>
						<ShippingInfo>
							<Icon>
								<PhoneAndroid />
							</Icon>
							08038494847
						</ShippingInfo>
						<ShippingInfo>
							<Icon>
								<Drafts />
							</Icon>
							Jon@gmail.com
						</ShippingInfo>
						<ShippingInfo>
							<Icon>
								<Home />
							</Icon>
							Access Bank Minna
						</ShippingInfo>
					</Shipping>
					<OrderTotals>
						<Title>Order Summary</Title>
						<div className="totals">
							<OrderAmount>
								<Id>Order Amount</Id> NGN 2000
							</OrderAmount>
							<OrderQuantity>
								<Id>Order Quantity</Id> 2 Plates
							</OrderQuantity>
						</div>
						<Edit>
							<ActionButton status="approve">
								<CheckCircleOutlined className="icon" />
								Approve this order!
							</ActionButton>
							<ActionButton status="delete">
								<DeleteOutlined className="icon" />
								Delete this order!
							</ActionButton>
						</Edit>
					</OrderTotals>
				</OrderDetails>
			</Details>
		</Container>
	);
};

export default Order;

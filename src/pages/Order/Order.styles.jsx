import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
	margin: 10px;
	font-weight: 500;
`;

export const Details = styled.div``;
export const Hr = styled.hr`
	color: #f3f3f3;
`;
export const Edit = styled.div`
	display: flex;
	margin-top: 50px;
	align-items: center;
	justify-content: space-between;

	.status {
		width: 200px;
		margin-right: 50px;
	}
`;
export const Customer = styled.span``;
export const OrderItem = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #f9f9f9;
	padding: 10px;
	color: #363636;
`;
export const ActionButton = styled.button`
	display: flex;
	height: 40px;
	padding: 3px 0px;
	padding-left: 4px;
	padding-right: 10px;
	border-radius: 20px;
	border: none;
	font-size: 14px;
	font-weight: 400;
	justify-content: flex-start;
	align-items: center;

	cursor: pointer;
	color: ${(props) => (props.status === "delete" ? "#fd2a2a" : "#06af00")};
	background-color: ${(props) => (props.status === "approve" ? "#e5ffe4" : "#ffe0e0")};

	.icon {
		background-color: #fff;
		padding: 4px;
		margin-right: 6px;
		border-radius: 50%;
	}
`;
export const Image = styled.img`
	width: 100px;
	border-radius: 5px;
`;
export const Shipping = styled.div`
	background-color: #f3f3f3;
	border-bottom-left-radius: 8px;
	margin-top: 2px;
	margin-bottom: 10px;
	padding: 10px 5px;
	display: flex;
	margin-right: 2px;
	flex-direction: column;
`;

export const OrderTotals = styled.div`
	background-color: #f3f3f3;
	border-bottom-right-radius: 8px;
	margin-top: 2px;
	margin-bottom: 10px;
	padding: 10px;
	display: flex;
	margin-left: 2px;
	flex-direction: column;

	.totals {
		display: flex;
		justify-content: space-between;
	}
`;
export const ShippingInfo = styled.div`
	margin: 5px;
	display: flex;
	align-items: center;
`;
export const Value = styled.span`
	display: flex;
	background-color: #fff6ec;
	border-radius: 20px;
	color: #ff8400;
	padding-right: 10px;
	margin-bottom: 10px;
	align-items: center;

	.menuIcon {
		background-color: #fff;
		padding: 4px;
		margin-right: 6px;
		border-radius: 50%;
	}
`;
export const Icon = styled.span`
	display: flex;
	background-color: #fff6ec;
	border-radius: 50%;
	color: #ff8400;
	height: 40px;
	width: 40px;
	margin-right: 10px;
	align-items: center;
	justify-content: center;
`;
export const Span = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const OrderId = styled.div`
	display: flex;
	align-items: center;
	background-color: #ff8400;
	color: #fff;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
	margin-bottom: 2px;
	padding: 5px;
`;
export const Id = styled.span`
	background-color: #fff6ec;
	border-radius: 10px;
	color: #ff8400;
	margin-right: 10px;
	padding: 3px 10px;
`;
export const OrderDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;
export const Title = styled.div`
	font-size: 20px;
	font-weight: 500;
	margin-left: 10px;
	margin-bottom: 20px;
`;
export const OrderAmount = styled.div``;
export const OrderQuantity = styled.div``;

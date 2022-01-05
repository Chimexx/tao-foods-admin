import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
	margin: 10px;
	font-weight: 500;
`;

export const Details = styled.div``;
export const Hr = styled.hr`
	padding: 0;
	margin: 0;
	color: #ffffff;
	opacity: 1;
`;
export const Edit = styled.div`
	display: flex;
	margin-top: 50px;
	align-items: flex-start;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		display: block;
		margin-top: 20px;
	}

	.select {
		@media screen and (max-width: 768px) {
			width: 100%;
			margin-bottom: 10px;
		}
	}
`;
export const Customer = styled.span``;
export const OrderItem = styled.div`
	display: flex;
	align-items: center;
	background-color: #e6e6e6;
	padding: 10px;
	margin-bottom: 2px;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
export const ActionButton = styled.button`
	display: flex;
	height: 40px;
	padding: 3px 0px;
	padding-left: 4px;
	padding-right: 10px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	border: none;
	font-size: 14px;
	font-weight: 600;
	justify-content: flex-start;
	align-items: center;
	margin-right: 10px;
	box-shadow: ${(props) => (props.disabled ? "none" : "0 1px 3px rgb(0 0 0 / 0.2)")};
	cursor: pointer;
	color: ${(props) => (props.status === "delete" ? "#fd2a2a" : "#06af00")};
	border-left: 3px solid ${(props) => (props.status === "delete" ? "#fd2a2a" : "#06af00")};
	background-color: ${(props) => (props.status === "approve" ? "#e5ffe4" : "#ffe0e0")};
	transition: all ease-in-out 0.3s;

	&:disabled {
		cursor: wait;
	}

	&:hover {
		box-shadow: none;
	}

	.icon {
		background-color: #fff;
		padding: 4px;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		margin-left: 4px;

		@media screen and (max-width: 768px) {
			padding: 2px;
		}
	}
	.spinner {
		padding: 4px;
		margin-left: 4px;

		@media screen and (max-width: 768px) {
			padding: 2px;
		}
	}
	.text {
		margin-left: 5px;
	}

	@media screen and (max-width: 768px) {
		height: 40px;
		padding: 2px 0px;
		padding-right: 10px;
		font-size: 12px;
		font-weight: 600;
		justify-content: space-between;
	}
`;
export const Buttongrp = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
	}
`;
export const Image = styled.img`
	width: 100px;
	height: 80px;
	object-fit: cover;
	border-radius: 5px;
	margin-right: 30px;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-right: 0;
	}
`;
export const Shipping = styled.div`
	background-color: #f3f3f3;
	border-bottom-left-radius: 8px;
	margin-top: 2px;
	padding: 10px;
	display: flex;
	margin-right: 2px;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		border-bottom-left-radius: 0;
		margin-right: 0;
	}
`;

export const OrderTotals = styled.div`
	background-color: #f3f3f3;
	border-bottom-right-radius: 8px;
	justify-content: space-between;
	margin-top: 2px;
	padding: 10px;
	display: flex;
	margin-left: 2px;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
		margin-left: 0;
	}

	.totals {
		margin-top: 20px;
		display: block;
		justify-content: space-between;
	}
`;
export const ShippingInfo = styled.div`
	margin: 5px;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`;
export const Value = styled.div`
	font-size: 14px;
	color: #727272;
	border-bottom-right-radius: 10px;
	min-width: 80px;
	height: 30px;
	max-height: 30px;
	padding: 3px 10px;
	background-color: #fff;
	text-justify: center;
	font-weight: 400;
	background-image: linear-gradient(to top, #fafafa, #ffffff);

	@media screen and (max-width: 768px) {
		min-width: 60px;
		max-height: 20px;
		height: 20px;
		padding: 2px 5px;
		font-size: 12px;
	}
`;
export const Caption = styled.div`
	border-top-right-radius: 10px;
	min-width: 80px;
	max-height: 30px;
	height: 30px;
	padding: 3px 10px;
	background-color: #fff;
	font-size: 18px;
	color: #ff8400;
	text-justify: center;
	font-weight: 400;
	background-image: linear-gradient(to bottom, #ffffff, #fafafa);

	@media screen and (max-width: 768px) {
		min-width: 60px;
		max-height: 20px;
		height: 20px;
		padding: 2px 5px;
		font-size: 14px;
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
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-left: 3px solid #ff8400;
	max-height: 60px;
	height: 60px;
	min-width: 80px;
	margin: 0 30px;
	box-shadow: 0 2px 4px rgb(0 0 0 / 0.3);
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;

	@media screen and (max-width: 768px) {
		border-left: 2px solid #ff8400;
		max-height: 40px;
		height: 40px;
		width: 125px;
		max-width: 140px;
		margin-bottom: 10px;
		margin: 0;
	}
`;
export const OrderId = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ff8400;
	color: #fcf9f9;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
	margin-bottom: 2px;
	padding: 5px;

	@media screen and (max-width: 768px) {
		font-size: 12px;
		font-weight: 300;
	}
`;
export const Id = styled.span`
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-left: 2px solid #ff8400;
	background-color: #fafafa;
	height: 25px;
	padding: 3px 10px;
	font-size: 16px;
	font-weight: 300;
	margin: 0 10px;

	@media screen and (max-width: 768px) {
		height: 20px;
		padding: 2px 5px;
		font-size: 14px;
		font-weight: 300;
		margin: 0 5px;
	}
`;
export const OrderIdTitle = styled.span`
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-left: 2px solid #ffffff;
	background-color: #ffbf5f;
	padding: 3px 10px;
	font-size: 18px;
	font-weight: 500;
	margin: 0 10px;

	@media screen and (max-width: 768px) {
		padding: 2px 7px;
		font-size: 14px;
		margin: 0 5px;
	}
`;
export const OrderDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
export const OrderInfo = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		justify-content: space-between;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 3px;
	}
`;
export const Title = styled.h6`
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-left: 3px solid #ff8400;
	background-color: #fafafa;
	padding: 3px 10px;
	font-size: 18px;
	font-weight: 500;
	margin: 0;
	margin-bottom: 10px;
	color: #474747;

	@media screen and (max-width: 768px) {
		padding: 2px 5px;
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 5px;
	}
`;
export const OrderAmount = styled.div`
	margin-bottom: 20px;
`;
export const OrderQuantity = styled.div``;
export const OrderStatus = styled.span`
	padding: 3px 10px;
	border-radius: 5px;
	color: ${(props) =>
		props.value === "delivered" ? "#06af00" : props.value === "pending" ? "#0246ff" : "#fd2a2a"};
	background-color: ${(props) =>
		props.value === "delivered" ? "#e5ffe4" : props.value === "pending" ? "#cbd9ff" : "#ffe0e0"};

	@media screen and (max-width: 768px) {
		padding: 2px 7px;
		font-size: 14px;
	}
`;

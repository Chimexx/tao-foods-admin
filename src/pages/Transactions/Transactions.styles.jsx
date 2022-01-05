import styled from "styled-components";

export const Container = styled.div`
	flex: 4;

	.formControl {
		width: 200px;
		border: none !important;
	}

	a {
		text-decoration: none;
	}
`;
export const Title = styled.div`
	padding: 10px;
	font-weight: 600;
	color: #fff;
	font-size: 24px;
	background-color: #ff8400;
`;
export const Payment = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const PaymentIcon = styled.span`
	color: #464646;
	margin-right: 5px;
	margin-top: 10px;
`;
export const PaymentType = styled.span``;

export const Span = styled.span`
	font-weight: 600;
	padding: 0;
	margin: 0px;
`;

export const Button = styled.button`
	padding: 1px 15px;
	cursor: pointer;
	border-radius: 10px;
	border: 1px solid #ff8400;
	height: 20px;
	font-weight: 400;
	color: #ff8400;
	font-size: 12px;
	background-color: #fff3e6;
	transition: all ease-in-out 0.3s;

	&:hover {
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
	}

	@media screen and (max-width: 768px) {
	}
`;

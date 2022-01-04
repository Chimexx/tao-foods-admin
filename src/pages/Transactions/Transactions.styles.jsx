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

import styled from "styled-components";
export const Container = styled.div`
	background-color: "#f3f3f3";
	flex: 2;
	box-shadow: 1px 1px 1px rgb(0 0 0 / 0.2);
	padding: 10px;
	margin: 8px;
	border-radius: 10px;
`;

export const Table = styled.table`
	width: 100%;
`;
export const Title = styled.h3`
	margin: 5px;

	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;
export const Tr = styled.tr`
	margin: 10px;
	margin-bottom: 10px;

	#date {
		font-size: 14px;
	}

	@media screen and (max-width: 768px) {
		#date {
			font-size: 10px;
		}
	}
`;
export const Th = styled.th`
	text-align: left;
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;
export const Td = styled.td`
	font-size: 16px;
	font-weight: 300;
	margin-bottom: 25px;
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}

	.name {
		font-weight: 600;
	}
`;
export const Button = styled.button`
	padding: 3px 7px;
	border: none;
	border-radius: 10px;
	color: ${(props) =>
		props.type === "delivered" ? "#3bb077" : props.type === "pending" ? "#2a7ade" : "#d95087"};
	background-color: ${(props) =>
		props.type === "delivered" ? "#e5faf2" : props.type === "pending" ? "#ebf1fe" : "#fff0f1"};

	@media screen and (max-width: 768px) {
		font-size: 10px;
	}
`;
export const ActionButton = styled.button`
	padding: 3px 10px;
	border: 1px solid #008ffb;
	border-radius: 10px;
	color: #008ffb;
	background-color: #ffffff;
	cursor: pointer;
	transition: all ease-in-out 0.3s;

	&:hover {
		border: 1px solid #008ffb;
		color: #414141;
		box-shadow: 0px 2px 2px rgb(0 0 0 / 0.2);
	}

	@media screen and (max-width: 768px) {
		font-size: 10px;
	}
`;

export const SubTitle = styled.div`
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-left: 3px solid #ff8400;
	background-color: #fafafa;
	height: 25px;
	padding: 3px 10px;
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 10px;

	@media screen and (max-width: 768px) {
		height: 20px;
		padding: 2px 5px;
		font-size: 14px;
		font-weight: 300;
		margin-bottom: 10px;
	}
`;

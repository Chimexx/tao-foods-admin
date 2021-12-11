import styled from "styled-components";
export const Container = styled.div`
	flex: 2;
	box-shadow: 1px 1px 4px rgb(0 0 0 / 0.2);
	padding: 10px;
	margin: 8px;
	border-radius: 10px;
`;

export const Table = styled.table`
	width: 100%;
`;
export const Title = styled.h3`
	margin: 5px;
`;
export const Tr = styled.tr`
	margin: 10px;
	margin-bottom: 10px;
`;
export const Th = styled.th`
	text-align: left;
`;
export const Td = styled.td`
	font-size: 16px;

	.name {
		font-weight: 600;
	}
`;
export const Button = styled.button`
	padding: 3px 7px;
	border: none;
	border-radius: 10px;
	color: ${(props) =>
		props.type === "approved" ? "#3bb077" : props.type === "pending" ? "#2a7ade" : "#d95087"};
	background-color: ${(props) =>
		props.type === "approved" ? "#e5faf2" : props.type === "pending" ? "#ebf1fe" : "#fff0f1"};
`;

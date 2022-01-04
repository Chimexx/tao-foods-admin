import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	box-shadow: 1px 1px 1px rgb(0 0 0 / 0.2);
	padding: 10px;
	margin: 8px;
	border-radius: 10px;
`;
export const List = styled.ul`
	margin-bottom: 3px;
	padding: 0;
	margin: 0;
`;
export const ListItem = styled.li`
	list-style: none;
	color: "#292929";
	display: flex;
	margin: 1px;
	padding: 3px 7px;
	justify-content: space-between;
	margin-bottom: 10px;
	font-weight: 300;
	transition: all ease-in-out 0.3s;

	&:hover {
		background-color: #f3f3f3;
		border-radius: 10px;
		color: #ff8400;
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const Name = styled.span`
	@media screen and (max-width: 768px) {
		font-size: 16px;
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
export const Phone = styled.span`
	font-size: 14px;
`;
export const Amount = styled.span``;

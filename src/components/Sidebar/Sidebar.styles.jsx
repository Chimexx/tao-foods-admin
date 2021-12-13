import styled from "styled-components";

export const Container = styled.div`
	flex: 1;
	position: sticky;
	top: 50;
	min-height: calc(100vh - 50px);
	background-color: #f3f3f3;

	@media screen and (max-width: 768px) {
		max-width: 60px;
	}
`;
export const ListItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	padding: 0;
	margin: 7px 0;
	padding-left: 10px;
	transition: ease-in-out all 0.2s;
	/* background-color: ${(props) => (props.active === "true" ? "#ffffff" : "transparent")}; */
	/* color: ${(props) => (props.active === "true" ? "#ff8400" : "#ffffff")}; */

	@media screen and (max-width: 768px) {
		justify-content: center;
		margin: 3px 0;
		padding-left: 0px;
	}

	.icon {
		font-size: 16;
		padding: 5px;
	}
	&:hover {
		background-color: #ffffff;
		color: #ff8400;
		border-radius: 20px;
	}
`;
export const Wrapper = styled.div`
	padding: 20px 40px;
	color: #555;

	@media screen and (max-width: 768px) {
		padding: 5px 5px;
	}
`;

export const List = styled.ul`
	padding-top: 0;
	padding-left: 0;

	a {
		color: #555;
		text-decoration: none;
	}
`;

export const Menu = styled.div`
	margin-bottom: 10px;
`;
export const Title = styled.h4`
	font-size: 20px;
	font-weight: 500;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		font-weight: 500;
		margin: 0;
		text-align: center;
	}
`;
export const DashTitle = styled.h4`
	font-size: 20px;
	font-weight: 600;
	margin: 0;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const Subtitle = styled.h6`
	margin: 0;
	margin-left: 15px;
	font-size: 16px;
	font-weight: 400;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const Typography = styled.div`
	margin-left: 10px;
	font-size: 12;
`;

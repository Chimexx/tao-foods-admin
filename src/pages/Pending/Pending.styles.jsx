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

	.status {
		color: #2a7ade;
	}
`;
export const Title = styled.div`
	padding: 10px;
	font-weight: 600;
	color: #fff;
	font-size: 24px;
	background-color: #ff8400;

	@media screen and (max-width: 768px) {
		padding: 5px;
		font-weight: 400;
		font-size: 18px;
	}
`;

export const Span = styled.span`
	padding: 2px 8px;
	border-radius: 10px;
	text-align: center;
	color: ${(props) =>
		props.value === "delivered" ? "#3bb077" : props.value === "pending" ? "#2a7ade" : "#ff2d2d"};
	background-color: ${(props) =>
		props.value === "delivered"
			? "#eefff7"
			: props.value === "pending"
			? "rgb(235, 244, 255)"
			: "#ffecec"};
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

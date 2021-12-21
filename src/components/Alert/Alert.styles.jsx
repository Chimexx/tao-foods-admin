import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	top: 50px;
	background-color: ${(props) => (props.type === "error" ? "#ff0000" : "#fff")};
	height: 60px;
	width: 80vw;
	padding: 10px, 20px;
	align-items: center;
	justify-content: center;
`;

export const Span = styled.h4`
	font-weight: 600;
	color: #fff;
	text-justify: center;
	text-align: center;
`;

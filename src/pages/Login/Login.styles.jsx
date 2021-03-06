import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 768px) {
		display: block;
		width: 100%;
		height: 100%;
	}
`;
export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 5px rgb(0 0 0 / 0.1);
	max-width: 70vw;

	@media screen and (max-width: 768px) {
		display: flex;
		margin: 20px;
		max-width: 100%;
		flex-direction: column;
	}
`;
export const Image = styled.img`
	object-fit: cover;
	width: 120%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const Content = styled.div`
	padding: 20px;
	background-color: #fff7dc;

	@media screen and (max-width: 768px) {
		padding: 0;
		margin: 0;
	}
`;
export const Form = styled.div`
	display: flex;
	flex-direction: column;
	.input {
		margin: 10px 0;
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		padding: 10px;
	}
`;
export const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	margin: 0;
	color: #ff8400;

	@media screen and (max-width: 768px) {
		padding: 10px;
	}
`;
export const Input = styled.input`
	display: flex;

	width: 100%;
	@media screen and (max-width: 768px) {
		margin: 0 10px;

		/* display: block;
		width: 100%;
		margin: 10px; */
	}
`;

export const Button = styled.button`
	margin-top: 20px;
	width: 30%;
	padding: 5px;
	border: 1px solid orangered;
	border-radius: 5px;
	background-color: orangered;
	color: white;
	transition: ease all 0.3s;
	cursor: pointer;

	&:disabled {
		background-color: #f7c7b5;
		color: #575757;
		cursor: not-allowed;
		border: 1px solid #f7c7b5;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	&:hover {
		color: orangered;
		background-color: white;
	}
`;

export const Footer = styled.div`
	@media screen and (max-width: 768px) {
		padding: 10px;
	}
`;

export const ForgotPassword = styled.p`
	margin-top: 5px;
	font-size: 14px;
`;
export const Link = styled.a`
	font-weight: 500;
	color: orangered;
	cursor: pointer;
`;

export const Error = styled.span`
	color: red;
	font-size: 10px;
	margin-top: 10px;
`;

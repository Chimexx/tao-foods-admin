import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
`;
export const Hr = styled.hr`
	opacity: 0.3;
`;
export const RadioDiv = styled.div`
	margin-right: 60px;
`;
export const UpdateBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3px 5px;
	height: 35px;
	border-radius: 6px;
	color: #00b600;
	background-color: #fff;
	border: 1px solid #00b600;
	font-weight: 600;
	cursor: pointer;
	transition: ease-in-out 0.3s;

	.check {
		margin-right: 5px;
	}

	&:hover {
		color: #fff;
		background-color: #00b600;
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
	}
`;

export const Update = styled.div`
	padding: 5px 5px;
	margin-bottom: 20px;
	margin-top: 20px;
	margin-left: 5px;

	@media screen and (max-width: 768px) {
		margin-bottom: 10px;
		margin-top: 10px;
	}
`;
export const SwitchGroup = styled.div`
	padding: 5px 5px;
	margin-bottom: 20px;
	margin-top: 20px;
	margin-left: 5px;

	@media screen and (max-width: 768px) {
		margin-bottom: 10px;
		margin-top: 10px;
	}

	.radio {
		color: #ff8400;
	}
	.radioText {
		font-weight: 600;
		color: #646464;

		@media screen and (max-width: 768px) {
			font-weight: 300;
			font-size: 14px;
		}
	}
	.formControl {
		display: flex;
		flex-direction: row;
	}
`;
export const InputGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	margin-bottom: 20px;

	@media screen and (max-width: 768px) {
		margin-bottom: 10px;
	}

	.input {
		padding: 10px 10px;
	}

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
export const EditProduct = styled.div`
	flex: 2;
	background-color: #ffffff;
	border-radius: 5px;
	margin: 3px;
	padding: 10px;
`;
export const Image = styled.img`
	width: 100%;
	object-fit: cover;
	height: 200px;
`;

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
	padding: 5px 15px;
	height: 35px;
	border-radius: 6px;
	color: #ff8400;
	background-color: #fff;
	border: 1px solid #ff8400;
	font-weight: 600;
	cursor: pointer;
	transition: ease-in-out 0.3s;

	&:hover {
		color: #fff;
		background-color: #ff8400;
		box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
	}
`;

export const Update = styled.div`
	padding: 5px 5px;
	margin-bottom: 20px;
	margin-top: 20px;
	margin-left: 5px;
`;
export const SwitchGroup = styled.div`
	padding: 5px 5px;
	margin-bottom: 20px;
	margin-top: 20px;
	margin-left: 5px;

	.radio {
		color: #ff8400;
	}
	.radioText {
		font-weight: 600;
		color: #646464;
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

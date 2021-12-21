import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
`;
export const Hr = styled.hr`
	opacity: 0.3;
`;
export const RadioDiv = styled.div`
	margin-right: 30px;
`;
export const PostBtn = styled.button`
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
	cursor: ${(props) => (props.disabled ? "none" : "pointer")};
	transition: ease-in-out 0.3s;

	.check {
		margin-right: 5px;
	}

	&:hover {
		color: #fff;
		background-color: ${(props) => (props.disabled ? "none" : "#00b600")};
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
	margin: 20px 0px;

	margin-left: 5px;

	@media screen and (max-width: 768px) {
		margin: 10px 0px;
	}

	.radio {
		&:hover {
			color: #141414;
		}
	}
	.radioText {
		font-weight: 600;
		font-size: 18px;
		color: #646464;
		margin: 0px;
		padding: 0px;

		@media screen and (max-width: 768px) {
			font-weight: 500;
			font-size: 16px;
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
		display: block;
		width: 100%;
	}

	.input {
		margin: 10px;

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
`;
export const Wrapper = styled.div`
	flex: 2;
	background-color: #ffffff;
	border-radius: 5px;
	margin: 1px;
`;

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
	height: 40px;
	padding: 3px 0px;
	padding-left: 4px;
	padding-right: 10px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	border: none;
	font-size: 14px;
	font-weight: 600;
	justify-content: flex-start;
	align-items: center;
	margin-right: 10px;
	box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
	cursor: pointer;
	color: #06af00;
	border-left: 3px solid #06af00;
	background-color: #e5ffe4;
	transition: all ease-in-out 0.3s;

	&:disabled {
		cursor: wait;
	}

	&:hover {
		box-shadow: none;
	}

	.icon {
		background-color: #fff;
		padding: 4px;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		margin-left: 4px;

		@media screen and (max-width: 768px) {
			padding: 2px;
		}
	}
	.spinner {
		padding: 4px;
		margin-left: 4px;

		@media screen and (max-width: 768px) {
			padding: 2px;
		}
	}
	.text {
		margin-left: 5px;
	}

	@media screen and (max-width: 768px) {
		height: 30px;
		padding: 2px 0px;
		padding-right: 5px;
		font-size: 12px;
		font-weight: 300;
		justify-content: space-between;
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
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		border-left: 3px solid #ff8400;
		background-color: #fafafa;
		padding: 3px 10px;
		font-size: 18px;
		font-weight: 500;
		margin: 0;
		margin-bottom: 10px;
		color: #474747;

		@media screen and (max-width: 768px) {
			padding: 2px 5px;
			font-size: 14px;
			font-weight: 300;
			margin-bottom: 5px;
		}
	}
	.formControl {
		display: flex;
		flex-direction: row;

		@media screen and (max-width: 768px) {
			justify-content: space-between;
		}
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

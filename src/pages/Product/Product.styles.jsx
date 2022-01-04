import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
`;
export const Wrapper = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const Head = styled.div`
	font-size: 22px;
	font-weight: 600;
	padding: 5px 10px;
	color: #fff;
	background-color: #ff8400;
`;
export const Item = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Details = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
`;
export const Label = styled.span`
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-left: 3px solid #ff8400;
	background-color: #fafafa;
	padding: 3px 10px;
	font-size: 18px;
	font-weight: 500;
	margin: 0;
	color: #474747;

	@media screen and (max-width: 768px) {
		padding: 2px 5px;
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 5px;
	}
`;
export const Cat = styled.span`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
`;
export const Description = styled.span`
	font-size: 14px;
	font-weight: 400;
	color: #646464;
`;
export const Stock = styled.span`
	font-size: 14px;
	font-weight: 400;
	padding: 3px 10px;
	border-radius: 5px;
	color: ${(props) => (props.value === true ? "#0be21d" : "#ff0101")};
	background-color: ${(props) => (props.value === true ? "#e0ffe3" : "#ffe6e6")};
`;

export const Price = styled.span`
	font-size: 18px;
	font-weight: 600;
	color: #ff8400;
`;
export const Text = styled.h6`
	margin: 0;
	color: #636363;
	margin-left: 10px;
	padding: 5px 5px;
	font-size: 14px;
	font-weight: 500;
`;
export const ProductDetails = styled.div`
	flex: 1;
	background-color: #f3f3f3;
	border-radius: 10px;
	margin: 3px;
`;
export const Update = styled.div`
	display: flex;
	padding: 5px 5px;
	margin-bottom: 20px;
	margin-top: 20px;
	margin-left: 5px;
	align-items: center;

	@media screen and (max-width: 768px) {
		justify-content: space-between;
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
		color: #818181;
		&:checked {
			color: #818181;
		}
		&:hover {
			color: #575757;
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

export const Hr = styled.hr`
	opacity: 0.3;
`;
export const RadioDiv = styled.div`
	margin-right: 60px;

	@media screen and (max-width: 768px) {
		margin-right: 0px;
	}
`;

export const ActionBtn = styled.button`
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
	margin-right: 20px;
	box-shadow: ${(props) => (props.disabled ? "none" : "0 1px 3px rgb(0 0 0 / 0.2)")};
	cursor: pointer;
	color: ${(props) => (props.status === "delete" ? "#fd2a2a" : "#06af00")};
	border-left: 3px solid ${(props) => (props.status === "delete" ? "#fd2a2a" : "#06af00")};
	background-color: ${(props) => (props.status === "delete" ? "#ffe0e0" : "#e5ffe4")};
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

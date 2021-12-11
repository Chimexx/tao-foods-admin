import styled from "styled-components";

export const Container = styled.div`
	flex: 4;
`;
export const Wrapper = styled.div`
	display: flex;
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
	font-size: 18px;
	font-weight: 600;
	color: #252525;
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
	color: ${(props) => (props.value === "true" ? "#0be21d" : "#ff0101")};
	background-color: ${(props) => (props.value === "true" ? "#e0ffe3" : "#ffe6e6")};
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
export const InputGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 100%;
	margin: 3px;

	.input {
		padding: 10px 10px;
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

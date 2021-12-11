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
`;
export const Title = styled.span`
	/* padding: 20px; */
	font-weight: 600;
	color: #fff;
	font-size: 24px;
`;
export const Head = styled.div`
	height: 30px;
	padding: 10px 20px;
	background-color: #ff8400;
	display: flex;
	justify-content: space-between;
`;
export const New = styled.button`
	border: none;
	padding: 5px 10px;
	border-radius: 10px;
	color: #ff8400;
	font-size: 16px;
	background-color: #ffffff;
	box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
	cursor: pointer;

	&:hover {
		box-shadow: none;
	}
`;
export const Item = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 70px;
		height: 70px;
		margin-right: 20px;
	}
	span {
		font-weight: 500;
	}
`;

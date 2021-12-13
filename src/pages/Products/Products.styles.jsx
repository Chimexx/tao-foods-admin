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

	@media screen and (max-width: 768px) {
		padding: 5px;
		font-weight: 400;
		font-size: 18px;
	}
`;
export const Head = styled.div`
	height: 30px;
	padding: 10px 20px;
	background-color: #ff8400;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		height: 30px;
		padding: 5px 10px;
	}
`;

export const CreateBtn = styled.button`
	padding: 5px 15px;
	height: 35px;
	border-radius: 6px;
	color: #fff;
	background-color: #ff8400;
	border: 1px solid #ffffff;
	box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
	font-weight: 600;
	cursor: pointer;
	transition: ease-in-out 0.3s;

	@media screen and (max-width: 768px) {
		height: 30px;
		padding: 2px 5px;
		border-radius: 4px;
		font-weight: 500;
	}

	&:hover {
		color: #fff;
		background-color: #ff8400;
		border: 1px solid #ffffff;
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

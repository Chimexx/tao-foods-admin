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

	.status {
		color: #3bb077;
	}
`;
export const Title = styled.div`
	padding: 10px;
	font-weight: 600;
	color: #fff;
	font-size: 24px;
	background-color: #ff8400;

	@media screen and (max-width: 768px) {
		padding: 5px;
		font-weight: 400;
		font-size: 18px;
	}
`;

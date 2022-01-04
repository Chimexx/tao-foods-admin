import styled from "styled-components";

export const Container = styled.div`
	flex: 4;

	a {
		text-decoration: none;
	}
`;
export const Wrapper = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const UserList = styled.div`
	flex: 1;
	display: block;
	border-radius: 10px;
	margin: 5px;
	padding: 10px;
	background-color: #f3f3f3;

	@media screen and (max-width: 768px) {
	}
`;
export const UserEdit = styled.div`
	flex: 1;
	display: block;
	border-radius: 10px;
	margin: 5px;
	padding: 10px;
	background-color: #f3f3f3;
`;
export const UserContainer = styled.div`
	display: block;

	@media screen and (max-width: 768px) {
		margin-top: 10px;
	}
`;
export const EditContainer = styled.div`
	display: grid;

	.input {
		margin: 5px;
		width: 100%;

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}
	@media screen and (max-width: 768px) {
		margin-top: 10px;
	}
`;
export const User = styled.div`
	background-color: #ffffff;
	border-radius: 10px;
	display: block;
	padding: 10px;
	margin: 5px;

	@media screen and (max-width: 768px) {
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
export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-weight: 400;
	margin-bottom: 20px;
	margin-left: 20px;

	@media screen and (max-width: 768px) {
	}
`;
export const Button = styled.button`
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	font-weight: 300;
	color: #2d88ff;
	cursor: pointer;

	@media screen and (max-width: 768px) {
	}
`;

export const SubTitle = styled.div`
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-left: 3px solid #ff8400;
	background-color: #fafafa;
	height: 25px;
	padding: 3px 10px;
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 10px;

	@media screen and (max-width: 768px) {
		height: 20px;
		padding: 2px 5px;
		font-size: 14px;
		font-weight: 300;
		margin: 0 5px;
	}
`;
export const Caption = styled.span`
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	border-left: 2px solid #ff8400;
	background-color: #fafafa;
	height: 25px;
	padding: 3px 10px;
	font-size: 16px;
	font-weight: 300;
	margin-right: 10px;

	@media screen and (max-width: 768px) {
		height: 20px;
		padding: 2px 5px;
		font-size: 14px;
		font-weight: 300;
		margin: 0 5px;
	}
`;

export const BtnContainer = styled.div`
	display: flex;
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
	margin: 10px 5px;
	margin-right: 20px;
	box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
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
		height: 40px;
		padding: 2px 5px;
		padding-right: 5px;
		font-size: 12px;
		font-weight: 600;
		justify-content: space-between;
	}
`;

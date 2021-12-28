import React from "react";
import {
	Container,
	Title,
	UserList,
	Caption,
	Top,
	Wrapper,
	UserEdit,
	SubTitle,
	UserContainer,
	EditContainer,
	PostBtn,
	BtnContainer,
} from "./EditAccount.styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../../redux/apiRequests";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { CheckCircle, Delete } from "@material-ui/icons";
import { ClassicSpinner } from "react-spinners-kit";
import { useLocation } from "react-router-dom";
import { getUsers } from "../../redux/userSlice";

const EditAccount = () => {
	const location = useLocation();
	const history = useHistory();
	const id = location.pathname.split("/")[2];

	const { usersList, isFetching } = useSelector(getUsers);
	const user = usersList.find((user) => user._id === id);

	const dispatch = useDispatch();
	const [username, setUsername] = React.useState(user.username);
	const [email, setEmail] = React.useState(user.email);
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [role, setRole] = React.useState(user.role);

	console.log(password, confirmPassword);

	const handleRole = (e) => {
		e.target.value === "manager" && setRole("manager");
		e.target.value === "admin" && setRole("admin");
		e.target.value === "staff" && setRole("staff");
	};

	const handleSubmit = (e) => {
		if (password === confirmPassword) {
			updateUser(
				id,
				{
					username,
					email,
					password,
					role,
				},
				dispatch
			);
		} else {
			console.log("passwords do not match");
		}
	};

	const handleDelete = () => {
		deleteUser(dispatch, id);
		history.push("/accounts");
	};

	return (
		<Container>
			<Title>Edit User Account</Title>
			<Wrapper>
				<UserList>
					<SubTitle>Users Details</SubTitle>
					<UserContainer>
						<Top>
							<Caption>User</Caption>
							{user.username}
						</Top>
						<Top>
							<Caption>Email</Caption>
							{user.email}
						</Top>

						<Top>
							<Caption>Role</Caption>
							{user.role}
						</Top>
					</UserContainer>
				</UserList>
				<UserEdit>
					<SubTitle>Edit this user account</SubTitle>
					<EditContainer>
						<form autoComplete="off">
							<TextField
								required
								id="username"
								size="small"
								className="input"
								label="Username"
								variant="filled"
								autoComplete="off"
								defaultValue={user.username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<TextField
								required
								id="email"
								size="small"
								type="email"
								className="input"
								label="Email"
								variant="filled"
								autoComplete="off"
								defaultValue={user.email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								required
								id="password"
								size="small"
								type="password"
								className="input"
								label="Password"
								variant="filled"
								autoComplete="off"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<TextField
								required
								id="cPassword"
								size="small"
								type="password"
								className="input"
								autoComplete="off"
								label="Confirm Password"
								variant="filled"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>

							<FormControl className="input">
								<InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
								<Select
									labelId="demo-simple-select-helper-label"
									value={role}
									onChange={handleRole}
								>
									<MenuItem value="staff">Staff</MenuItem>
									<MenuItem value="manager">Manager</MenuItem>
								</Select>
								<FormHelperText>Leave this blank for standard staff roles</FormHelperText>
							</FormControl>
						</form>
					</EditContainer>
					<BtnContainer>
						<PostBtn onClick={handleSubmit}>
							{isFetching ? (
								<div className="spinner">
									<ClassicSpinner size={15} color="#00b600" />
								</div>
							) : (
								<CheckCircle />
							)}
							Update User
						</PostBtn>
						<PostBtn status="delete" onClick={handleDelete}>
							<Delete />
							Delete User
						</PostBtn>
					</BtnContainer>
				</UserEdit>
			</Wrapper>
		</Container>
	);
};

export default EditAccount;

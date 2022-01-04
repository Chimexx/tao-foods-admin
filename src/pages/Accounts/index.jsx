import React, { useEffect } from "react";
import {
	Container,
	Title,
	UserList,
	User,
	Caption,
	Top,
	Button,
	Wrapper,
	UserEdit,
	SubTitle,
	UsersContainer,
	EditContainer,
	PostBtn,
} from "./Accounts.styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, fetchUsers } from "../../redux/apiRequests";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";
import { ClassicSpinner } from "react-spinners-kit";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import { getUsers } from "../../redux/userSlice";

const Accounts = () => {
	const dispatch = useDispatch();
	const [inputE, setInputE] = React.useState(false);
	const [passMissmatch, setPassMissmatch] = React.useState(false);
	const [username, setUsername] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [role, setRole] = React.useState("staff");

	useEffect(() => {
		fetchUsers(dispatch);
	}, [dispatch]);

	const { usersList, isFetching, error } = useSelector(getUsers);

	const handleRole = (e) => {
		e.target.value === "manager" && setRole("manager");
		e.target.value === "admin" && setRole("admin");
		e.target.value === "staff" && setRole("staff");
	};
	const handleSubmit = () => {
		if (username && role && password && confirmPassword) {
			setInputE(false);

			if (password === confirmPassword) {
				setPassMissmatch(false);
				createUser(dispatch, {
					username,
					email,
					password,
					role,
				});
				setUsername("");
				setEmail("");
				setPassword("");
				setRole("");
				setConfirmPassword("");
			} else {
				setPassMissmatch(true);
			}
		} else {
			setInputE(true);
		}
	};

	if (isFetching) {
		return (
			<Container>
				<Loading />
			</Container>
		);
	}
	if (error) {
		return (
			<Container>
				<Alert type="error" text="There was a problem, Try Again" />
			</Container>
		);
	}

	if (usersList?.length < 1) {
		return (
			<Container>
				<Alert type="error" text="There was a problem, Try Again" />
			</Container>
		);
	}
	return (
		<Container>
			<Title>Accounts</Title>
			<Wrapper>
				<UserList>
					<SubTitle>Users List</SubTitle>
					<UsersContainer>
						{usersList?.map((user) => (
							<User key={user._id}>
								<Top>
									<Caption>User</Caption>
									{user.username}
								</Top>
								<Top>
									<Caption>Role</Caption>
									{user.role}
								</Top>
								<Link to={`/edit-account/${user._id}`}>
									<Button>Edit</Button>
								</Link>
							</User>
						))}
					</UsersContainer>
				</UserList>
				<UserEdit>
					<SubTitle>Add new user</SubTitle>
					<EditContainer>
						<TextField
							required
							error={inputE}
							size="small"
							className="input"
							label="Username"
							variant="filled"
							value={username}
							helperText={inputE && "Field required"}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<TextField
							size="small"
							type="email"
							className="input"
							label="Email"
							variant="filled"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							required
							size="small"
							error={inputE}
							type="password"
							className="input"
							label="Password"
							variant="filled"
							value={password}
							helperText={inputE && "Field required"}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<TextField
							required
							size="small"
							error={passMissmatch}
							type="password"
							className="input"
							label="Confirm Password"
							variant="filled"
							value={confirmPassword}
							helperText={passMissmatch && "Passwords do not match"}
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
								{/* <MenuItem value="admin">Admin</MenuItem> */}
							</Select>
							<FormHelperText>Leave this blank for standard staff roles</FormHelperText>
						</FormControl>
					</EditContainer>
					<PostBtn onClick={handleSubmit}>
						{isFetching ? (
							<div className="spinner">
								<ClassicSpinner size={15} color="#00b600" />
							</div>
						) : (
							<CheckCircle />
						)}
						SAVE
					</PostBtn>
				</UserEdit>
			</Wrapper>
		</Container>
	);
};

export default Accounts;

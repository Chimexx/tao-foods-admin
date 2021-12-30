import { Divider, TextField } from "@material-ui/core/";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiRequests";
import bg from "../../images/login.jpg";
import { getUsers } from "../../redux/userSlice";

//styles
import {
	Container,
	Wrapper,
	Title,
	Form,
	Button,
	ForgotPassword,
	Link,
	Footer,
	Error,
	Image,
	Content,
} from "./Login.styles";
import { getUser } from "../../redux/authSlice";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { isFetching, error } = useSelector(getUser);

	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		login(dispatch, { username, password });
	};

	return (
		<Container>
			<Wrapper>
				<Image src={bg} />
				<Content>
					<Title>SIGN IN</Title>
					<Form>
						<TextField
							id="username"
							label="Username"
							variant="filled"
							size="small"
							className="input"
							onChange={(e) => setUsername(e.target.value)}
						/>
						<TextField
							id="password"
							label="Password"
							variant="filled"
							type="password"
							size="small"
							className="input"
							onChange={(e) => setPassword(e.target.value)}
						/>

						<Button disabled={isFetching} onClick={handleLogin}>
							SIGN IN
						</Button>
						{error && <Error>There was a problem, check your login details and try again</Error>}
					</Form>
					<Footer>
						<Divider style={{ marginTop: 20 }} />
						<ForgotPassword>
							Forgot your password? <Link>Reset</Link>
						</ForgotPassword>
					</Footer>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default Login;

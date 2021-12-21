import React from "react";
import { Container, Span } from "./Alert.styles";

const Alert = ({ type, text }) => {
	return (
		<Container type={type}>
			<Span>{text}</Span>
		</Container>
	);
};

export default Alert;

import React from "react";
import { Container, Img } from "./NotFound.styles";
import NotFoundImage from "../../images/notfound.svg";

const NotFound = () => {
	return (
		<Container>
			<Img src={NotFoundImage} alt="" />
		</Container>
	);
};

export default NotFound;

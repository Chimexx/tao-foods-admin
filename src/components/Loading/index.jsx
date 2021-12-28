import React from "react";
import { MetroSpinner } from "react-spinners-kit";
import { Spinner } from "./Loading.styles";

const Loading = () => {
	return (
		<Spinner>
			<MetroSpinner />
		</Spinner>
	);
};

export default Loading;

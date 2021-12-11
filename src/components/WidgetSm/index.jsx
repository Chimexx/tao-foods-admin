import React from "react";
import { Container, List, ListItem, Title, Name, Phone, Amount } from "./WidgetSm.styles";
const WidgetSm = () => {
	return (
		<Container>
			<Title>Latest Customers</Title>
			<List>
				<ListItem>
					<Name>Name</Name>
					<Phone>0944849494</Phone>
					<Amount>2,000</Amount>
				</ListItem>
				<ListItem>
					<Name>Name</Name>
					<Phone>0944849494</Phone>
					<Amount>2,000</Amount>
				</ListItem>
				<ListItem>
					<Name>Name</Name>
					<Phone>0944849494</Phone>
					<Amount>2,000</Amount>
				</ListItem>
				<ListItem>
					<Name>Name</Name>
					<Phone>0944849494</Phone>
					<Amount>2,000</Amount>
				</ListItem>
				<ListItem>
					<Name>Name</Name>
					<Phone>0944849494</Phone>
					<Amount>2,000</Amount>
				</ListItem>
			</List>
		</Container>
	);
};

export default WidgetSm;

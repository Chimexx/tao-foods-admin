import { Container, Title, Table, Tr, Th, Td, Button } from "./WidgetLg.styles";
const WidgetLg = () => {
	return (
		<Container>
			<Title>Latest Sales</Title>
			<Table>
				<Tr>
					<Th>Customer</Th>
					<Th>Date</Th>
					<Th className="tablehead">Amount</Th>
					<Th>Status</Th>
				</Tr>
				<Tr className="tablerow">
					<Td className="name">Mike</Td>
					<Td>20 Nov 2021</Td>
					<Td>NGN 6,500</Td>
					<Td>
						<Button type="pending">Pending</Button>
					</Td>
				</Tr>
				<Tr className="tablerow">
					<Td>Mike</Td>
					<Td>20 Nov 2021</Td>
					<Td>NGN 6,500</Td>
					<Td>
						<Button type="approved">Approved</Button>
					</Td>
				</Tr>
				<Tr className="tablerow">
					<Td>Mike</Td>
					<Td>20 Nov 2021</Td>
					<Td>NGN 6,500</Td>
					<Td>
						<Button type="rejected">Rejected</Button>
					</Td>
				</Tr>
				<Tr className="tablerow">
					<Td>Mike</Td>
					<Td>20 Nov 2021</Td>
					<Td>NGN 6,500</Td>
					<Td>
						<Button type="approved">Approved</Button>
					</Td>
				</Tr>
				<Tr className="tablerow">
					<Td>Mike</Td>
					<Td>20 Nov 2021</Td>
					<Td>NGN 6,500</Td>
					<Td>
						<Button type="rejected">Rejected</Button>
					</Td>
				</Tr>
			</Table>
		</Container>
	);
};

export default WidgetLg;

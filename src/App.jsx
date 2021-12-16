import "./App.css";
import Orders from "./pages/Orders";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
	const { currentUser } = useSelector((state) => state.user);
	console.log(currentUser);
	return (
		<>
			<Router>
				{!currentUser?.username ? (
					<Login />
				) : (
					<div className="app">
						<Topbar />
						<Sidebar />
						<>
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/orders" component={Orders} />
								<Route path="/order/:id" component={Order} />
								<Route path="/products" component={Products} />
								<Route path="/product/:id" component={Product} />
								<Route path="/product/new" component={NewProduct} />
								<Route path="/customers" component={Customers} />
								{/* <Route path="/login" element={<Login />} /> */}
							</Switch>
						</>
					</div>
				)}
			</Router>
		</>
	);
}

export default App;

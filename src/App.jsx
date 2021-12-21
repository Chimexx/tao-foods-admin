import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
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
import NotFound from "./pages/NotFound";
import Pending from "./pages/Pending";
import Delivered from "./pages/Pending copy";

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
						<ToastContainer transition={Slide} />
						<Topbar />
						<Sidebar />
						<>
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/orders" exact component={Orders} />
								<Route path="/pending-orders" exact component={Pending} />
								<Route path="/delivered-orders" exact component={Delivered} />
								<Route path="/order/:id" exact component={Order} />
								<Route path="/products" exact component={Products} />
								<Route path="/product/:id" exact component={Product} />
								<Route path="/product/*" exact component={NotFound} />
								<Route path="/newproduct/" exact component={NewProduct} />
								<Route path="/customers" exact component={Customers} />
								<Route path="*" component={NotFound} />
							</Switch>
						</>
					</div>
				)}
			</Router>
		</>
	);
}

export default App;

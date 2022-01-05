import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./pages/Orders/index";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Order from "./pages/Order";
import Products from "./pages/Products/index";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound";
import Pending from "./pages/Pending/index";
import Delivered from "./pages/Delivered/index";
import Accounts from "./pages/Accounts";
import EditAccount from "./pages/UserEdit";
import Transactions from "./pages/Transactions/index";
import { getUser } from "./redux/authSlice";
import Snackbar from "./components/SnackBar/snackbar";

function App() {
	const { currentUser } = useSelector(getUser);
	return (
		<>
			<Snackbar />
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
								<Route path="/orders" exact component={Orders} />
								<Route path="/pending-orders" exact component={Pending} />
								<Route path="/delivered-orders" exact component={Delivered} />
								<Route path="/order/:id" exact component={Order} />
								<Route path="/products" exact component={Products} />
								<Route path="/product/:id" exact component={Product} />
								<Route path="/accounts" exact component={Accounts} />
								<Route path="/edit-account/:id" exact component={EditAccount} />
								<Route path="/product/*" exact component={NotFound} />
								<Route path="/newproduct/" exact component={NewProduct} />
								<Route path="/transactions" exact component={Transactions} />
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

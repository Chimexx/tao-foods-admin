import "./App.css";
import Orders from "./pages/Orders";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
function App() {
	return (
		<Router>
			<Topbar />
			<div className="app">
				<Sidebar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/order/:id" element={<Order />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/new" element={<NewProduct />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

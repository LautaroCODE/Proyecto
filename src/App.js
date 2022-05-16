import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";

function App() {
	return (
		<div className="App">
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={<ItemListContainer greeting="productos" />} />
						<Route path="/category/:categoryId" element={<ItemListContainer />} />
						<Route path="/detail/:productId" element={<ItemDetailContainer />} />
						<Route path="*" element={<h1>NOT FOUND 404</h1>} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/form" element={<Form />} />
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;

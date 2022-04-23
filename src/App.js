import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import { useState, createContext } from "react";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
// import ItemCount from "./components/ItemCount/ItemCount";
// import MLListContainer from "./components/MLListContainer/MLListContainer";

// export const Context = createContext();

function App() {
	// const handlerOnAdd = (count) => {
	// 	if (count !== 0) {
	// 		console.log(`Agregaste ${count} productos`);
	// 	}
	// };
	// const [cart, setCart] = useState([]);
	// console.log(cart);
	return (
		<div className="App">
			{/* <Context.Provider value={{ cart, setCart }}> */}
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />
					{/* <div>
					<Link to="/list">List</Link>
					<Link to="/detail">Detalle</Link>
				</div> */}
					<Routes>
						{/* <Route path="/" element={<ItemListContainer greeting="List" />} />
					<Route path="/list" element={<ItemListContainer greeting="List" />} />
					<Route path="/detail" element={<ItemDetailContainer />} /> */}
						{/* LA RUTA QUE NO COINCIDA CON LAS QUE ESTAN ACA! CAEN ACA */}
						{/* <Route path="*" element={<h1>NOT FOUND 404</h1>} /> */}
						<Route path="/" element={<ItemListContainer greeting="productos" />} />
						{/*RUTA DINAMICA - CON : IDENTIFICO QUE VA A SER UNA RUTA DINAMICA E INDICO A CONTINUACION EL NOMBRE QUE LE QUIERO PONER AL VALOR QUE VA A CONTENER ESA PARTE DE LA URL*/}
						{/* AHORA ESTA PARTE DE LA URL :productId SE GUARDA EN UN OBJETO QUE SE VA A LLAMAR productId ES UN OBJETO DE PARAMETRO */}
						<Route path="/category/:categoryId" element={<ItemListContainer />} />
						<Route path="/detail/:productId" element={<ItemDetailContainer />} />
						<Route path="*" element={<h1>NOT FOUND 404</h1>} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
			{/* </Context.Provider> */}
		</div>
	);
}

export default App;

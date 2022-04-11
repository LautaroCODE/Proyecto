import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemCount from "./components/ItemCount/ItemCount";
// import MLListContainer from "./components/MLListContainer/MLListContainer";

function App() {
	// const handlerOnAdd = (count) => {
	// 	if (count !== 0) {
	// 		console.log(`Agregaste ${count} productos`);
	// 	}
	// };

	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				{/* <ItemListContainer greeting="Bienvenidos" /> */}
				{/* <ItemCount stock={10} initial={0} onAdd={handlerOnAdd} /> */}
				{/* <MLListContainer /> */}
				<ItemDetailContainer />
			</header>
		</div>
	);
}

export default App;

import "./App.css";
import Counter from "./components/Counter/Counter";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import ClassCounter from "./components/ClassCounter/ClassCounter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
	const myFunction = () => {
		console.log("Hice click en el button");
	};

	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				<ItemListContainer greeting="Bienvenidos" />
				<img src={"./img/logo192.png"} className="App-logo" alt="logo" />
				<p style={{ color: "skyblue" }}>Comision 31145</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<Counter />
				<ClassCounter />
				<Button callback={myFunction} label="Mi boton" />
			</header>
		</div>
	);
}

export default App;

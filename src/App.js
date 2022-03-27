import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				<img src={"./img/logo192.png"} className="App-logo" alt="logo" />
				<p style={{ color: "skyblue" }}>Comision 31145</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

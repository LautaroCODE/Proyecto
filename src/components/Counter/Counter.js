import { useState, useEffect } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("Se acaba de montar el componente");
		setTimeout(() => {
			setCount(0);
		}, 3000);
	}, []);

	useEffect(() => {
		console.log("cambio el count");
	}, [count]);

	const decrement = () => {
		setCount(count - 1);
	};

	const increment = () => {
		setCount(count + 1);
	};

	console.log("Esto esta en el cuerpo del componente");

	return (
		<div>
			<button onClick={decrement}>-</button>
			<p>{count}</p>
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Counter;
//COMPONENTE BASADO EN FUNCION QUE NO FUNCIONA

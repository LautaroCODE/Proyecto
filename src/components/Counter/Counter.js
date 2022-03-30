const Counter = () => {
	let count = 0;

	const decrement = () => {
		console.log("decrement");
		count = count - 1;
	};

	const increment = () => {
		console.log("increment");
		count = count + 1;
	};

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

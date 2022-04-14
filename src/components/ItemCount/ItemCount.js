import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, detalle }) => {
	let [count, setCount] = useState(initial);

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	return (
		<>
			<div className="main-count">
				<button className="main-count__btn" onClick={decrement}>
					&ndash;
				</button>
				<span className="main-count__text">{count}0</span>
				<button className="main-count__btn" onClick={increment}>
					+
				</button>
			</div>
			<div>
				<button className="main-count__btnSubmit">agregar al carrito</button>
			</div>
		</>
	);
};

export default ItemCount;

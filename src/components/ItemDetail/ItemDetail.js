import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ img, price, name, stock }) => {
	const [quantity, setQuantity] = useState(0);

	const handleAdd = (count) => {
		if (count !== 0) {
			setQuantity(count);
			console.log(`Agregaste ${count} elementos al carrito`);
		}
	};
	return (
		<>
			<div className="main-card-detalle">
				<h3 className="main-card-detalle__titulo">{name}</h3>
				<img className="main-card-detalle__img" src={img} alt={name} />
				<p>Precio: $ {price}</p>
				<p> Cantidad: {stock}</p>
				{quantity > 0 ? (
					<button className="main-card__btnCard">
						<Link className="main-btn__link" to="/cart">
							terminar mi compra
						</Link>
					</button>
				) : (
					<ItemCount onAdd={handleAdd} stock={stock} initial={0} />
				)}
			</div>
		</>
	);
};

export default ItemDetail;

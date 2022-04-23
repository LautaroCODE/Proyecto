import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ id, img, price, name, stock }) => {
	const { addItem, isInCart } = useContext(CartContext);
	// console.log(value);

	const handleAdd = (count) => {
		if (count !== 0) {
			console.log(`Agregaste ${count} elementos al carrito`);
			const objProd = {
				id,
				name,
				price,
			};

			addItem({ ...objProd, quantity: count });
			// setCart([cart.concat(objProd)]); OTRA FORMA DE HACERLO
		}
	};
	return (
		<>
			<div className="main-card-detalle">
				<h3 className="main-card-detalle__titulo">{name}</h3>
				<img className="main-card-detalle__img" src={img} alt={name} />
				<p>Precio: $ {price}</p>
				<p> Cantidad: {stock}</p>
				{isInCart(id) ? (
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

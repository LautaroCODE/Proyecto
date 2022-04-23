import "./ItemCard.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({ id, name, quantity, price, img }) => {
	const { removeItem } = useContext(CartContext);

	return (
		<div className="mainItemCard">
			<div className="mainItemCard__container">
				<h2 className="mainItemCard__title">{name}</h2>
				<section className="mainItemCard__section">
					<p className="mainItemCard__parrafo">Cantidad: {quantity}</p>
					<p className="mainItemCard__parrafo">Precio x Unidad: {price}</p>
					<p className="mainItemCard__parrafo">Subtotal: {price * quantity}</p>
				</section>
			</div>

			<FontAwesomeIcon title="Eliminar" icon={faSquareXmark} className="mainItemCard__icon" onClick={() => removeItem(id)} />
		</div>
	);
};

export default ItemCard;

import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
	const { cart, total } = useContext(CartContext);

	if (cart.length === 0) {
		return (
			<>
				<h1>No hay productos agregados</h1>
				<Link to="/" className="card-btn">
					seguir comprando
				</Link>
			</>
		);
	}

	return (
		<>
			<h1>Productos en carrito</h1>
			{cart.map((e) => (
				<ItemCard key={e.id} {...e} />
			))}
			<h2 className="total">Total: {total()}</h2>
			<Link className="card-btn" to={"/form"}>
				Generar orden de compra
			</Link>
		</>
	);
};
export default Cart;

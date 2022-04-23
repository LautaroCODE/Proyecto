import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
	const { getQuantity } = useContext(CartContext);

	return (
		<Link to="/cart" style={{ backgroundColor: "#294674", border: "none", textDecoration: "none" }}>
			<FontAwesomeIcon style={{ color: "white", fontSize: "20px", marginRight: "10" }} icon={faCartShopping} /> <span style={{ color: "white", fontSize: "20px" }}>{getQuantity()}</span>
		</Link>
	);
};

export default CartWidget;

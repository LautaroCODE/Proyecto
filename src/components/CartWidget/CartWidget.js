import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
const CartWidget = () => {
	const { getQuantity } = useContext(CartContext);

	return (
		<button style={{ backgroundColor: "#294674", border: "none" }}>
			<FontAwesomeIcon style={{ color: "white", fontSize: "20px", marginRight: "10" }} icon={faCartShopping} /> <span style={{ color: "white", fontSize: "20px" }}>{getQuantity()}</span>
		</button>
	);
};

export default CartWidget;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
	return (
		<button style={{ backgroundColor: "#294674", border: "none" }}>
			<FontAwesomeIcon style={{ color: "white", fontSize: "20px", marginRight: "10" }} icon={faCartShopping} /> <span style={{ color: "white", fontSize: "20px" }}>1</span>
		</button>
	);
};

export default CartWidget;

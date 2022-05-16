import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (productToAdd) => {
		setCart([...cart, productToAdd]);
	};

	const getQuantity = () => {
		let count = 0;
		cart.forEach((prod) => {
			count += prod.quantity;
		});

		return count;
	};

	const total = () => {
		let total = 0;
		cart.forEach((prod) => {
			const subtotal = prod.price * prod.quantity;
			total += subtotal;
		});

		return total;
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const clearCart = () => {
		setCart([]);
	};

	const removeItem = (id) => {
		const products = cart.filter((prod) => prod.id !== id);
		setCart(products);
	};

	const getQuantityProd = (id) => {
		return cart.find((prod) => prod.id === id)?.quantity;
	};

	return <CartContext.Provider value={{ cart, addItem, getQuantity, total, isInCart, clearCart, removeItem, getQuantityProd }}>{children}</CartContext.Provider>;
};

export default CartContext;

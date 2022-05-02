import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";
import "./Cart.css";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";

const Cart = () => {
	const [loading, setLoading] = useState(false);

	const { cart, total, clearCart } = useContext(CartContext);

	const createOrder = () => {
		setLoading(true);

		const objOrder = {
			items: cart,
			buyer: {
				name: "Lautaro Vaz",
				phone: "12345678",
				email: "Lautaro.vaz@Outlook.com",
			},
			total: total(),
			date: new Date(),
		};

		const ids = cart.map((prod) => prod.id);

		const batch = writeBatch(firestoreDb);

		const collectionRef = collection(firestoreDb, "products");

		const outOfStock = [];

		getDocs(query(collectionRef, where(documentId(), "in", ids)))
			.then((response) => {
				response.docs.forEach((doc) => {
					const dataDoc = doc.data();
					const prodQuantity = cart.find((prod) => prod.id === doc.id)?.quantity;

					if (dataDoc.stock >= prodQuantity) {
						batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
					} else {
						outOfStock.push({ id: doc.id, ...dataDoc });
					}
				});
			})
			.then(() => {
				if (outOfStock.length === 0) {
					const collectionRef = collection(firestoreDb, "orders");
					return addDoc(collectionRef, objOrder);
				} else {
					return Promise.reject({ name: "outOfStockError", products: outOfStock });
				}
			})
			.then(({ id }) => {
				batch.commit();
				console.log(`El id de la orden es ${id}`);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	if (loading) {
		return <h1>Se esta generando su orden</h1>;
	}

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
			{/* <button onClick={() => clearCart()}> Clean Cart</button> */}
			<button onClick={() => createOrder()}>Generar Orden</button>
		</>
	);
};
//39:07 clase 13
export default Cart;

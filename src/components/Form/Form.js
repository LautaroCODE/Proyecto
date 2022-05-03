import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";
import "./Form.css";
import { Link } from "react-router-dom";

const Form = () => {
	const [input, setInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [ordenId, setOrdenId] = useState(null);

	const { cart, total, clearCart } = useContext(CartContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(input)
	};

	const handleKeyDown = (e) => {
		if (e.code === "Space") {
			e.preventDefault();
		}
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInput((values) => ({ ...values, [name]: value }));
	};

	const createOrder = () => {
		setLoading(true);

		const objOrder = {
			prodOrder: cart.map((prod) => {
				return { id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price };
			}),
			buyer: input,
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
				return setOrdenId(id);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	if (loading) {
		return <h1>generando orden</h1>;
	}

	if (ordenId) {
		return (
			<div>
				<h1>tu numero de orden es: {ordenId}</h1>
				<Link className="card-btn" to={"/"} onClick={() => clearCart()}>
					ver mas productos
				</Link>
			</div>
		);
	}

	return (
		<form className="main-form" onSubmit={handleSubmit}>
			<h1 className="main-form__titulo">INGRESA TUS DATOS PARA GENERAR LA ORDEN DE COMPRA</h1>
			<div>
				<div className="main-form__container">
					<input className="main-form__input" type="text" onKeyDown={handleKeyDown} onChange={handleChange} name="nombre" placeholder="nombre" value={input.nombre} required />
				</div>
				<div className="main-form__container">
					<input className="main-form__input" type="tel" onKeyDown={handleKeyDown} onChange={handleChange} name="telefono" placeholder="telefono" value={input.telefono} required />
				</div>
				<div className="main-form__container">
					<input className="main-form__input" type="email" onKeyDown={handleKeyDown} onChange={handleChange} name="email" placeholder="email" value={input.email} required />
				</div>
			</div>
			<div>
				<input className="main-form__btn" type="submit" onClick={() => createOrder()} value="comprar" />
			</div>
		</form>
	);
};

export default Form;

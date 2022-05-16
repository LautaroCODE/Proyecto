import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";
import "./Form.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Form = () => {
	const [input, setInput] = useState({ correo: "" });
	const [loading, setLoading] = useState(false);
	const [ordenId, setOrdenId] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { cart, total, clearCart } = useContext(CartContext);

	const onSubmit = (i, e) => {
		e.preventDefault();
		setInput(i);
	};

	const handleKeyDown = (e) => {
		if (e.code === "Space") {
			e.preventDefault();
		}
	};

	const createOrder = () => {
		setLoading(true);

		const objOrder = {
			prodOrder: cart.map((prod) => {
				return { id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price };
			}),
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
		<form className="main-form" onSubmit={handleSubmit(onSubmit)}>
			<h1 className="main-form__titulo">INGRESA TUS DATOS PARA GENERAR LA ORDEN DE COMPRA</h1>
			<div>
				<div className="main-form__container">
					<input className="main-form__input" type="text" name="nombre" autoComplete="off" onKeyDown={handleKeyDown} placeholder="NOMBRE" required />
				</div>
				<div className="main-form__container">
					<input className="main-form__input" type="tel" name="telefono" autoComplete="off" onKeyDown={handleKeyDown} placeholder="TELEFONO" required />
				</div>
				<div className="main-form__container">
					<input className="main-form__input" type="email" name="email" autoComplete="off" onKeyDown={handleKeyDown} {...register("correo", { required: true, pattern: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ })} placeholder="CORREO ELECTRONICO" />
					{errors.correo?.type === "required" && <span className="main-form__error">Ingrese un correo electronico</span>}
					{errors.correo?.type === "pattern" && <span className="main-form__error">Ingrese un correo electronico valido</span>}
				</div>
				<div className="main-form__container">
					<input className="main-form__input" type="email" name="email" autoComplete="off" onKeyDown={handleKeyDown} {...register("correoConfirm", { required: true, pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ })} placeholder="CORREO ELECTRONICO" />
					{errors.correoConfirm?.type === "required" && <span className="main-form__error">Ingrese un correo electronico</span>}
					{errors.correoConfirm?.type === "pattern" && <span className="main-form__error">Ingrese un correo electronico valido</span>}
				</div>
			</div>

			<div>
				<button className={input.correoConfirm === input.correo ? "main-form__hidden" : "main-form__btn main-form__visible"}> VERIFICAR </button>

				<button className={input.correoConfirm === input.correo ? "main-form__btn" : "main-form__hidden"} onClick={() => createOrder()}>
					comprar
				</button>
			</div>
		</form>
	);
};

export default Form;

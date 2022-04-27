import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
// import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = ({ setCart, cart }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const { productId } = useParams();
	// console.log(params);

	useEffect(() => {
		// getProductsById(productId)
		// 	.then((prods) => {
		// 		setProducts(prods);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	})
		// 	.finally(() => {
		// 		setLoading(false);
		// 	});

		getDoc(doc(firestoreDb, "products", productId))
			.then((response) => {
				console.log(response);
				const product = { id: response.id, ...response.data() };
				setProducts(product);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});

		return () => {
			setProducts();
		};
	}, [productId]);

	return <div className="container-card">{loading ? <h1>Cargando...</h1> : products ? <ItemDetail {...products} setCart={setCart} cart={cart} /> : <h1>El producto no existe</h1>}</div>;
};
export default ItemDetailContainer;

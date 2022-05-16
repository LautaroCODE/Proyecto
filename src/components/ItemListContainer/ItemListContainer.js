import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, limit, orderBy } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";

const ItemListContainer = (props) => {
	const [products, setProducts] = useState([]);

	const { categoryId } = useParams();

	useEffect(() => {
		const collectionRef = categoryId ? query(collection(firestoreDb, "products"), where("category", "==", categoryId), limit(20)) : query(collection(firestoreDb, "products"), orderBy("name", "asc"), limit(20));

		getDocs(collectionRef).then((response) => {
			const products = response.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			setProducts(products);
		});
	}, [categoryId]);

	if (products.length === 0) {
		return <h1>No hay productos</h1>;
	}

	return (
		<div>
			<h1 style={{ textAlign: "center", textTransform: "uppercase", marginTop: 20 }}>{props.greeting}</h1>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;

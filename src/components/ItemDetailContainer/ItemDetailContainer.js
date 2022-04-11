import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProductsById(2)
			.then((prods) => {
				setProducts(prods);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="container-card">
			<ItemDetail {...products} />
		</div>
	);
};

export default ItemDetailContainer;

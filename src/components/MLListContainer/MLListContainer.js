import { useState, useEffect } from "react";

const MLListContainer = () => {
	const [products, setProducts] = useState([]);
	const [input, setInput] = useState("");
	// useEffect(() => {
	// 	fetch("https://api.mercadolibre.com/sites/MLA/search?q=iphone")
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((res) => {
	// 			setProducts(res.results);
	// 		});
	// }, []);

	const handleSearch = () => {
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				setProducts(res.results);
			});
	};

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Mercado Libre</h1>
			<div>
				<input type="text" onChange={(e) => setInput(e.target.value)} />
				<button type="submit" onClick={handleSearch}>
					Buscar
				</button>
			</div>
			<ul>
				{products.map((e) => (
					<li style={{ textAlign: "center" }} key={e.id}>
						<img style={{ width: 90, height: 90 }} src={e.thumbnail} alt={e.title} />
						<p>{e.title}</p>
						<p>{e.price}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MLListContainer;

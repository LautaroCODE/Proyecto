const products = [
	{
		id: 1,
		name: "Samsung A02s",
		price: 33000,
		category: "celular",
		img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2693_4_.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
		stock: 15,
		description: "Descripcion de Samsung A02s",
	},
	{
		id: 2,
		name: "Samsung S21",
		price: 44000,
		category: "celular",
		img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2687-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=boundshttps://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG",
		stock: 16,
		description: "Descripcion de Samsung s21",
	},
	{
		id: 3,
		name: "Samsung Galaxy S20FE",
		price: 30000,
		category: "celular",
		img: "https://images.fravega.com/f500/c965a6d0e2fc723c39b4ccc42641e001.jpg",
		stock: 8,
		description: "Descripcion de Samsung Galaxy S20FE",
	},
	{
		id: 4,
		name: "Samsung A03s",
		price: 40000,
		category: "celular",
		img: "https://images.fravega.com/f500/ddea497ae0d94054111cfa7b394deec3.jpg",
		stock: 20,
		description: "Descripcion de Samsung A03s",
	},
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
};

const products = [
	{
		id: "1",
		name: "Samsung A02s",
		price: 33000,
		category: "celular",
		img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2693_4_.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
		stock: 15,
		description: "Descripcion de Samsung A02s",
	},
	{
		id: "2",
		name: "Samsung S21",
		price: 44000,
		category: "celular",
		img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2687-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=boundshttps://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG",
		stock: 16,
		description: "Descripcion de Samsung s21",
	},
	{
		id: "3",
		name: "Samsung Notebook HP",
		price: 30000,
		category: "notebook",
		img: "https://www.cetrogar.com.ar/media/catalog/product/c/m/cm3221-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",
		stock: 8,
		description: "Descripcion de Samsung Notebook HP",
	},
	{
		id: "4",
		name: "Lenovo Tab K10",
		price: 40000,
		category: "tablet",
		img: "https://http2.mlstatic.com/D_Q_NP_2X_972580-MLA48600236953_122021-P.jpg",
		stock: 20,
		description: "Descripcion de Lenovo Tab K10",
	},
];

const categories = [
	{ id: "celular", description: "Celular" },
	{ id: "tablet", description: "Tablet" },
	{ id: "notebook", description: "Notebook" },
];

export const getCategories = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(categories);
		}, 500);
	});
};

export const getProducts = (categoryId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(categoryId ? products.filter((prod) => prod.category === categoryId) : products);
		}, 2000);
	});
};

export const getProductsById = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.find((prod) => prod.id === id));
		}, 2000);
	});
};

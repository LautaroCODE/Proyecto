import "./ItemDetail.css";
const ItemDetail = ({ img, price, name, stock }) => {
	// console.log(products);
	const detalle = () => {
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
	};
	return (
		<>
			<div className="main-card">
				<h3 className="main-card__titulo">{name}</h3>
				<img className="main-card__img" src={img} alt={name} />
				<p>Precio: $ {price}</p>
				<p> Cantidad: {stock}</p>
				<button className="main-card__btn" onClick={detalle}>
					ver detalle
				</button>
			</div>
		</>
	);
};

export default ItemDetail;

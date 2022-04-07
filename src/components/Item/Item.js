import "./Item.css";

const Item = ({ name, img, price, stock }) => {
	return (
		<>
			<div className="main-card">
				<h3 className="main-card__titulo">{name}</h3>
				<img className="main-card__img" src={img} alt={name} />
				<p>$ {price}</p>
				<button className="main-card__btn">Ver detalle</button>
			</div>
		</>
	);
};

export default Item;

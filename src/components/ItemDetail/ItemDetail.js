import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ img, price, name, stock }) => {
	return (
		<>
			<div className="main-card-detalle">
				<h3 className="main-card-detalle__titulo">{name}</h3>
				<img className="main-card-detalle__img" src={img} alt={name} />
				<p>Precio: $ {price}</p>
				<p> Cantidad: {stock}</p>
				<ItemCount />
			</div>
		</>
	);
};

export default ItemDetail;

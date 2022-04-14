import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
	return (
		<>
			<div className="main-card">
				<h3 className="main-card__titulo">{name}</h3>
				<img className="main-card__img" src={img} alt={name} />
				<p>$ {price}</p>
				<button className="main-card__btn">
					<Link to={`/detail/${id}`} className="main-card__link">
						Ver detalle
					</Link>
				</button>
			</div>
		</>
	);
};

export default Item;

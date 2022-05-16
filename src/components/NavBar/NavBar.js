import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import { firestoreDb } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";
const NavBar = (props) => {
	const [categories, setCategories] = useState([]);
	const { getQuantity } = useContext(CartContext);

	useEffect(() => {
		getDocs(collection(firestoreDb, "categories")).then((response) => {
			const categories = response.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			setCategories(categories);
		});
	}, []);

	return (
		<nav className="main-nav">
			<Link to="/">
				<img className="logo" src="./img/ecommerce.png" alt="logo" />
				<h1 style={{ color: "white", display: "inline-block", marginBottom: 20 }}>ELECTRICS</h1>
			</Link>
			<ul className="main-nav__list">
				{categories.map((cat) => (
					<li key={cat.id} className="main-nav__item">
						<NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) => (isActive ? "main-nav__link--active" : "main-nav__link")}>
							{cat.description}
						</NavLink>
					</li>
				))}
			</ul>
			{getQuantity() > 0 ? <CartWidget /> : null}
		</nav>
	);
};

export default NavBar;

import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// import { getCategories } from "../../asyncmock";
import CartContext from "../../context/CartContext";
import { firestoreDb } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";
const NavBar = (props) => {
	const [categories, setCategories] = useState([]);
	const { getQuantity } = useContext(CartContext);

	useEffect(() => {
		// getCategories().then((categories) => {
		// 	setCategories(categories);
		// });
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
				<img className="logo" src="./img/logo192.png" alt="logo" />
			</Link>
			<ul className="main-nav__list">
				{/* <li className="main-nav__item">
					<NavLink to="/list" className={({ isActive }) => (isActive ? "main-nav__link--active" : "main-nav__link")}>
						List
					</NavLink>
				</li> */}
				{/* <li className="main-nav__item">
					<NavLink to="/detail" className={({ isActive }) => (isActive ? "main-nav__link--active" : "main-nav__link")}>
						Detail
					</NavLink>
				</li> */}
				{/* <li className="main-nav__item">
					<a className="main-nav__link" href="./index.html">
						inicio
					</a>
				</li> */}
				{/* <li className="main-nav__item">
					<a className="main-nav__link" href="./index.html">
						tablets
					</a>
				</li> */}
				{/* <li className="main-nav__item">
					<a className="main-nav__link" href="./index.html">
						computadoras
					</a>
				</li> */}
				{/* <li className="main-nav__item">
					<a className="main-nav__link" href="./index.html">
						celulares
					</a>
				</li> */}
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

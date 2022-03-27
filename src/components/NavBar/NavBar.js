import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="main-nav">
			<a href="./index.html">
				<img className="logo" src="./img/logo192.png" alt="logo" />
			</a>
			<ul className="main-nav__list">
				<li className="main-nav__item">
					<a className="main-nav__link" href="./index.html">
						inicio
					</a>
				</li>
				<li className="main-nav__item">
					<a className="main-nav__link" href="./index.html">
						tablets
					</a>
				</li>
				<li className="main-nav__item">
					<a className="main-nav__link" href="./index.html">
						computadoras
					</a>
				</li>
				<li className="main-nav__item">
					<a className="main-nav__link" href="./index.html">
						celulares
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;

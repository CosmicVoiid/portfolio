import React from "react";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<li className="navbar-list__item">Home</li>
				<li className="navbar-list__item">About</li>
				<li className="navbar-list__item">Projects</li>
				<li className="navbar-list__item">Contact</li>
			</ul>
		</nav>
	);
}

export default Navbar;

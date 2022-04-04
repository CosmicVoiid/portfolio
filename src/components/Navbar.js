import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar(props) {
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<li className="navbar-list__item">
					<a
						className={"nav-anchor " + (props.inView === "home" && "selected")}
						href="#home"
						onClick={(e) => {
							e.preventDefault();
							const home = document.getElementById("home");
							home && home.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Home
					</a>
				</li>
				<li className="navbar-list__item">
					<a
						className={"nav-anchor " + (props.inView === "about" && "selected")}
						href="#about"
						onClick={(e) => {
							e.preventDefault();
							const about = document.getElementById("about");
							about && about.scrollIntoView({ behavior: "smooth" });
						}}
					>
						About
					</a>
				</li>
				<li className="navbar-list__item">
					<a
						className={
							"nav-anchor " + (props.inView === "projects" && "selected")
						}
						href="#projects"
						onClick={(e) => {
							e.preventDefault();
							const projects = document.getElementById("projects");
							projects && projects.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Projects
					</a>
				</li>
				<li className="navbar-list__item">
					<a
						className={
							"nav-anchor " + (props.inView === "contact" && "selected")
						}
						href="#contact"
						onClick={(e) => {
							e.preventDefault();
							const contact = document.getElementById("contact");
							contact && contact.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

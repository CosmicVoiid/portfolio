import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		clicked ? setClicked(false) : setClicked(true);
	};

	return (
		<nav className="navbar">
			<ul className="navbar-list navbar-list__desktop">
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
							"nav-anchor list-last " +
							(props.inView === "contact" && "selected")
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
			{/* <div
				className={
					"sidebar-hamburger " + (clicked && "sidebar-hamburger-clicked")
				}
				onClick={handleClick}
			>
				<div className="span-container">
					<span className={"line line1 " + (clicked && "line1-clicked")}></span>
					<span className={"line line2 " + (clicked && "line2-clicked")}></span>
					<span className={"line line3 " + (clicked && "line3-clicked")}></span>
				</div>
			</div>
			<ul className="navbar-list navbar-list__mobile">
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
			</ul> */}
		</nav>
	);
}

export default Navbar;

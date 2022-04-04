import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Canvas from "./components/Canvas";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	const [currentView, setCurrentView] = useState("home");

	useEffect(() => {
		const handleScroll = (e) => {
			const sections = document.querySelectorAll("div[id]");
			let scrollY = window.pageYOffset;

			sections.forEach((current) => {
				const sectionHeight = current.offsetHeight;
				const sectionTop = current.offsetTop - 100;
				const sectionId = current.getAttribute("id");

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					setCurrentView(sectionId);
				}
			});
		};

		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="app">
			<Canvas />
			<Home />
			<Navbar inView={currentView} />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

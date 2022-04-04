import React from "react";
import "./Home.css";

function Home() {
	return (
		<div id="home" className="home-page">
			<h1 className="intro-header">
				Hi I'm <b className="intro-header__bold">Saurav</b>,
			</h1>
			<h1 className="intro-header intro-header2">
				{" "}
				a Fullstack Web Developer.
			</h1>
			<button
				className="home-button"
				onClick={(e) => {
					e.preventDefault();
					const about = document.getElementById("about");
					about && about.scrollIntoView({ behavior: "smooth" });
				}}
			>
				View my work
				<svg
					className="svg-arrow"
					width="20"
					height="23"
					viewBox="0 0 24 34"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M13.5 2C13.5 1.17157 12.8284 0.5 12 0.5C11.1716 0.5 10.5 1.17157 10.5 2H13.5ZM10.9393 33.0607C11.5251 33.6464 12.4749 33.6464 13.0607 33.0607L22.6066 23.5147C23.1924 22.9289 23.1924 21.9792 22.6066 21.3934C22.0208 20.8076 21.0711 20.8076 20.4853 21.3934L12 29.8787L3.51472 21.3934C2.92893 20.8076 1.97918 20.8076 1.3934 21.3934C0.807612 21.9792 0.807612 22.9289 1.3934 23.5147L10.9393 33.0607ZM10.5 2L10.5 32H13.5L13.5 2H10.5Z" />
				</svg>
			</button>
		</div>
	);
}

export default Home;

import React from "react";
import "./Home.css";

function Home() {
	return (
		<div className="home-page">
			<h1 className="intro-header">
				Hi I'm <b className="intro-header__bold">Saurav</b>,
			</h1>
			<h1 className="intro-header intro-header2">
				{" "}
				a Fullstack Web Developer.
			</h1>
		</div>
	);
}

export default Home;

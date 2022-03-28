import React from "react";
import Navbar from "./Navbar";
import "./About.css";

function About() {
	return (
		<div className="about">
			<Navbar />
			<h1 className="about-header">
				About<span className="header-border-bottom"></span>
			</h1>

			<p className="about-content">
				Completely committed to the philosophy of life-long learning, I'm a
				fullstack developer who absolutely loves building things and learning
				new tools and techniques for honing my craft. The unique combination of
				creativity, logic, technology and never running out of new things to
				discover, drives my excitement and passion for web development. From my
				background as a carpenter, I've noticed many simularities between the
				processes of engineering structures and creating software, so I'm well
				acquainted to bringing out solutions to complex problems. Other things I
				love doing is playing guitar, staying in shape, and boxing.
			</p>
			<div className="wave-container">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className="wave"
						fill="#2F2F2F"
						fill-opacity="1"
					></path>
				</svg>
			</div>
		</div>
	);
}

export default About;
